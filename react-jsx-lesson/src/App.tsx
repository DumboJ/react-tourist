import {useState} from 'react'
import './App.css'

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
                <button onClick={incrementCount}>increment</button>
                <button onClick={decrementCount}>decrement</button>
            </p>
        </>
    )
}

export default App
