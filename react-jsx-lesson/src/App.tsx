import {useState} from 'react'
import './App.css'
import MyButton from "./MyButton.tsx";

function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Lucky')
    //修改name
    const handleName = () => {
        setName('Dumbo')
    }
    //增加
    const incrementCount = () => {
        setCount(count => count + 1)
    }
    //减少
    const decrementCount = () => {
        setCount(count => count - 1)
    }
    return (
        <>
            <h1>Welcome to learn about react Jsx</h1>
            <p>
            <span>
                {name}
            </span>
            </p>
            <p>
            <span>
                {count} 次
            </span>
            </p>
            <p>
                <button onClick={handleName}>change name</button>
                <button onClick={decrementCount}>decrement</button>
                <button onClick={incrementCount}>increment</button>
            </p>
            <h3>单独计数的count</h3>
            <p>
                <MyButton/>
                <MyButton/>
            </p>
            <h3>状态提升</h3>
        </>
    )
}

export default App
