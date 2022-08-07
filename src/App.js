import './App.css';
import { useSelector } from 'react-redux';
import Counter from './components/Counter/Counter';
import { Routes, Route } from 'react-router-dom';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import Form from './components/Form/Form';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const counterRedux = useSelector(state => state.counter);
  const expense = useSelector(state => state.expense);
  const income = useSelector(state => state.income);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="app">
      <button onClick={toggleModal}>Fin. m</button>
      <Modal
        title='Finance'
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        <Form onClose={toggleModal} />
      </Modal>
      <h1>Wallet</h1>
      <Routes>
        <Route path='/' element={<Counter
          counterRedux={counterRedux}
          expense={expense}
          income={income}
        />} />
      </Routes>
    </div>
  );
}

export default App;
