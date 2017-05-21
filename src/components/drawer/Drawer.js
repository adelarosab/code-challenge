import React from 'react';
import PropTypes from 'prop-types';

import './Drawer.css';

export default function Drawer({ children, subtitle, title }) {
  return (
    <article className="drawer">
      <header className="drawer__header">
        <h2 className="drawer__title">{title}</h2>
        <span className="drawer__subtitle">{subtitle}</span>
      </header>
      <div className="drawer__content">
        {children}
      </div>
    </article>
  );
}

Drawer.propTypes = {
  children: PropTypes.element,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};
