import {useState} from 'react'

function Counter() {
    const [count,setcount] = useState(10);
    const add=()=>{
        setcount(count**10)
        console.log(count);
    }
    const sub=()=>{
        setcount(count-1)
        console.log(count);
    }
    return (

    <div>
    <h2>Counter</h2>
    <h3></h3>
    <h3>{count}</h3>
    <button onClick={add} style={{backgroundColor:"gold",margin:4,
    padding:10,color:"black"
    }}>YES</button>
    <button onClick={sub} style={{backgroundColor:"Gold",margin:4,
    padding:10,color:"black"
    }}>NO</button>
    </div>

  )
}

export default Counter