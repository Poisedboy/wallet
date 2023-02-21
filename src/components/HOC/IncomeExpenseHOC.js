import './hoc.css';

const withHighOrderComponent = (Component) => ({ data }) => {
    const dataRender = data.map((item, index) => {
        return (
            <li className='item' key={index}>
                <h5>{item.title}</h5> 
                <h5>{item.sum}</h5>
            </li>
        )
    });
    return <Component dataRender={dataRender} />
};

export default withHighOrderComponent;
