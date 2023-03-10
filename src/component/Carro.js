import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DestallesCarro'
const styles = {
    carro:{
    backgroundColor:'#359A2C',
    color:'#fff',
    margin:'15px',
    border:'none',
    padding:'15px',
    borderRadius:'15px',
    fontSize:'2rem',
    cursor:'pointer'
    },
    bubble:{
    position:'relative',
    left:30,
    top:25
}
} 
class Carro extends Component{
    render(){
        const {carro,  esCarroVisible, mostrarCarro} = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)

        return(
        <div>
            <span style={styles.bubble}>
                {cantidad !== 0 ?  <BubbleAlert value={cantidad} />
               : null }
                </span>
            <button onClick={mostrarCarro} style={styles.carro}>Carro
            </button>
            {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
        </div>
        )
    }
}
export default Carro