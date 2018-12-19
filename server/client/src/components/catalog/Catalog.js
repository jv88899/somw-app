import React from 'react';
import './catalog.css';
import CatalogItem from '../catalogItem/CatalogItem';

const Catalog = props => (
    <div className="catalog">
        {
            props.products.map( product => {
                return (
                    <CatalogItem
                        key={product.productID}
                        productID={product.productID}
                        productName={product.productName}
                        productDescription={product.productDescription}
                        productImgURL={product.productImgURL}
                        productPrice={product.productPrice}
                        productPriceStripe={product.productPriceStripe}
                        moreInformation={product.moreInformation}
                    />
                )
            })
        }

    </div>
)

export default Catalog;