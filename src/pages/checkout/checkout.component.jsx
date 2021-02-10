import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';


const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>

      <table class="table">
      <thead>
        <tr>
          <th scope="col"><span>Product</span></th>
          <th scope="col"><span>Description</span></th>
          <th scope="col"><span>Quantity</span></th>
          <th scope="col"><span>Price</span></th>
          <th scope="col"><span>Remove</span></th>
        </tr>
      </thead>
      
    
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    </table>
    </div>
    <div class="container">
      <div class="row">
        <div className='col-sm-6'><h1>TOTAL: ${total}</h1><StripeCheckoutButton price={total} /></div>
        
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
