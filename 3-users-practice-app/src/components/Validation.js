import './Validation.css';

const Validation = props => {
    const sendAckHandler = () => {
        props.onAck();
    }
    return (
        <div>
            <div>{`${props.message}`}</div>
            <button onClick={sendAckHandler}>Okay</button>
        </div>
    );
}

export default Validation;