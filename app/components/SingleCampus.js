import React from 'react';
import { Link } from 'react-router';


const SingleCampus = props => {
  const { name, image } = props.selectedCampus;
  return (
    <div className="campus">
      <div>
        <h3>{name}</h3>
        <img src={ image } className="img-thumbnail" />
      </div>
    </div>
)}

export default SingleCampus;
