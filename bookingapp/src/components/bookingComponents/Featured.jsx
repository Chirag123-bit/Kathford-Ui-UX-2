import React from 'react'
import "./featured.css"
import image1 from "../../images/1.png"
import image2 from "../../images/2.png"
import image3 from "../../images/3.png"
import image4 from "../../images/4.png"
import HouseCard from './HouseCard'
const houses = [
    {
        "country": "Nepal",
        "city": "Kathmandu",
        "image": image1,
        "price": 20000
    },
    {
        "country": "Nepal",
        "city": "Kathmandu",
        "image": image2,
        "price": 20000
    },
    {
        "country": "Nepal",
        "city": "Kathmandu",
        "image": image3,
        "price": 20000
    },
    {
        "country": "Nepal",
        "city": "Kathmandu",
        "image": image4,
        "price": 20000
    },
]

const Featured = () => {
    return (
        <div id="featured-section" className='container my-5'>
            <h3>Featured Houses</h3>

            <div id="featured-houses " className='d-flex justify-content-between my-5'>
                {
                    houses.map((house) => {
                        return <HouseCard house={house} />
                    })
                }
            </div>
        </div>
    )
}

export default Featured