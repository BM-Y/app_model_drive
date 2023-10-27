


import {useState}from 'react'
export function Quantity(){


const [quantity ,setQuantity]= useState(0)
    function increment(){

        setQuantity(quantity +1)
    }
    function decrement(){
        if(quantity >0)
        setQuantity(quantity -1)
    }

return (
<>
<button onClick={decrement}>-</button>
<span>{quantity}</span>
<button onClick={increment}>+</button>
</>
)
}