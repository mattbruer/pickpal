import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Chart from './pages/Chart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/chart" component={Chart} />
      </Switch>
    </div>
  );
}

export default App;
