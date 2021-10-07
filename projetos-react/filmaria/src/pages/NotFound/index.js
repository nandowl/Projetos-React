import React from 'react'
import './notfound.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="container">
            <div className="box">
                <h1 className="titulo-404">404: Not Found!</h1>
                <h2 className="subtitulo-404"> Ooops.. Parece que a página que está tentando acessar não existe! </h2> <br />
                <h2 className="subtitulo-404"> \('_')/ </h2>
             </div>
             <Link className="botao-link" to="/">Veja todos os filmes!</Link>
        </div>
       
    )
}