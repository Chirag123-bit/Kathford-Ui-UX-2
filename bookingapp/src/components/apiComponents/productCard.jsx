import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div className="card" style={{ width: "18rem", marginBottom: "1rem" }}>
            <img src={product.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>

                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default ProductCard