import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';

import { readArticles } from '../../actions/index';

import ArticleDetail from '../article-detail/ArticleDetail';
import Card from '../card/Card';

import './ArticleList.css';

class ArticleList extends Component {
  constructor({ dispatch }) {
    super(...arguments);

    request(ARTICLES_QUERY).then(response => {
      dispatch(readArticles(response.data.articles));
    });
  }

  render() {
    const { articles } = this.props;

    return (
      <ul className="article-list">
        {articles.map(({ author, excerpt, id, title }) =>
          <li
            className="article-list__item"
            key={id}
          >
            <Card
              content={excerpt}
              subtitle={author}
              title={title}
            />
          </li>,
        )}
      </ul>
    );
  }
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape(ArticleDetail.propTypes)),
};

export default connect(
  state => ({ articles: state.articles || [] }),
)(ArticleList);
