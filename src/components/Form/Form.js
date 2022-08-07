import { useState } from "react";
import './form.css';
import { useDispatch } from "react-redux";
import { addIncome, addExpense } from '../../redux/action';

const Form = ({onClose}) => {
    const [title, setTitle] = useState('');
    const [sum, setSum] = useState('');
    const [accounting, setAccounting] = useState('');

    const dispatch = useDispatch();

    const titleHandle = (event) => {
        setTitle(event.target.value);
    };

    const sumHandle = (event) => {
        setSum(event.target.value);
    };

    const selecteOption = (event) => {
        setAccounting(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (accounting === 'income') {
            dispatch(addIncome({
                title: title,
                sum: sum,
                accounting: accounting
            }));
        } else {
            dispatch(addExpense({
                title: title,
                sum: sum,
                accounting: accounting
            }));
        };
        setTitle('');
        setSum('');
        setAccounting('');
        onClose();
    };
    return (
        <form>
            <div className="content__inputs">
                <label>
                    Найменування
                    <input
                        type='text'
                        name='title'
                        value={title}
                        onChange={titleHandle}
                    />
                </label>
                <label>
                    Сума
                    <input
                        type='number'
                        name='sum'
                        value={sum}
                        onChange={sumHandle}
                    />
                </label>
                <label>
                    Фін. показник
                    <select value={accounting} onChange={selecteOption}>
                        <option value={''}> Не вибрано </option>
                        <option value='expense'>Витрата</option>
                        <option value='income'>Дохід</option>
                    </select>
                </label>
            </div>
            <div className="content__btns">
                <input
                    type='submit'
                    value='Записати'
                    onClick={handleSubmit}
                    className='content__submit'
                />
                <button onClick={() => onClose}>
                    Скасувати
                </button>
            </div>
        </form>
    )
};

export default Form;