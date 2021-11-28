/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import "./App.css";
import Pernonagensdb from "./Personagensdb";
import ListaFilmes from "./components/ListaFilmes";



export default () => {
  
  const [ listaFilmes, setListaFilmes ] = useState([{}]);
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
      <nav>
        <h1>Animados</h1>
      </nav>

      <section className="filmes">
      {listaFilmes.map((filmes)=> (
        <ListaFilmes filmes= {filmes}/>
      ))}
      </section>

    </div>
  )
  
}


