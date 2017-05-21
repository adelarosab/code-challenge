import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export function Card({ author, excerpt, title }) {
  return (
    <article className="card">
      <header className="card__header">
        <h2 className="card__title">{title}</h2>
        <span className="card__subtitle">{author}</span>
      </header>
      <p className="card__content">
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
