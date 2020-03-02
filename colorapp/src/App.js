import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import { generatePalette } from './colorHelpers';

function App() {
  return (

    <Switch>
      <Route exact path='/' render={() => <h1>PaletteList</h1>} />
      <Route exact path='/palette/:id' render={() => <h1>Individual Palette</h1>} />
    </Switch>

    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
