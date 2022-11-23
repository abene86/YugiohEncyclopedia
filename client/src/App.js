import React, { Component } from 'react';
import './CSS/App.css';
import AllCardNames from './AllCard.js'
import yugiohTitleImage from './Image/yugi.jpg';
import Examine from './Examine.js'


class App extends Component {
  render() {
    return (
      <div className='container'>
        <div>
        <AllCardNames/>
        </div>
        <div>
          <img width="400px" src={yugiohTitleImage}/>
        <Examine/></div>
      </div>
    );
  };
}





export default App;
