import React from 'react';
import { Route } from 'react-router';

import BookDetail from '../article-detail/ArticleDetail';
import BookList from '../article-list/ArticleList';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import './App.css';

export default function App() {
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
