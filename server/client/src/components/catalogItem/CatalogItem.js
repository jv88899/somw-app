import React from 'react';
import Payments from '../payments/Payments';
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
            <Payments
                name="State of Mind Woodworking"
                description={props.productDescription}
                amount={props.productPriceStripe}
            />
        </div>
    </div>
)

export default CatalogItem;

// {
//     productID: 1,
//     productName: 'South Dakota 605 Wall Art',
//     productDescription: 'South Dakota 605 Wall Art from State of Mind Woodworking (somw.com)',
//     productImgURL: 'https://www.stateofmindwoodworking.com/assets/south_dakota_605_wall_art.jpg',
//     productPrice: '$45',
//     productPriceStripe: 4500,
//     moreInformation: 'This section will be filled out later.',
//     inStock: true
// },