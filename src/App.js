import './App.css';
import { useSelector } from 'react-redux';
import Counter from './components/Counter/Counter';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import Form from './components/Form/Form';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const counterRedux = useSelector(state => state.counter.counter);
  const expense = useSelector(state => state.lists.expense);
  const income = useSelector(state => state.lists.income);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    navigate('/form');
  };

  return (
    <div className="app">
      <Modal
        title='Finance'
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        <Form onClose={toggleModal} />
      </Modal>
      <h1>Wallet</h1>
      <button className='btn' onClick={toggleModal}>Fin. m</button>
      {/* <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
      </form> */}
      <Routes>
        <Route path='/' element={<Counter
          counterRedux={counterRedux}
          expense={expense}
          income={income}
        />}>
          <Route path='form' element={ <Form /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
