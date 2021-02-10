import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';



const Header = ({ currentUser, hidden }) => (




  
  <div>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
      <a class="navbar-brand" href="#"><Link  to='/'>
                  <Logo style={{width:60,height:60}} />
                  </Link></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          </li>
          <li class="nav-item">
          <Link className='nav-link' to='/shop'>
            CONTACT
          </Link>
          </li>
          <li class="nav-item ">
          {currentUser ? (
            <div className='nav-link' onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className='nav-link' to='/signin'>
              SIGN IN
            </Link>
          )}
          
          </li>
          <CartIcon  />
        </ul>
      </div>
    </nav>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
