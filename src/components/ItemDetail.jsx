import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = (props) => {
    const onAdd = (qty) => {
        alert('Ud ha seleccionado ' + qty + 'Productos')
    }


  return (
    <>
        {
            props && props.thumbnail ?
            
            <div className='wrapper'>
            <div className='product-img'>
            <img src={props.thumbnail} alt="#" />
            </div>
            <div className='product-info'>
                <div className='product-text'>
                    <h1>{props.title}</h1>
                    <h2>Stock {props.stock} </h2>
                    <p>{props.description} </p>
                </div>
                <div className='product-price-btn'>
                    <p><span> {props.price} </span> </p>
                    <button type='button'>Details</button>
                </div>
                <ItemCount stock={props.stock} initial={1} onAdd={onAdd}  />
            </div>
        </div>
        : <p>Consultando....</p>
        }
        
    </>
  );
}
export default ItemDetail