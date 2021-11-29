import React, { useEffect, useState } from "react";
import Personagensdb from "../../Personagensdb";
import ListaPersonagens from "../ListaPersonagens" 
import ModalAddPersonagem from "../ModalAddPersonagem";
import {FaWindowClose}  from "react-icons/fa";
import "./style.css";

const Modal = ({id = "modal", onClose = () => {}, idFilme, filme, descricao} ) => {

    const handleOutsideClick = (e) => {
        console.log(e.target.id);
        if(e.target.id === id) onClose();
    }
    
     const [ listaPersonagens, setListaPersonagens ] = useState([{}]);
     const [modalVisivel, setModalVisivel] = useState(false);
     const [message, setMessage] = useState(" ");

    useEffect(() => {
        Personagensdb.makeRequest("http://localhost:3001/"+idFilme+"/personagens", "GET").then(function(response) {
         response.json().then(function(Personagens) {
            setListaPersonagens(Personagens);
            if(Personagens.length === 0) {
                setMessage("Adicione personagens ao filme!");
            }
         })
        });    
    }, [])
    return (
        <div id={id} className="modal-personagens" onClick={handleOutsideClick}>
            
           <div className="container" >
                <button className="close" onClick={onClose}><h3><FaWindowClose/></h3></button>
                <div className="cabecalho"> 
                    <h2>{filme}</h2>
                    {descricao}
                    <h2>Personagens</h2>
                </div>                
                <div className="corpo">
                    
                    <div className="personagens">
                        {listaPersonagens.map((personagens)=> (
                            <ListaPersonagens personagens= {personagens}/>
                            
                        ))}
                        
                        <h3 className="message">{message}</h3>
                    </div>
                       
                </div>
                <div className="rodape">
                    <button className="btn-add-personagem" onClick={() => setModalVisivel(true)}>Adionar</button>
                    {modalVisivel ? <ModalAddPersonagem onClose={() => setModalVisivel(false)} idFilme={idFilme} filme={filme}/> : null}
                </div>
           </div>
            
        </div>
    )
}

export default Modal;