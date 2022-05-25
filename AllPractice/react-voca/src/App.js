import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <DayList />
          <Day />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
