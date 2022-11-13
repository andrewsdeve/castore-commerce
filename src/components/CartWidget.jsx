import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <>
        <FaShoppingCart style={{fontSize: '25px'}}/>
        <div className='badge'> {5} </div>
    </>
  )
}

export default CartWidget