import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product)
    const { name, stock, seller, price, img, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-text'>
                <h2 className="product-name">{name}</h2>
                <p>Price:${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <p><small>by:{seller}</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-regular'>{cartIcon}add to cart</button>
            </div>
        </div >
    );
};

export default Product;