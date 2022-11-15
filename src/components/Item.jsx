import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({thumbnail, title,stock,description,price,id}) => {
  return (
    <>
        <div className='wrapper'>
            <div className='product-img'>
            <img src={thumbnail} alt="#" />
            </div>
            <div className='product-info'>
                <div className='product-text'>
                    <h1>{title}</h1>
                    <h2>{stock} stock </h2>
                    <p>{description} </p>
                </div>
                <div className='product-price-btn'>
                    <p><span> {price} </span> </p>
                    <Link className='details' to={`/item/${id}`} type='button'>Details</Link>
                </div>
            </div>
        </div>
    
    
    
    </>
  )
}

export default Item