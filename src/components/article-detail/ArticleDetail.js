import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';

import Drawer from '../drawer/Drawer';

class ArticleDetail extends Component {
  constructor({ match }) {
    super(...arguments);
    this.state = {};
    this.id = match.params.id;
  }

  componentWillMount() {
    const id = this.id;
    let article = this.props.articles.filter(value => value.id === id)[0];

    if (!article) {
      request(ARTICLES_QUERY).then(response => {
        article = response.data.articles.filter(value => value.id === id)[0];

        this.setState(article);
      });
    } else {
      this.setState(article);
    }

    document.body.scrollTop = 0;
  }

  render() {
    const { author, content, id, title } = this.state;

    return (
      <Drawer
        key={id}
        subtitle={author}
        title={title}
      >
        <p>{content}</p>
      </Drawer>
    );
  }
}

const article = {
  author: PropTypes.string,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

ArticleDetail.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape(article)),
  id: PropTypes.number,
};

export default connect(
  state => ({ articles: state.articles || [] }),
)(ArticleDetail);
