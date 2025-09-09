import Image from "next/image";
import { getArticleBySlug } from "../../services/articleServices";
import { getStrapiMedia } from "../../lib/utils";
import Markdown from "react-markdown";

function ArticleDetails({ article }) {
  return (
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
          {article.publishedAt}
        </strong>
        <br />
        <p className="mb-5">{article.description}</p>
        <Markdown>{article.content}</Markdown>
      </article>
    </section>
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
