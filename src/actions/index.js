export function addArticle(article) {
  return {
    article,
    type: 'ADD_ARTICLE',
  };
}

export function readArticles(articles) {
  return {
    articles,
    type: 'READ_ARTICLES',
  };
}
