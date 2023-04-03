import React from 'react';

const Testimonial = ({ name, quote }) => {
  return (
    <div className="testimonial">
      <p className="arabic-style-text">{quote}</p>
  <h4 className="arabic-style-text">{name}</h4>
    </div>
  );
};

export default Testimonial;