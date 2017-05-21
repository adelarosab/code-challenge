import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';

import Drawer from '../drawer/Drawer';
import './ArticleDetail.css';

class ArticleDetail extends Component {
  constructor({ match }) {
    super(...arguments);
    this.state = {tags: []};
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
    const { author, content, id, tags, title } = this.state;

    return (
      <Drawer
        key={id}
        className="article-detail"
        subtitle={author}
        title={title}
      >
        <div>
          <ul className="article-detail__tags">
            {tags.map(tag =>
              <li
                key={tag}
                className="article-detail__tag"
              >
                {tag}
              </li>,
            )}
          </ul>
          <p>{content}</p>
        </div>
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
