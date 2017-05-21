import PropTypes from 'prop-types';
import React from 'react';

import Card from '../card/Card';

export default function CardList({items}) {
  return (
    <ul>
      <li>
        {items.map(({ content, subtitle, title }) =>
          <Card
            key={title}
            content={content}
            subtitle={subtitle}
            title={title}
          />,
        )}
      </li>
    </ul>
  );
}

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
};
