import React from 'react'
import ItemCount from './ItemCount'
import customFetch from '../util/customFetch'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { datos } from '../util/datos'
import ItemList from './ItemList'


const ItemListContainer = () => {
    const [inform , setInform] =  useState([]);
    const {idCategory} = useParams();

    /* Montando el componente */

    useEffect(() => {
        customFetch(2000, datos.filter(item => {
            if (idCategory === 'undefined') return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setInform(datos))
            .catch(err => console.log(err))
    }, [idCategory]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }


  return (
    <>
        <ItemList items={inform} />
        <ItemCount/>
    
    
    </>
  )
}

export default ItemListContainer