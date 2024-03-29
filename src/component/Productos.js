import { Component } from "react";
import Producto from './Producto'

const styles = {
    producto: {
        display:'flex',
        flexFlow:'row wrap',
        
    }
}
class Productos extends Component{
    
    render(){
        const {productos, agregarAlCarro} = this.props
        return(<div style={styles.producto}>
            {productos.map(producto =>
            <Producto
            agregarAlCarro={agregarAlCarro}
            key={producto.name}
            producto={producto}
            />)}
        </div>)
    }
}
export default Productos;