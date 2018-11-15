import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import PetDisplay from './PetDisplay';

function App(){
  return (
    <div>
      <Header/>
      <PetDisplay/>
      {/* <Switch>
        <Route exact path='/' component={/} />
      </Switch> */}
    </div>
  );
}

export default App;
