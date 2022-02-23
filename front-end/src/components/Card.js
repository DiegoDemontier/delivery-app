import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ children }) {
  return (
    <div className="entry-card">
      <form className="card-form">
        { children }
      </form>
    </div>
  );
}

export default Card;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
