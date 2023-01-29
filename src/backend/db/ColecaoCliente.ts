import { dataBase } from '../config'
import firestore, {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
} from 'firebase/firestore'
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "../ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
    #conversor = {
        toFirestore: (cliente: Cliente) => {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
                email: cliente.email
            }
        },
        fromFirestore: (
            snapshot: firestore.QueryDocumentSnapshot,
            options: firestore.SnapshotOptions,
        ) => {
            const dados = snapshot.data(options);
            return new Cliente(dados.nome,dados.idade,dados.email,snapshot.id);
        }
    }
    #colecao = collection(dataBase, 'clientes').withConverter(this.#conversor);

    async salvar(cliente: Cliente): Promise<Cliente | any> {
        if (cliente?.id) {
            await setDoc(
                doc(dataBase, 'clientes', cliente.id).withConverter(this.#conversor),cliente);
            return cliente;
        } else {
            const docRef = await addDoc(this.#colecao, cliente);
            const doc = await  getDoc(docRef);
            return doc.data();
        }

    }
    async excluir(cliente: Cliente): Promise<void> {
        return await deleteDoc(doc(dataBase, 'clientes', cliente.id));
    }
    async obterTodos(): Promise<Cliente[]> {
        const clientesCol = this.#colecao;
        const clientesSnapshot = await getDocs(clientesCol);
        const clientesList = clientesSnapshot.docs.map((doc) => doc.data()) ?? [];
        return clientesList;
    }

}