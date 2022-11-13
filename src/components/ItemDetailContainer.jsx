import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {datos} from '../util/datos'
import customFetch from '../util/customFetch'
import ItemCount from './ItemCount'

const ItemDetailContainer = () => {
    const [info, setInfo] = useState([])

    // Se monta el componente

    useEffect(()=>{
        customFetch(2000,datos.find(item => item.id))
        .then(response => setInfo(datos))
        .catch(error => console.log(error))
    })



  return (
    <>
        {
            info.map(item => (
                <ItemDetail
                key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                stock={item.stock}
                description={item.description}
                price={item.price}                
                />
            ))
        }

        <ItemCount/>


    
    
    
    </>
  )
}

export default ItemDetailContainer