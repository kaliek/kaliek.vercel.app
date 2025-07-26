import { getAllPostIds, getPostData } from '../../../lib/posts';
import Date from '../../../components/date';
import utilStyles from '../../../styles/utils.module.css';

export async function generateStaticParams() {
  const ids = await getAllPostIds();
  return ids.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id);
  return { title: postData.title };
}

export default async function Page({ params }) {
  const postData = await getPostData(params.id);
  return (
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
