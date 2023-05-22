import React, { useEffect, useState } from 'react';
import "./todo.css"
import AddComponent from '../components/todoComponents/addComponent';
import TodoItem from '../components/todoComponents/todoItem';
import { v4 } from "uuid"
import ProductCard from '../components/apiComponents/productCard';
import axios from 'axios';

const API = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        console.log("here")
        let result = await axios.get("https://dummyjson.com/products/")
        console.log(result.data.products)
        setProducts(result.data.products)
        setLoading(false)
    }

    // let counter = 1
    const [counter, setCounter] = useState(1)

    const incCounter = () => {
        // counter++;
        setCounter(counter + 1)
    }


    return (
        <div id="todoContainer">

            <h3 className='text-white text-center py-4'>My Products {counter}</h3>
            <button onClick={incCounter}>Increse</button>


            <div id="todos" className='container my-4 d-flex justify-content-between flex-wrap'>

                {
                    loading ? <>
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </> :
                        products.map((pro) => {
                            return <ProductCard product={pro} />
                        })
                }

            </div>


        </div>
    )
}

export default API