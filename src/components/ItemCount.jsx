import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ItemCount = ({stock = 20 , initial = 0, onAdd }) => {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[])

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
  return (
    <>
        <div className='itemCount'>
            <button onClick={increment}>+</button>
            <div className='count'> {count} </div>
            <button onClick={decrement}>-</button>
            {
                stock
                ? <button className='addCart' onClick={() => onAdd(count)}>Add to Cart</button>
                : <button>Add to Cart</button>
            }

        </div>
    </>
  )
}

export default ItemCount