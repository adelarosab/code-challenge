import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import ArticleDetail from '../article-detail/ArticleDetail';
import CardList from '../card-list/CardList';

function ArticleList({ books = [] }) {
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

ArticleList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(ArticleDetail.propTypes)),
};

export default connect(
  state => ({ articles: state.articles || [] }),
)(ArticleList);
