import React, { useState } from 'react';
import {FaTrashAlt}  from "react-icons/fa";
import Personagensdb from "../../Personagensdb";
import "./ListaPersonagens.css";
// import ModalPersonagens from '../ModalPersonagens';

const ListaPersonagens = ({personagens}) => {
   

   const [modalVisivel, setModalVisivel] = useState(false);

    const deletePersonagem = (e) => {
        console.log(e.target.id);
    //    Personagensdb.makeRequest("http://localhost:3001/personagens/" + e.target.id, "DELETE");
    }

    const id = personagens.id;   

    return(
        <div className="personagens-area">
            <div className="personagens-lista">                          
                <div id={personagens.id} className="personagens-lista-item">
                    
                     <button className="btn-personagem-detalhe">
                         <img src={personagens.imagem} alt={personagens.nome}></img>
                         {personagens.id}
                             <h5 id={personagens.id} className="delete" onClick={deletePersonagem}><FaTrashAlt/></h5>                           
                    </button>                                            
                </div>               
            </div>
          
        </div>
    )  
}

export default ListaPersonagens;