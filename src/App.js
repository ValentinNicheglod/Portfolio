import { Route, Switch } from 'react-router-dom';
import './App.css';

import Inicio from './containers/Inicio';

function App() {
  return (
    <div className="App h-100">
      <Switch>
        <Route exact path="/" component={Inicio}/>
      </Switch>
    </div>
  );
}

export default App;
