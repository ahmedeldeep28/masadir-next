import Head from "next/head";
import { useRouter } from "next/router";
import HeroPages from "./../components/layout/HeroPages";
import HeadSection from "./../components/HeadSection";
import { getArticles } from "../services/articleServices";
import InterestedForm from "../components/InterestedForm";
import ArticlesList from "../components/articles/ArticlesList";
import FetchState from "../components/FetchState";

function Search({ articles, error }) {
  const router = useRouter();
  const { term } = router.query;

  const emptyMessage = term
    ? `لم نجد ما تبحث عنه ${term}`
    : "لا توجد مقالات علي المنصه الان";
  const emptyImage = term ? "/online-articles.svg" : "/web_search.svg";

  return (
    <>
      <Head>
        <title>مصادر - بحث</title>
        <meta
          name="description"
          content="يتم الرد علي الكثير من الاسئله التي توضح اهداف الموقع والمبادئ التي يتبعها الموقع والتي تساعد الناس علي معرفتنا اكثر والاسائله التي تساعدك في الوصول الي اكبر قدر من المعرفة بنا"
        />
      </Head>
      <HeroPages
        title="هنا تجد كل المقالات الموجوده علي الموقع"
        text="كل المقالات في كل الاقسام تجدها في هذه الصفحه مجمعة في مكان واحد من اجل تسهيل الوصول اليها وتصفحها بشكل اسهل وتسريع عملية البحث والتصفح في الموقع نعدك انك سوف تجد الكثير من المقالات المفيده كل ما عليك هو البحث في المقالات"
        search={true}
      />
      <section className="bg-light py-5">
        <div className="container">
          <HeadSection
            title="كل المقالات الموجوده علي المنصه"
            text="كل المقالات التي تم كتابتها علي المنصه في كل الاقسام الموجوده علي المنصه في حال انك تريد انت تتفقد الكثير من المقالات"
          />
          <FetchState
            isEmpty={articles.length === 0}
            emptyImage={emptyImage}
            emptyMessage={emptyMessage}
            isError={error}
          >
            <ArticlesList articles={articles} />
          </FetchState>
        </div>
      </section>

      <InterestedForm />
    </>
  );
}

export default Search;

export async function getServerSideProps({ query }) {
  const page = query.page;
  const term = query.term || "";
  try {
    const { data: articles } = await getArticles({
      filters: { title: { $contains: term } },
      populate: "*",
    });
    return {
      props: {
        articles,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        articles: [],
        error: error?.message || "Failed to fetch data",
      },
    };
  }
}
