import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {datos} from '../util/datos'
import customFetch from '../util/customFetch'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [info, setInfo] = useState([])
    const {idItem} = useParams();

    // Se monta el componente

    useEffect(() => {
        customFetch(2000, datos.find(item => {
            if (idItem === undefined) return item;
            return item.id === parseInt(idItem)
        }))
            .then(result => setInfo(result))
            .catch(err => console.log(err))
    }, [idItem]);



  return (
    <>
        <ItemDetail
                key={info.id}
                thumbnail={info.thumbnail}
                title={info.title}
                stock={info.stock}
                description={info.description}
                price={info.price}                
                />
    </>
  )
}

export default ItemDetailContainer