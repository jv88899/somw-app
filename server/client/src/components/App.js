import React, { Component } from 'react';
import Catalog from './catalog/Catalog';
import './app.css';

class App extends Component {
    state = {
        products: [
            {
                productID: 1,
                productName: 'South Dakota 605 Wall Art',
                productDescription: 'South Dakota 605 Wall Art from State of Mind Woodworking (somw.com)',
                productImgURL: 'https://www.stateofmindwoodworking.com/assets/south_dakota_605_wall_art.jpg',
                productPrice: '$45',
                productPriceStripe: 4500,
                moreInformation: 'This section will be filled out later.',
                inStock: true
            },
            {
                productID: 2,
                productName: 'Texas Wall Art',
                productDescription: 'Texas Wall Art from State of Mind Woodworking (somw.com)',
                productImgURL: 'https://www.stateofmindwoodworking.com/assets/texas_wall_art.jpg',
                productPrice: '$45',
                productPriceStripe: 4500,
                moreInformation: 'This section will be filled out later.',
                inStock: true
            },
            {
                productID: 3,
                productName: 'South Dakota 605 Wall Art',
                productDescription: 'South Dakota 605 Wall Art from State of Mind Woodworking (somw.com)',
                productImgURL: 'https://www.stateofmindwoodworking.com/assets/south_dakota_605_wall_art_2.jpg',
                productPrice: '$45',
                productPriceStripe: 4500,
                moreInformation: 'This section will be filled out later.',
                inStock: true
            },
            {
                productID: 4,
                productName: 'North Dakota 701 Wall Art',
                productDescription: 'North Dakota 701 Wall Art from State of Mind Woodworking (somw.com)',
                productImgURL: 'https://www.stateofmindwoodworking.com/assets/north_dakota_701_wall_hanging.jpg',
                productPrice: '$45',
                productPriceStripe: 4500,
                moreInformation: 'This section will be filled out later.',
                inStock: true
            },
            {
                productID: 5,
                productName: 'South Dakota State Flag Wall Art',
                productDescription: 'South Dakota State Flag Wall Art from State of Mind Woodworking (somw.com)',
                productImgURL: 'https://www.stateofmindwoodworking.com/assets/south_dakota_state_flag_wall_art.jpg',
                productPrice: '$45',
                productPriceStripe: 4500,
                moreInformation: 'This section will be filled out later.',
                inStock: true
            },
            {
                productID: 6,
                productName: 'South Dakota Picture Frame',
                productDescription: 'South Dakota Picture Frame from State of Mind Woodworking (somw.com)',
                productImgURL: 'https://www.stateofmindwoodworking.com/assets/south_dakota_picture_frame.jpg',
                productPrice: '$45',
                productPriceStripe: 4500,
                moreInformation: 'This section will be filled out later.',
                inStock: true
            },
            {
                productID: 7,
                productName: 'South Dakota Cutting Board',
                productDescription: 'South Dakota Cutting Board from State of Mind Woodworking (somw.com)',
                productImgURL: 'https://www.stateofmindwoodworking.com/assets/south_dakota_cutting_board.jpg',
                productPrice: '$100',
                productPriceStripe: 10000,
                moreInformation: 'This section will be filled out later.',
                inStock: true
            }
        ]
    }

    render() {
        return (
            <div className="app">
                <Catalog
                    products={this.state.products}
                />
            </div>
        );
    }
}

export default App;