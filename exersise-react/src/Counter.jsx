import React, {useState} from `react`;
function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={increment}>Incremento</button>
        </div>
    );
}

export default Counter;