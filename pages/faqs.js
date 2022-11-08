import Head from 'next/head'
import HeroPages from './../components/layout/HeroPages';
import QuestionCard from './../components/cards/QuestionCard';
import HandelError from './../components/HandelError';
import { fetchApi } from './../utils/handelApi';

function faqs({ questions, error }) {

    const questionsMaping = questions.map((item) => {
        return (
            <div className="col-md-6 mt-2" key={item._id}>
                <QuestionCard data={item} />
            </div>
        )
    })

    const questionsList = () => {
        if (questions.length === 0) {
            return <HandelError  image="FAQs.svg" text=" لا يوجد سؤال وجواب علي المنصه الان"/>
        } else {
            return <div className="row">{questionsMaping}</div>
        }
    }

    return (
        <>
            <Head>
                <title>موقع مصادر- سؤال وجواب</title>
                <meta name="description" content="يتم الرد علي الكثير من الاسئله التي توضح اهداف الموقع والمبادئ التي يتبعها الموقع والتي تساعد الناس علي معرفتنا اكثر والاسائله التي تساعدك في الوصول الي اكبر قدر من المعرفة بنا" />
            </Head>
            <HeroPages
                title="كل الاسئله والاجابات التي تخص الموقع"
                text="يتم الرد علي الكثير من الاسئله التي توضح اهداف الموقع والمبادئ التي يتبعها الموقع والتي تساعد الناس علي معرفتنا اكثر والاسائله التي تساعدك في الوصول الي اكبر قدر من المعرفة بنا"
            />
            
            <section className="py-5">
                <div className="container">
                    {error
                        ? <HandelError  image="server_down.svg"  text="توجد مشكله في الخادم الان"/>
                        : questionsList()
                    }
                </div>
            </section>
        </>

    )
}

export default faqs



export async function getStaticProps() {
    try {
        const { questions } = await fetchApi("faqs");
        return {
            props: {
                questions,
                error: null,
            }
        }
    } catch (error) {
        return {
            props: {
                questions: [],
                error,
            }
        }
    }
}