import React, { useEffect, useState } from "react";
import Personagensdb from "../../Personagensdb";
// import ListaPersonagens from "../ListaPersonagens" 
import "./style.css";

const ModalAddPersonagem = ({ onClose= () => {},idFilme, filme}) => {

    const [message, setMessage] = useState(" ");
    const [formValues, setFormValues] = useState({});
    const handleInputChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        console.log(name, value);
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);

        const { nome, descricao, imagem } = data;

        if(nome != "" && descricao != "" && imagem != "") {
            Personagensdb.makeRequest("http://localhost:3001/"+idFilme+"/personagens", "POST", JSON.stringify(formValues)).then(function(response) {
            response.text().then(function(message) {
                setMessage("Personagem adicionado com sucesso!");
            }).catch(function(err) {
                setMessage("Ocorreu um erro:"+err);
            })
        })
        } else {
            setMessage("Preencha todos os campos.");
        }
        
    };

   
    return (
        <div className="modal-add-personagens">
            <div className="container">
                <button className="close" onClick={onClose}><h3>Voltar</h3></button>
            
            
              <div className="content">
                    <div className="column right">
                        <div className="cabecalho"><h2> Insira Personagens a {filme}</h2></div>
                        <div className="texto"><p> Não fique de fora! Sinta-se parte da animação inserindo personagens ao filme {filme}!!!</p></div> 
                    </div>               
                    <div className="column left">
                        <form className="formulario" onSubmit = {handleSubmit}>
                            <input type="text" name="nome" placeholder="Nome" onChange={handleInputChange} />
                            <input type="text" name="descricao" placeholder="Descrição" onChange={handleInputChange} />
                            <input type="text" name="imagem" placeholder="Link da Imagem" onChange={handleInputChange} />
                            <br></br>
                            <button type="submit"> Enviar </button>
                        </form>
                        <h4 className="message">{message}</h4>
                    </div>
              </div>
                                
            
            </div>
        </div>
    )
}

export default ModalAddPersonagem;