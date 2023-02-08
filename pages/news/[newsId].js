import { useRouter } from 'next/router';

// We create dynamic routes by using the [newsId].js
// By doing this we will load this page with www.our-domain.com/news/whatever-we-want-here.
// To gain access to this parameter in the URL we can import useRouter, which is a custom hook created by next that gives us all sorts of data about the URL.  One this we can access query, which gives us an object.  From there we can extract the, in this case, newsId.
// -->   const router = useRouter(); --> router.query.newsId --> "whatever-we-want-here"

// Please note:  If you console log this you will first get undefined, and then you will get the value.  This is because nextJS runs the page immediately, before any data is extracted, then it runs it again.

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  console.log(newsId);
  // send a request to the backend API to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
