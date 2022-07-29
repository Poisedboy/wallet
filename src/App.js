import './App.css';
import { useSelector } from 'react-redux';
import Income from './components/Income/Income';
import Costs from './components/Costs/Costs';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';

function App() {
  const counterRedux = useSelector(state => state.counter);
  const costs = useSelector(state => state.costs);
  const income = useSelector(state => state.income);

  return (
    <div className="app">
      <h1>Wallet</h1>
      <Form />
      <Counter counterRedux={counterRedux} />
      <Income data={income} />
      <Costs data={costs} />
    </div>
  );
}

export default App;
