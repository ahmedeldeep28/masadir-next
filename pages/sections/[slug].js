import HeadSection from "../../components/HeadSection";
import { getCategoryBySlug } from "../../services/categoryServices";
import { getArticlesByCategory } from "../../services/articleServices";
import { getStrapiMedia } from "../../lib/utils";
import FetchState from "../../components/FetchState";
import ArticlesList from "../../components/articles/ArticlesList";

function Section({ articles, error, category }) {
  return (
    <>
      <header
        className="section-item"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(29 119 233 / 70%) ,rgba(0,0,0,0.8)), url("${getStrapiMedia(
            category.cover.url
          )}"  )`,
        }}
      >
        <div className="container h-100 d-flex align-items-center">
          <div className="row">
            <div className="col-md-8">
              <h1 className="title fs-h1 text-white mb-3">{category.name}</h1>
              <p className="text fs-p1 text-white lh-md">
                {category?.description}
              </p>
            </div>
          </div>
        </div>
        {/* <img src="/test.jpg" alt="" /> */}
      </header>
      <section className="py-5">
        <div className="container">
          <HeadSection
            title="كل المقالات الموجوده علي هذا القسم"
            text="كل المقالات التي تم كتابتها علي المنصه في كل الاقسام الموجوده علي المنصه في حال انك تريد انت تتفقد الكثير من المقالات"
          />

          <FetchState
            isError={error}
            errorMessage={error}
            isEmpty={articles.length === 0}
            emptyImage="/online-articles.svg"
            emptyMessage="لا يوجد مقالات في هذا القسم"
          >
            <ArticlesList articles={articles} />
          </FetchState>
        </div>
      </section>
    </>
  );
}

export default Section;

export async function getServerSideProps({ query, params }) {
  const page = query.page || "1";

  try {
    const category = await getCategoryBySlug(params.slug);
    if (!category) {
      return {
        notFound: true,
      };
    }

    const { data: articles } = await getArticlesByCategory(category.name);
    return {
      props: {
        articles,
        category,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        articles: [],
        category: {},
        error: error?.message || "Failed to fetch data",
      },
    };
  }
}
