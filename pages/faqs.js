import Head from "next/head";
import HeroPages from "./../components/layout/HeroPages";
import { getQuestions } from "../services/faqServices";
import FetchState from "../components/FetchState";
import QuestionsList from "../components/faqs/QuestionsList";

function faqs({ questions, error }) {
  return (
    <>
      <Head>
        <title>موقع مصادر- سؤال وجواب</title>
        <meta
          name="description"
          content="يتم الرد علي الكثير من الاسئله التي توضح اهداف الموقع والمبادئ التي يتبعها الموقع والتي تساعد الناس علي معرفتنا اكثر والاسائله التي تساعدك في الوصول الي اكبر قدر من المعرفة بنا"
        />
      </Head>
      <HeroPages
        title="كل الاسئله والاجابات التي تخص الموقع"
        text="يتم الرد علي الكثير من الاسئله التي توضح اهداف الموقع والمبادئ التي يتبعها الموقع والتي تساعد الناس علي معرفتنا اكثر والاسائله التي تساعدك في الوصول الي اكبر قدر من المعرفة بنا"
      />

      <section className="py-5">
        <div className="container">
          <FetchState
            isEmpty={questions.length === 0}
            emptyImage="/FAQs.svg"
            emptyMessage="لا يوجد سؤال وجواب علي المنصه الان"
            isError={error}
          >
            <QuestionsList questions={questions} />
          </FetchState>
        </div>
      </section>
    </>
  );
}

export default faqs;

export async function getStaticProps() {
  try {
    const { data: questions } = await getQuestions();
    return {
      props: {
        questions,
        error: null,
      },
      revalidate: 60 * 60,
    };
  } catch (error) {
    return {
      props: {
        questions: [],
        error: error?.message || "Failed to fetch FAQs",
      },
      revalidate: 60,
    };
  }
}
