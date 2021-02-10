import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { Link, withRouter } from 'react-router-dom';



const CartIcon = ({itemCount}) => (
  <div className='nav-link'>
    <Link to="/checkout">
      <FontAwesomeIcon  icon={faShoppingCart} />
      <span style ={{marginLeft:2}} class="badge badge-secondary">{itemCount}</span>
    </Link>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default withRouter(connect(
  mapStateToProps
)(CartIcon));
