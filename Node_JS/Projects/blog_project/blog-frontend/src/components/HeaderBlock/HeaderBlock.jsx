import React from 'react';
import './HeaderBlock.scss';


const HeaderBlock =({ title, discription, imageUrl})=> {
    return (
      <div className="header-block" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="container">
            <div className="header-block__overlay"></div>
            <div className="header-block__centr">
                <h1>{title}</h1>
                <h3>{discription}</h3>
            </div>
        </div>
      </div>
    );
  }
  
  export default HeaderBlock;
  