import Image from "next/image";
import { getArticleBySlug } from "../../services/articleServices";
import { formatDate, getStrapiMedia } from "../../lib/utils";
import Markdown from "react-markdown";
import Head from "next/head";

function ArticleDetails({ article }) {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
      </Head>
      <section className="m-5 pt-5">
        <article className="container-xl">
          <Image
            width={1250}
            height={750}
            layout="responsive"
            src={getStrapiMedia(article.cover.url)}
            blurDataURL={getStrapiMedia(article.cover.url)}
            placeholder="blur"
            alt={article.cover.alternativeText}
          />
          <h1 className="fs-h1 text-dark my-1">{article.title}</h1>
          <strong className="text-primary fs-p1 d-block">
            {article.category.name}
          </strong>
          <strong className="text-dark fs-p1 d-bloc">
            {formatDate(article.publishedAt)}
          </strong>
          <br />
          <p>{article.description}</p>
          <Markdown>{article.content}</Markdown>
        </article>
      </section>
    </>
  );
}

export default ArticleDetails;

export async function getServerSideProps({ params }) {
  try {
    const article = await getArticleBySlug(params.slug);
    return {
      props: {
        article,
      },
    };
  } catch (error) {
    return {
      props: {
        notFound: true,
      },
    };
  }
}
