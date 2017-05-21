import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import BookDetail from '../book-detail/BookDetail';
import CardList from '../card-list/CardList';

function BookList({ books = [] }) {
  return (
    <CardList
      items={books.map(
        ({ author, excerpt, title }) => ({
          content: excerpt,
          subtitle: author,
          title,
        }))
      }
    />
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(BookDetail.propTypes)),
};

export default connect(
  state => ({ articles: state.articles || [] }),
)(BookList);
