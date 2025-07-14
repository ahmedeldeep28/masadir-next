import Image from "next/image";
import { fetchApi } from "../../utils/handelApi";
import { baseUrl } from "../../utils/handelApi";

function ArticleDetails({ article }) {
  return (
    <div className="mt-5 pt-5">
      <div className="container-xl">
        <Image
          width={1250}
          height={750}
          layout="responsive"
          src={`${baseUrl}/images/${article.image}`}
          blurDataURL={`${baseUrl}/images/${article.image}`}
          placeholder="blur"
          alt="aaa"
        />
        <h1 className="fs-h1 text-dark my-1">{article.title}</h1>
        <strong className="text-primary fs-p1 d-block">
          {article.category}
        </strong>
        <strong className="text-dark fs-p1 d-bloc">{article.date}</strong>
        <h5 className="fs-h3 mt-3">الوصف</h5>
        <p>{article.descraption}</p>
        <h5 className="fs-h3 mt-3">محتوي المقال</h5>
        <section
        className="py-4"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></section>
      </div>
    </div>
  );
}

export default ArticleDetails;

export async function getServerSideProps({ params }) {
  try {
    const { article } = await fetchApi(`article/${params.url}`);
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
