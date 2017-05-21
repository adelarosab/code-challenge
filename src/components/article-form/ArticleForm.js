import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import request from '../../request';
import { ARTICLE_CREATE } from '../../queries';

import { addArticle } from '../../actions/index';

import './ArticleForm.css';

class ArticleForm extends Component {
  constructor({ dispatch }) {
    super(...arguments);
    this.dispatch = dispatch;
    this.state = {
      redirect: false,
    };
  }

  render() {
    const dispatch = this.dispatch;
    const { redirect } = this.state;

    if (redirect) {
      return (
        <Redirect to="/" />
      );
    }

    let author;
    let content;
    let tags;
    let title;

    return (
      <section
        className="article-form"
      >
        <header>
          <h2>Add an article</h2>
        </header>
        <form
          className="article-form__form"
          onSubmit={e => {
            e.preventDefault();
            if (!title.value.trim()) { return; }
            if (!author.value.trim()) { return; }

            const Tags = tags.value.split(',').map(tag => tag.trim());
            const article = {
              author: author.value,
              content: content.value,
              tags: Tags,
              title: title.value,
            };

            request(ARTICLE_CREATE(article)).then((response) => {
              const id = response.data.createArticle.id;
              dispatch(addArticle(Object.assign({id}, article)));
              this.setState({redirect: true});
            });
          }}
        >

          <label className="article-form__label">Title</label>
          <input
            ref={node => { title = node; }}
            className="article-form__input"
            name="title"
          />
          <label className="article-form__label">Author</label>
          <input
            ref={node => { author = node; }}
            className="article-form__input"
            name="author"
          />
          <textarea
            ref={node => { content = node; }}
            className="article-form__input"
            name="content"
          />
          <label className="article-form__label">Tags</label>
          <input
            ref={node => { tags = node; }}
            className="article-form__input"
            name="tags"
          />
          <button
            className="article-form__button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default connect()(ArticleForm);
