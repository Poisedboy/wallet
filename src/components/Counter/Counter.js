import { useState, useEffect } from "react";
import Income from "../Income/Income";
import Expense from "../Expense/Expense";
import './counter.css';

const Counter = ({counterRedux, expense, income}) => {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        setCounter(counterRedux);
    }, [counterRedux]);

    return (
        <div className="counter__box">
            <div className="counter__value">
                <ion-icon name="cash-outline"></ion-icon>
                <h3>{counter}</h3>
            </div>
            <div className="counter__lists">
                <Income data={income} />
                <Expense data={expense} />
            </div>
        </div>
    );
};

export default Counter;
