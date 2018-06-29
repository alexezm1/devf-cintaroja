import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Saludo from './components/Saludo'
import axios from 'axios'

class App extends Component {

  constructor(){ 
    super();
    this.state = { //si se modifica el estado, se vuelve a renderear
      // saludo: "Hola cinta roja",
      // texts: "Saludo desde texto",
      // numero: 0,
      // cards: [
      //   {nombre: "Juan", telefono: "123986213"},
      //   {nombre: "Pedro", telefono: "1233434213"},
      //   {nombre: "Jose", telefono: "1239232313"},
      //   {nombre: "Miguel", telefono: "12010126213"}
      // ],
      // pokemons: []


    }
  }

  // updatedComponent(){
  //   const poke = this.state.pokemons.map((elem,ix,arr)=>{
  //     return <Card nombre = {elem.name}/>
  //   })
  //   return poke
  // }

  
  componentDidMount(){
    axios.get('https://pokeapi.co/api/v1/pokedex/1/')
      .then(response => {
        this.setState({
          pokemons: response.data.pokemon
        })
      })
      .catch(err =>console.log(err))
  }

  // updateCardPokemon(){
  //   if(this.state.pokemons.length == 0){
  //     <div><h1> Cargando... </h1></div>
  //   }
  //   else { 
  //       let pokemons = this.state.pokemons.map((elem,ix,arr)=>{
  //         return <Card nombre = {elem.name} bio ={elem.resource_uri}/>
        
  //       })
  //   return pokemons
  //   }
  // }

  aumentarNumero = (e) =>{

    this.setState({
      numero: this.state.numero + 1
    })
    
  }

  disminuirNumero = (e) =>{
    this.setState({
      numero: this.state.numero - 1
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Saludo saludo = {this.state.numero}/>
        <button onClick = {this.aumentarNumero}> + </button>
        <button onClick = {this.disminuirNumero}> - </button>
        {this.updateCardPokemon()} 
      </div>
    );
  }
}

export default App;
