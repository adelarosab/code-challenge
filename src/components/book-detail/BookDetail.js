import PropTypes from 'prop-types';
import React from 'react';

import Drawer from '../drawer/Drawer';

export default function BookDetail({ author, excerpt, title }) {
  return (
    <Drawer
      subtitle={author}
      title={title}
    >
      <p>{excerpt}</p>
    </Drawer>
  );
}

BookDetail.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
  title: PropTypes.string.isRequired
};
