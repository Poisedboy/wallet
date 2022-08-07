
const withHighOrderComponent = (Component) => ({ data }) => {
    const dataRender = data.map((item, index) => {
        return (
            <li key={index}>
                <h5>{item.title} - {item.sum}</h5>
            </li>
        )
    });
    return <Component dataRender={dataRender} />
};

export default withHighOrderComponent;
