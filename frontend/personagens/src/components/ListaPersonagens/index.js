import React, { useState, useEffect } from 'react';
import {FaTrashAlt}  from "react-icons/fa";
import Personagensdb from "../../Personagensdb";
import "./ListaPersonagens.css";
import ModalDetalhesPersonagem from '../ModalDetalhesPersonagem';

const ListaPersonagens = ({personagens}) => {
   

   const [modalVisivel, setModalVisivel] = useState(false);
   const [cenario, setCenario] = useState();


    const id = personagens.id; 

    useEffect(() => {
        Personagensdb.makeRequest("http://localhost:3001/"+id+"/cenario", "GET").then(function(response) {
         response.json().then(function(Cenario) {
            setCenario(Cenario);          
         })
        });    
    }, [])

    return(
        <div className="personagens-area">
            <div className="personagens-lista">                          
                <div id={personagens.id} className="personagens-lista-item">
                    
                     <button onClick={() => setModalVisivel(true)} className="btn-personagem-detalhe">
                         <img src={personagens.imagem} alt={personagens.nome}></img>                               
                    </button>
                    
                    {modalVisivel ? <ModalDetalhesPersonagem onClose={() => setModalVisivel(false)} idPersonagem={personagens.id} nomePersonagem={personagens.nome} descricaoPersonagem={personagens.descricao} imagemPersonagem={personagens.imagem} cenario={cenario}/> : null} 
                                                                
                </div>                                
            </div>          
        </div>
    )  
}

export default ListaPersonagens;