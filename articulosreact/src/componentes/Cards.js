import React, {Component} from 'react'
import axios from 'axios'

class Cards extends Component{
    constructor(props){
        super(props);
    }

    updateCardPokemon(){
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

    render(){
        return (
            <div>
            <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top" src="https://picsum.photos/420/320?random" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.nombre}</h5>
                <p className="card-text">{this.props.precio}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
        )
    }
}

export default Cards