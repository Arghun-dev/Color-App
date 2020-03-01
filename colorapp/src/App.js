import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';

function App() {
  return (
    <div>
      <Palette {...seedColors[0]} />
    </div>
  );
}

export default App;
