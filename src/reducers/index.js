export function articles(state = [], action) {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return [
        action.article,
        ...state,
      ];

    case 'READ_ARTICLES':
      return action.articles.slice(0);

    default:
      return state;
  }
}
