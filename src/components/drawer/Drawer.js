import React from 'react';
import PropTypes from 'prop-types';

export default function Drawer({ children, subtitle, title }) {
  return (
    <article className="drawer">
      <header className="drawer__header">
        <h2 className="drawer__title">{title}</h2>
        <span className="drawer__subtitle">{subtitle}</span>
      </header>
      <p className="drawer__content">
        {children}
      </p>
    </article>
  );
}

Drawer.propTypes = {
  children: PropTypes.element.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};
