import {useState} from "react";
import {FaWindowClose}  from "react-icons/fa";
import Personagensdb from "../../Personagensdb";
import "./ModalUpdate.css";

const FormUpdate = ({onClose = () => {}, idPersonagem, nomePersonagem, descricaoPersonagem, imagemPersonagem}) => {

    const [message, setMessage] = useState(" ");
    const [formValues, setFormValues] = useState({nome: nomePersonagem, descricao: descricaoPersonagem, imagem:imagemPersonagem});
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
            Personagensdb.makeRequest("http://localhost:3001/personagens/"+idPersonagem, "PUT", JSON.stringify(formValues)).then(function(response) {
                response.text().then(function(message) {
                setMessage("Personagem atualizado com sucesso!");

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

    return (

        <div className="modal-update-personagens">
            <div className="container">
                <button className="close" onClick={onClose}><h3><FaWindowClose/></h3></button>

                <h2>Atualizar Personagem</h2>

                <div className="content">                      
            <form className="formulario" onSubmit = {handleSubmit}>
                <label><small>Nome</small></label>
                <input type="text" name="nome" placeholder="Nome" onChange={handleInputChange} value={formValues.nome} />
                <label><small>Descrição:</small></label>
                <textarea rows="4" cols="50"  type="text" name="descricao" placeholder="Descrição" onChange={handleInputChange} value={formValues.descricao} />
                <label><small>Link da Imagem:</small></label>
                <input  type="text" name="imagem" placeholder="Link da Imagem" onChange={handleInputChange} value={formValues.imagem} />
                <br></br>
                <button type="submit"> Enviar </button>
            </form>
            <h4 className="message">{message}</h4>     
         </div>                              
            </div>
        </div> 

        
    )
}

export default FormUpdate;