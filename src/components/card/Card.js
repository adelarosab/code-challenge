import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ content, subtitle, title }) {
  return (
    <article className="card">
      <header className="card__header">
        <h2 className="card__title">{title}</h2>
        <span className="card__subtitle">{subtitle}</span>
      </header>
      <p className="card__content">
        {content}
      </p>
    </article>
  );
}

Card.propTypes = {
  content: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};
