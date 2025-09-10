import Head from "next/head";
import HeroPages from "../../components/layout/HeroPages";
import HeadSection from "../../components/HeadSection";
import { getCategories } from "../../services/categoryServices";
import FetchState from "../../components/FetchState";
import CategoriesList from "../../components/categories/CategoriesList";

function Sections({ categories, error }) {
  return (
    <>
      <Head>
        <title>مصادر - الاقسام</title>
        <meta
          name="description"
          content="يتم الرد علي الكثير من الاسئله التي توضح اهداف الموقع والمبادئ التي يتبعها الموقع والتي تساعد الناس علي معرفتنا اكثر والاسائله التي تساعدك في الوصول الي اكبر قدر من المعرفة بنا"
        />
      </Head>
      <HeroPages
        title="كل الاقسام التي تريدها تجدها"
        text="هنا تجد كل الاقسام التي نكتب عنها المواضيع المختلفه علي المنصه ويتم اضافة اقسام جديدة مع مرور الوقت من اجل تغطية كل المواضيع المهمه"
      />
      <section className="py-5">
        <div className="container">
          <HeadSection
            title="كل الاقسام الموجوده علي المنصه"
            text="نحن نوفر اليك الكثير من الاقسام في اغلب المجالات,كل ما عليك فعله هو الدخول الي احدي الاقسام لتجد كل المقالات المتعلقه بهذا القسم"
          />

          <FetchState
            isError={error}
            errorMessage={error}
            isEmpty={categories.length === 0}
            emptyImage="/writing-room.svg"
            emptyMessage="لا يوجد اقسام في الموقع الان"
          >
            <CategoriesList categories={categories} />
          </FetchState>
        </div>
      </section>
    </>
  );
}

export default Sections;

export async function getStaticProps() {
  try {
    const { data: categories } = await getCategories({ populate: "*" });
    return {
      props: {
        categories,
        error: null,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        categories: [],
        error: error.message,
      },
      revalidate: 60,
    };
  }
}
