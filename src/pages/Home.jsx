import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import ItemDetailContainer from '../components/ItemDetailContainer'
import NavBar from '../components/NavBar'
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}></Route>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}></Route>
    </Routes>
</BrowserRouter>
  )
}

export default Home
