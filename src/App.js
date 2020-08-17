import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Home from './components/Home';

import {Provider} from "react-redux";
import store from "./store";

function App() {

    var productos = [
        {id:1, nombre:"Hamburguesa", precio:1.5, pedidos:0, preparacion:8000},
        {id:2, nombre:"Pizza", precio:1.5, pedidos:0, preparacion:10000},
        {id:3, nombre:"Coca-Cola", precio:1.5, pedidos:0, preparacion:1000},
        {id:4, nombre:"Pepsi", precio:1.0, pedidos:0, preparacion:1000},
        {id:5, nombre:"Agua Cristal", precio:0.5, pedidos:0, preparacion:1000}
    ]

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <div>
          <Header titulo={"Vending machine"}/>
          <div className="App">
              <div className="container">
                  <Provider store={store}>
                      <Home productos={productos}/>
                  </Provider>
              </div>
          </div>
      </div>

  );

}

export default App;
