// function article(state = {}, action) {
//
// }

export function articles(state = [], action) {
  switch (action.type) {
    case 'READ_ARTICLES':
      return action.articles.slice(0);

    default:
      return state;
  }
}
