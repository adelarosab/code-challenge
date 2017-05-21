export const ARTICLES_QUERY = `{
  articles {
    author
    content
    excerpt
    id
    tags
    title
  }
}`;

export const ARTICLE_CREATE = function({ author, content, tags, title }) {
  const excerpt = content.slice(0, 150);

  return `mutation me {
    createArticle(article: {
      author: "${author}",
      content: "${content}",
      excerpt: "${excerpt}",
      tags: ["${tags.join('", "')}"],
      title: "${title}"
    }) {
      id
    }
  }`;
};
