import React from 'react';



const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'btn btn-success' : ''} ${
      isGoogleSignIn ? 'btn btn-primary' : 'btn btn-primary'
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
