import React, {Component} from 'react'
import axios from 'axios'
import { format } from 'path';
import { UV_UDP_REUSEADDR } from 'constants';

class Create extends Component{

    constructor(props){
        super(props)

        this.state ={
            nombre: undefined,
            price: undefined,
            availability: undefined,
            description: undefined
        }
        // this.onInputChange = this.onInputChange.bind(this)
    }

    onSubmit = (e) =>{
        e.preventDefault()
        let json ={
            name: this.state.nombre,
            price: this.state.price,
            available: this.state.availability,
            description: this.state.description
        }
        
        if(this.state.nombre == undefined){
            alert('No has llenado el nombre')
        }
        else if(this.state.price == undefined){
            alert('No has llenado el precio')
        }
        else if(this.state.availability == undefined){
            alert('No has llenado la cantidad de articulos disponibles')
        }
        else{
            axios.post("https://backenddeployed.herokuapp.com/api/articulos/create", json)
                .then(articulo => alert('Articulo guardado'))
                .catch(err => alert('Ocurrio un problema'))
        }
    }

    onInputChange = (e) =>{
        let value = e.target.value
        if(e.target.name == 'nombre'){
            this.setState({
                nombre: value
            })
        }
        else if (e.target.name == 'price'){
            this.setState({
                price: value
            })
        }
        else if (e.target.name == 'available'){
            this.setState({
                availability: value
            })
        }
        else{
            this.setState({
                description: value
            })
        }
        
    }

    render(){
        return (
        <form onSubmit = {this.onSubmit}>
            <h1> Agregar Articulo </h1>
        <div className="form-group">
            <label for="usr">Nombre:</label>
            <input type="text" name="nombre"className="form-control" id="name"
            onChange={this.onInputChange}
            ></input>
        </div>
        <div className="form-group">
            <label for="pwd">Precio:</label>
            <input type="number" name="price"className="form-control" id="price"
            onChange={this.onInputChange}
            ></input>
        </div>
        <div className="form-group">
            <label for="usr">Disponibles:</label>
            <input type="number" name= "available" className="form-control" id="disp"
            onChange={this.onInputChange}
            ></input>
        </div>
        <div className="form-group">
            <label for="usr">Descripcion:</label>
            <input type="text" name="description" className="form-control" id="desc"
            onChange={this.onInputChange}
            ></input>
        </div>
            <button type="submit" class="btn btn-success">Agregar</button>
        </form>
        )

    }

}

export default Create