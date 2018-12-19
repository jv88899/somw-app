import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name={this.props.name}
                description={this.props.description}
                amount={this.props.amount}
                billingAddress={true}
                shippingAddress={true}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="buy-now">Buy Now</button>
            </StripeCheckout>
        )
    }
}

export default Payments;

// <Payments
// name="State of Mind Woodworking"
// description={props.productDescription}
// amount={props.productPriceStripe}