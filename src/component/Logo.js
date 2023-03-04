import { Component } from "react";

const styles = {
    shop:{
    color:'#A283E',
    fontWeight:'700',
    fontSize:'2rem'
    }
} 
class Logo extends Component{
    render(){
        return(<div style={styles.shop}>Shop</div>)
    }
}
export default Logo