import React from 'react';
import './App.css';
import { Header } from './common'
import { Checking } from './checking'

  class App extends React.Component {
    render (){
      return (
        <div className="App">
          <Header brand="The TEST Pufferator"/>
          <Checking />
          <hr/>
          Putting it together!
        </div>
      );
    }
  };


export default App;
