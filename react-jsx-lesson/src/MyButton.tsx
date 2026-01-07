import {useState} from "react";

function MyButton(){
    const [count,setCount] = useState(0)
    function addCount(){
        setCount(count+1)
    }
    return (
        <button onClick={addCount}>
            clicked {count}
        </button>
    )
}
export default MyButton