import React from 'react';
import './catalogitem.css';

const CatalogItem = props => (
    <div className="catalog__item">
        <div className="catalog__image">
            <img
                className="img-responsive"
                alt={props.productName}
                src={props.productImgURL}
            />
        </div>
        <div className="catalog__about">
            <h4>{props.productName}</h4>
            <p>{props.productPrice}</p>
        </div>
        <div className="catalog__buttons">
            <button>More Information</button>
            <button>Buy Now</button>
        </div>
    </div>
)

export default CatalogItem;