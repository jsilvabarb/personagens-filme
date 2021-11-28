/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import "./App.css";
import Pernonagensdb from "./Personagensdb";
import ListaFilmes from "./components/ListaFilmes";
import ModalAddFilmes from "./components/ModalAddFilmes";



export default () => {
  
  const [ listaFilmes, setListaFilmes ] = useState([{}]);
  const [modalVisivel, setModalVisivel] = useState(false);
  useEffect(() => {
   Pernonagensdb.makeRequest("http://localhost:3001/filmes", "GET").then(function(response) {
    response.json().then(function(Filmes) {
      console.log(Filmes);
      setListaFilmes(Filmes);
    })
   });    
  }, [])
  return (
    <div className="page">
      <nav className="menu">
        <h1>ANIMADOS</h1>
        <button onClick={() => setModalVisivel(true)}>+ Filmes</button>
        {modalVisivel ? <ModalAddFilmes onClose={() => setModalVisivel(false)}/> : null}  
      </nav>

      <section className="filmes">
      {listaFilmes.map((filmes)=> (
        <ListaFilmes filmes= {filmes}/>
      ))}
      </section>

    </div>
  )
  
}


