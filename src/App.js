import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';

import { Card } from './Card';
import { Footer } from './Footer';
import { Header } from './Header';

import './App.css';

class App extends Component {
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
          {this.state.articles.map(({ author, excerpt, id, title }) =>
            <Card
              key={id}
              author={author}
              excerpt={excerpt}
              title={title}
            />,
          )}
        </main>
        <Footer />
      </section>
    );
  }
}

export default App;
