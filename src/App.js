import { Component } from "react";
import Productos from "./component/Productos";
import Layout from "./component/Layout";
import Title from "./component/Title";
import Navbar from "./component/Navbar";
class App extends Component {
  state = {
    productos: [
      { name: "Tv TDTSystems", price: 300, img: "/productos/tv.jpeg" },
      {
        name: "Receptor Iris 2100 HD",
        price: 150,
        img: "/productos/receptor.jpeg",
      },
      { name: "ANT Televes", price: 100, img: "/productos/antena.jpg" },
    ],
    carro: [
      // {name:'Receptor Iris 2100 HD', price:150, img:'/productos/receptor.jpeg'},
    ],
    esCarroVisible:false,
  };

  agregarAlCarro = (producto) => {
    const {carro} = this.state
    if(carro.find(x=>x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name 
        ? ({
          ...x,
          cantidad: x.cantidad +1 
      })
      : x )
    return this.setState({carro: newCarro})
    }

    return this.setState({
      carro: this.state.carro.concat({ ...producto, cantidad: 1 }),
    });
  };

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
  this.setState({esCarroVisible:!this.state.esCarroVisible})  
  }
  render() {
const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar
         carro={this.state.carro}
         esCarroVisible={esCarroVisible}
         mostrarCarro={this.mostrarCarro}
         />
        
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}
export default App;
