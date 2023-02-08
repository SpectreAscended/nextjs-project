import Link from 'next/link';

// our-domain.com/news  <-- In Next.js our routing paths are determined by folders. index would be "/".
// There is an alternative to this.  We can create a "news" subfolder, move news.js into that folder and rename it index.js.  This would still use the route of our-domain.com/news
// This allows us to have nested paths.

// LINKS - for site-internal Links we import Link as a default import  from 'next/link'.  This works the same as Link on react-router-dom, except we still use the href, instead of to="/..."

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-a-great-framework">NextJS</Link> Is A
          Great Framework
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
};

export default NewsPage;
