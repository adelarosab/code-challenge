import React from 'react';
import PropTypes from 'prop-types';

export function Card({ author, excerpt, title }) {
  return (
    <header>
      <h2>{title}</h2>
      <span>{author}</span>
      <p>
        {excerpt}
      </p>
    </header>
  );
}

Card.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
  title: PropTypes.string.isRequired,
};
