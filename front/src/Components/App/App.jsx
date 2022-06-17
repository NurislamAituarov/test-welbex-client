import { Sort } from '../Sort';
import { Table } from '../Table';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="flex container-title">
        <h1>Table</h1>
        <Sort />
      </div>
      <Table />
    </div>
  );
}

export default App;
