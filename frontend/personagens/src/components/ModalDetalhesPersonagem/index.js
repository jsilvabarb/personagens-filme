import React, { useEffect, useState } from "react";
import Personagensdb from "../../Personagensdb";
import {FaEdit, FaTrashAlt}  from "react-icons/fa";
import {FaWindowClose}  from "react-icons/fa";
import ModalUpdate from "../ModalUpdate"
import "./ModalDetalhesPersonagem.css";

const ModalDetalhesPersonagem = ({id = "modal", onClose = () => {}, idPersonagem, nomePersonagem, descricaoPersonagem, imagemPersonagem, cenario } ) => {

    const handleOutsideClick = (e) => {
        console.log(e.target.id);
        if(e.target.id === id) onClose();
    }     
     
     const [message, setMessage] = useState(" ");
     const [modalVisivel, setModalVisivel] = useState(false);

    const [formValues, setFormValues] = useState({});
    const handleInputChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setFormValues({...formValues, [name]: value})
    }

     const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);

        const { imagem } = data;

        if( imagem != "") {
            Personagensdb.makeRequest("http://localhost:3001/addcenario/"+idPersonagem, "POST", JSON.stringify(formValues)).then(function(response) {
            response.text().then(function(message) {
                setMessage("Cenário adicionado com sucesso!");
                
                // eslint-disable-next-line no-restricted-globals
                location.reload();
            }).catch(function(err) {
                setMessage("Ocorreu um erro:"+err);
            })
        })
        } else {
            setMessage("Preencha todos os campos.");
        }
        
    };

    const deletePersonagem = () => {
        Personagensdb.makeRequest("http://localhost:3001/personagens/"+idPersonagem, "DELETE").then(function(response) {
            response.text().then(function(message) {
            setMessage("Personagem excluído com sucesso!");

            // eslint-disable-next-line no-restricted-globals
            location.reload();
            }).catch(function(err) {
            setMessage("Ocorreu um erro:"+err);
            })
        })
    }

   
    
    return (

        <div id={id} className="modal-detalhes-personagens" onClick={handleOutsideClick}>
            
           <div className="container" >
                <button className="close" onClick={onClose}><h3><FaWindowClose/></h3></button>
                <div className="cabecalho"> 
                        <img src={imagemPersonagem}></img>
                        <div clasName="nome-buttons">
                            <h2 style={{color:"#000"}}>{nomePersonagem}</h2>
                            <button style={{fontSize:"20px"}} className="delete" onClick={deletePersonagem}><FaTrashAlt/></button>
                            <button style={{fontSize:"20px"}} className="update" onClick={() => {setModalVisivel(true)}}><FaEdit/></button>
                        </div>
                    </div>                
                    <div className="detalhes-corpo">
                        <h2>Descrição</h2>
                        <p>{descricaoPersonagem}</p>             
                        
                    </div>
                <div className="content">
   
                   <div className="column left">
                      {modalVisivel ?  <ModalUpdate onClose={() => {setModalVisivel(false)}} idPersonagem={idPersonagem} nomePersonagem={nomePersonagem} descricaoPersonagem={descricaoPersonagem} imagemPersonagem={imagemPersonagem}/> : null}
                   </div>
                </div>

                <div className="rodape">
                <button className="btn-add-personagem" >Cenário</button>
                   
                <p>{message}</p>
                </div>
           </div>
            
        </div>
    )
}

export default ModalDetalhesPersonagem;