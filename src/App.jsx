/* eslint-disable no-unused-vars */
import './App.css'

// App.jsx

import React from 'react';
import FruitList from './components/map-activity/FruitList';
import Mapdemo from './components/mapdemo'
import Counter from './components/useState/Counter';
import MyInput from './components/useState/MyInput';
import CheckBox from './components/useState/CheckBox';
import TwoVar from './components/useState/TwoVar';

const App = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Watermelon'];

  return (
    <div>
      <h1>Map Demo</h1>
      <Mapdemo />
      <br />
      <h1>List of Fruits</h1>
      <FruitList fruits={fruits} />
      <br />
      <hr />
      <h1>useState</h1>
      <Counter /> <br />
      <hr />
      <MyInput /> <br />
      <hr />
      <CheckBox /> <br />
      <hr />
      <TwoVar />
    </div>
  );
};

export default App;

