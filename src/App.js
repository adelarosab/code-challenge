import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';

import { Card } from './Card';

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
        <header>
          <h1>Billin code challenge</h1>
        </header>
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
        <footer>By adrian.delarosab</footer>
      </section>
    );
  }
}

export default App;
