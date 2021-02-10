import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';


const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (

    <tr>
      <th><div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div></th>
      <td><span className='name'>{name}</span></td>
      <td>
      <div className='container'>

      <span className='row'>
        <div className='col-sm-4' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='col-sm-4'>{quantity}</span>
        <div className='col-sm-4' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      </div>
   
      </td>
      <td><span className='price'>{price}</span></td>
      <td><span className='price'><div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div></span></td>
    </tr>
      
      
      
      
      
    
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
