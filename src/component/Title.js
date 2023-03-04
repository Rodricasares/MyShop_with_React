import { Component } from "react";

const styles= {
title:{
    color:'#A283E',
}
}

class Title extends Component{
    render(){
        return(<h1 style={styles.title}>Titulo</h1>)
    }
}
export default Title