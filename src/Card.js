import React from 'react';
import PropTypes from 'prop-types';

export function Card({ author, excerpt, title }) {
  return (
    <article>
      <header>
        <h2>{title}</h2>
        <span>{author}</span>
      </header>
      <p>
        {excerpt}
      </p>
    </article>
  );
}

Card.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
  title: PropTypes.string.isRequired,
};
