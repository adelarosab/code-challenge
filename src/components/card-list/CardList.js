import PropTypes from 'prop-types';
import React from 'react';

import Card from '../card/Card';
import './CardList.css';

export default function CardList({ items }) {
  return (
    <ul className="card-list">
      {items.map(({ content, subtitle, title }) =>
        <li className="card-list__item">
          <Card
            key={title}
            content={content}
            subtitle={subtitle}
            title={title}
          />
        </li>,
      )}
    </ul>
  );
}

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
};
