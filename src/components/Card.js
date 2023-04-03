import React from 'react';

const Card = ({ title, description }) => {
  return (
      <div className="card">
     <h3 className="arabic-style-text">{title}</h3>
  <p className="arabic-style-text">{description}</p>
    </div>
  );
};

export default Card;