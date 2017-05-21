import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import ArticleDetail from '../article-detail/ArticleDetail';
import ArticleList from '../article-list/ArticleList';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import './App.css';

export default function App() {
  return (
    <section>
      <Link to="/">
        <Header />
      </Link>
      <main>
        <Route exact path="/" component={ArticleList} />
        <Route path="/:id" component={ArticleDetail} />
      </main>
      <Footer />
    </section>
  );
}
