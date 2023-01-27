import React from 'react'
import { useState } from 'react'

const Counter = () => {
  return (
    <>
    <IncrementCounter com={GreeCounter} incDecrement={"add"} ></IncrementCounter>
    <IncrementCounter com={GreeCounter} incDecrement={"m"} ></IncrementCounter>
    </>
  )
}

const IncrementCounter = (props) => {
    return (  
        <div> <props.com value={props.incDecrement} ></props.com> </div>
     )
}



const GreeCounter = (props) => {
    const [data, setadata ] = useState(0);
    console.log(props.count);
    const updateFun = () => {
        if(props.value == "add" ) {
            setadata(data + 1 )
        } else {
            setadata(data - 1 )
        }
    }
    return ( 
        <>
    <div className='counter' >
        <h1>Counter</h1>
        <h1>{data}</h1>
        <button onClick={updateFun} >Incresment</button>
    </div> <br /> <br />
    </>
    )
}


export default Counter
