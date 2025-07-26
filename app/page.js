import { getSortedPostsData } from '../lib/posts';
import BlogHome from '../components/BlogHome';

export default async function Page() {
  const allPostsData = await getSortedPostsData();
  return <BlogHome allPostsData={allPostsData} />;
}
