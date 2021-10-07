import React, { useState, useEffect, useContext } from 'react';
import './new.css'
import firebase from '../../services/firebaseConnection'
import { useHistory, useParams } from 'react-router-dom';

import Header from '../../components/Header'
import Title from '../../components/Title'
import { AuthContext } from '../../contexts/auth';
import { FiPlusCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function New() {

    const { id } = useParams()
    const history = useHistory()

    const [customers, setCustomers] = useState([])
    const [loadCustomers, setLoadCustomers] = useState(true)
    const [customerSelected, setCustomerSelected] = useState(0)

    const [assunto, setAssunto] = useState('Suporte')
    const [status, setStatus] = useState('Aberto')
    const [complemento, setComplemento] = useState('')

    const [idCustomer, setIdCustomer] = useState(false)

    const { user } = useContext(AuthContext)

    useEffect(() => {
       async function loadCustomers(){
        await firebase.firestore().collection('customers').get()
        .then((snapshot) => {
            let lista = []

            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    nomeFantasia: doc.data().nomeFantasia
                })
            })

            if(lista.length === 0){
                console.log('Nenhuma empresa encontrada')
                setCustomers([ { id: '1', nomeFantasia: ''} ])
                setLoadCustomers(false)
                return
            }

            setCustomers(lista)
            setLoadCustomers(false)

            if(id) {
                loadId(lista)
            }
        })
        .catch((error) => {
            console.log('Deu algum erro', error)
            setLoadCustomers(false)
            setCustomers([ { id: '1', nomeFantasia: ''} ])
        })
       } 
       loadCustomers()
    }, [id])

    async function loadId(lista) {
        await firebase.firestore().collection('chamados').doc(id).get()
        .then((snapshot) => {
            setAssunto(snapshot.data().assunto)
            setStatus(snapshot.data().status)
            setComplemento(snapshot.data().complemento)

            let index = lista.findIndex(item => item.id === snapshot.data().clienteId)
            setCustomerSelected(index)
            setIdCustomer(true)
        })
        .catch((error) => {
            console.log('Erro no ID passado:' + error)
            setIdCustomer(false)
        })
    }

    async function handleRegister(e) {
        e.preventDefault()

        if(idCustomer) {
            await firebase.firestore().collection('chamados').doc(id)
            .update({
                cliente: customers[customerSelected].nomeFantasia,
                clienteId: customers[customerSelected].id,
                assunto: assunto,
                status: status,
                complemento: complemento,
                userId: user.uid
            })
            .then(() => {
                toast.success('Chamado Editado com Sucesso!')
                setCustomerSelected(0)
                setComplemento('')
                history.push('/dashboard')
            })
            .catch((error) => {
                toast.error('Oopss.. Erro ao editar, tente novamente mais tarde!')
                console.log(error)
            })
            return
        }
        
        await firebase.firestore().collection('chamados').add({
            created: new Date(),
            cliente: customers[customerSelected].nomeFantasia,
            clienteId: customers[customerSelected].id,
            assunto: assunto,
            status: status,
            complemento: complemento,
            userId: user.uid
        })
        .then(() => {
            toast.success('Chamado criado com Sucesso!')
            setComplemento('')
            setCustomerSelected(0)
            setAssunto('Suporte')
        })
        .catch((error) => {
            toast.error('Oopss.. Erro ao registrar, tente novamente mais tarde!')
            console.log(error)
        })
    }

    // chama quando troca o assunto
    function handleChangeSelect(e) {
        setAssunto(e.target.value)
    }

    // Chama quando trocar o status
    function handleOptionChange(e) {
        setStatus(e.target.value)
    }

    // chama quando troca de cliente
    function handleChangeCustomers(e) {
        //console.log('Index do cliente selecionado: ', e.target.value)
        //console.log('Cliente selecionado: ', customers[e.target.value])
        setCustomerSelected(e.target.value)
    }

    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Novo Chamado">
                    <FiPlusCircle size={25} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleRegister}>
                        <label>Cliente:</label>

                        {loadCustomers ? (
                            <input type="text" disabled={true} value="Carregando clientes..." />
                        ) : (
                            <select value={customerSelected} onChange={handleChangeCustomers}>
                                {customers.map((item, index) => {
                                    return (
                                        <option key={item.id} value={index}>
                                            {item.nomeFantasia}
                                        </option>
                                    )
                                })}
                            </select>
                        )}                        

                        <label>Assunto:</label>
                        <select value={assunto} onChange={handleChangeSelect}>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita Tecnica">Visita Técnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <label>Status:</label>
                        <div className="status">
                            <input type="radio" name="radio" value="Aberto"
                                onChange={handleOptionChange} 
                                checked={ status === 'Aberto' }/>
                            <span>Em Aberto</span>

                            <input type="radio" name="radio" value="Progresso"
                                onChange={handleOptionChange}
                                checked={ status === 'Progresso' } />
                            <span>Em Progresso</span>

                            <input type="radio" name="radio" value="Atendido" 
                                onChange={handleOptionChange}
                                checked={ status === 'Atendido' } />
                            <span>Atendido</span>
                        </div>

                        <label>Complemento:</label>
                        <textarea type="text" placeholder="Descreva seu problema (Opcional)."
                            value={complemento} onChange={(e) => setComplemento(e.target.value)} />

                        <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}