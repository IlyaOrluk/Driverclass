import React from 'react';
import './item.css';

const Item = ({ item }) => {
  const { name } = item;
  return (
    <React.Fragment>
      <span>{name}</span>
    </React.Fragment>
  );
};

export default Item;
