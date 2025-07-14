import HeadSection from "../../components/HeadSection";
import { fetchApi } from "../../utils/handelApi";
import ArticleCard from "../../components/cards/ArticleCard";
import HandelError from "../../components/HandelError";
import { baseUrl } from "../../utils/handelApi";

function Section({ articles, error, category }) {
  const articlesMapping = articles.map((article) => {
    return (
      <div className="col-md-6 mt-5" key={article.id}>
        <ArticleCard articleData={article} />
      </div>
    );
  });

  const articlesList = () => {
    if (articles.length === 0) {
      return (
        <HandelError
          image="online-articles.svg"
          text="لا تتوجد  مقالات في هذا القسم الان"
        />
      );
    } else {
      return <div className="row">{articlesMapping}</div>;
    }
  };

  return (
    <>
      <header
        className="section-item"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(29 119 233 / 70%) ,rgba(0,0,0,0.8)), url("${baseUrl}/images/${category.image}"  )`,
        }}
      >
        <div className="container h-100 d-flex align-items-center">
          <div className="row">
            <div className="col-md-8">
              <h1 className="title fs-h1 text-white mb-3">{category.title}</h1>
              <p className="text fs-p1 text-white lh-md">
                {category.description}
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

          {error ? (
            <HandelError
              image="server_down.svg"
              text="توجد مشكله في الخادم الان"
            />
          ) : (
            articlesList()
          )}
        </div>
      </section>
    </>
  );
}

export default Section;

export async function getServerSideProps({ query, params }) {
  const page = query.page || "1";
  const { category } = await fetchApi(`category/${params.name}`);
  if (!category) {
    return {
      notFound: true,
    };
  }
  try {
    const { articles } = await fetchApi(
      `articles/category/?page=${page}&category=${params.name}`
    );
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
        category,
        error: error,
      },
    };
  }
}
