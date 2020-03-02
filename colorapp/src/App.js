import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';

class App extends React.Component {
  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id;
    })
  }
  render(){
    return (
      <Switch>
        <Route exact path='/' render={() => <PaletteList paletts={seedColors} />} />
        <Route 
          exact 
          path='/palette/:id'
          render={routeProps => (
            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
          )} 
        />
      </Switch>
  
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  } 
}

export default App;
