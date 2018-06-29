import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './componentes/Cards.js'
import Create from './componentes/Create.js'
import Navbar from './componentes/Navbar.js'
import axios from 'axios'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {

  constructor(){
    super();

    this.state = {
      articulos: []
    }
  }

  updateCardArts(){
    if(this.state.articulos.length == 0){
      <div><h1> Cargando... </h1></div>
    }
    else { 
        let arts = this.state.articulos.map((elem,ix,arr)=>{
          return <Cards nombre = {elem.name} price ={elem.price}/>
        
        })
    return arts
    }
  }

  componentDidMount(){
    axios.get("https://backenddeployed.herokuapp.com/api/articulos")
    .then(response => {
      this.setState({
        articulos: response.data.array
      })
    })
    .catch(err =>console.log(err))

  }

  render() {
    return (
      <div className="App">
  
        {/* Hacer routing */}
        <BrowserRouter>
          <main>
            <Route exact path = "/" component = {Navbar}/>
            <Route exact path = "/cards" component = {this.updateCardArts}/>
            <Route exact path = "/create" component = {Create}/>
          </main>
        </BrowserRouter>

      </div>
    )
      
    
  }
}

export default App;
