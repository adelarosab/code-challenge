import React, { Component } from 'react';
import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';

import Footer from '../footer/Footer';
import Header from '../header/Header';

import './App.css';

export default class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (
      <section>
        <Header />
        <main>
          <Route exact component={BookList} />
          <Route path=":id" component={BookDetail} />
        </main>
        <Footer />
      </section>
    );
  }
}
