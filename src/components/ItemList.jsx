import React from 'react'
import Item from './Item'


const ItemList = ({items}) => {
  return (
    <div className='itemList'>
        {
            items.length > 0
            ? items.map( item => <Item key={item.id} id={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} stock={item.stock} description={item.description} />)
            :<p>Cargando...</p>

        }
    </div>
  )
}

export default ItemList