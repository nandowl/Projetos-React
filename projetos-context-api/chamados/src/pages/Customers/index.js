import React, { useState } from 'react'
import './customers.css'
import firebase from '../../services/firebaseConnection'

import Header from '../../components/Header'
import Title from '../../components/Title'

import { FiUser } from 'react-icons/fi'
import { toast } from 'react-toastify'

export default function Customers() {
    const [nomeFantasia, setNomeFantasia] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [endereco, setEndereco] = useState('')

    async function handleAdd(e) {
        e.preventDefault()
       
        if(nomeFantasia !== '' && cnpj !== '' && endereco !== '') {
            await firebase.firestore().collection('customers')
            .add({
                nomeFantasia: nomeFantasia,
                cnpj: cnpj,
                endereco: endereco
            })
            .then(() => {
                setNomeFantasia('')
                setCnpj('')
                setEndereco('')
                toast.info('Empresa cadastrada com Sucesso!')
            })
            .catch((error) => {
                console.log(error)
                toast.error('Oopss.. ocorreu algum erro ao cadastrar a empresa!')
            })
        } else {
            toast.error('Preencha todos os campos!')
        }
    }

    return (
        <div >
           <Header />
            <div className="content">
                <Title name="Clientes">
                    <FiUser size={25} />
                </Title>

                <div className="container">
                    <form className="form-profile customers" onSubmit={handleAdd}>
                        <label>Nome da Empresa</label>
                        <input type="text" value={nomeFantasia}
                            placeholder="Digite o nome da sua empresa..."
                            onChange={(e) => setNomeFantasia(e.target.value)} />

                        <label>CNPJ</label>
                        <input type="text" value={cnpj}
                            placeholder="Digite o Cnpj da sua empresa..."
                            onChange={(e) => setCnpj(e.target.value)} />

                        <label>Endereço</label>
                        <input type="text" value={endereco}
                            placeholder="Digite o Endereço da sua empresa..."
                            onChange={(e) => setEndereco(e.target.value)} />
                        
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}