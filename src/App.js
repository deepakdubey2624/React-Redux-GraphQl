import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'

import './../src/styles/App.css';
import Router from './routes';
export default class App extends Component {
  

    render(){
     return(
         
    <div className="App">
    <Container fluid>
     <Router/>
    </Container>
  </div>
);

    }


}