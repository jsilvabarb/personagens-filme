import React, { useState, useEffect } from 'react';
import "./style.css";
import Personagensdb from '../../Personagensdb';
import ModalPersonagens from '../ModalPersonagens';

export default ({filmes}) =>{
   
   const [modalVisivel, setModalVisivel] = useState(false);

    return(
        <div className="lista-filmes">
           
            <div id={filmes.id} className="lista-filmes-item">
                <img src={filmes.poster}></img>
                <div className="descricao">
                    <h2>{filmes.nome}</h2>
                    <h4>{filmes.descricao}</h4>
                    <button  className="btn-personagem" onClick= {() => setModalVisivel(true)}>Personagens</button>
                    {modalVisivel ? <ModalPersonagens onClose={() => setModalVisivel(false)} idFilme={filmes.id} filme={filmes.nome} descricao={filmes.descricao} /> : null}
                    <hr></hr>                    
                </div>                
            </div>
        </div>
    )  
}
    
   
