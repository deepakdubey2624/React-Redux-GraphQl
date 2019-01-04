import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import img from './assets/images/gg.svg';
import './../src/styles/App.css';
import Sidebar from './components/sidebar/sidebar'
import MenuBar from './components/menubar/menubar'
export default class App extends Component {
  

    render(){
     return(
    <div className="App">
    <Container fluid>
    <MenuBar></MenuBar>
     <Sidebar></Sidebar>
    </Container>
  </div>
);

    }


}