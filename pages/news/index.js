// our-domain.com/news  <-- In Next.js our routing paths are determined by folders. index would be "/".
// There is an alternative to this.  We can create a "news" subfolder, move news.js into that folder and rename it index.js.  This would still use the route of our-domain.com/news
// This allows us to have nested paths.

const NewsPage = () => {
  return <h1>The News Page</h1>;
};

export default NewsPage;
