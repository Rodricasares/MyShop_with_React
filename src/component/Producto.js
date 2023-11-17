import { Component } from "react";
import Button from "./Button"


const styles = {
    producto: {
       margin:'4px',
       border:'solid 1px #eee',
       boxShadow:'0 5px 5px rgb(0,0,0,0.1)',
       width:'1auto',
       padding:'10px 15px',
       borderRadius:'5px'
    },
    img:{

        width:'400px',
        height:'250px',
        objectFit:'contain',
        
    }

}

class Producto extends Component{
    render(){
        const {producto, agregarAlCarro} = this.props
        return(
        <div style={styles.producto}>
            <img style={styles.img} alt={producto.name} src={producto.img} />
            <h3>{producto.name}</h3>
            <p>{producto.price}</p>
            <Button onClick={() => agregarAlCarro(producto)}>
                Agregar al carro</Button>
        </div>)
    }
}
export default Producto