import React from 'react';
import { withRouter } from 'react-router-dom';


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className="col-lg-4" onClick={() => history.push(`${match.url}${linkUrl}`)}>  
    <div className='content'  style={{ height: 250, backgroundImage: `url(${imageUrl})`}}>
      <h1 style={{backgroundColor: 'white'}} >{title.toUpperCase()}  </h1>
    </div>
  </div>
);

export default withRouter(MenuItem);
