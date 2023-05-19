import React, { useState } from 'react';
import "./todo.css"
import AddComponent from '../components/todoComponents/addComponent';
import TodoItem from '../components/todoComponents/todoItem';
import { v4 } from "uuid"
import ProductCard from '../components/apiComponents/productCard';

const API = () => {


    return (
        <div id="todoContainer">

            <h3 className='text-white text-center py-4'>My Products</h3>


            <div id="todos" className='container my-4 d-flex justify-content-between flex-wrap'>

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>


        </div>
    )
}

export default API