import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';


const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="col-md-3">
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})` , height:350
        }}
      />
      <div className='row' style={{margin: 10}}>
        <span className='col-md-6'>{name}</span>
        <span className='col-md-6'><CustomButton onClick={() => addItem(item)} >
        Add to cart {price} $ 
      </CustomButton></span>
        
      </div>
      
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
