import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from "next/router";
import HeroPages from './../components/layout/HeroPages';
import ArticleCard from './../components/cards/ArticleCard';
import HeadSetion from './../components/HeadSetion';
import HandelError from './../components/HandelError';
import { fetchApi, postApi } from './../utils/handelApi';
import { toast } from 'react-toastify';

function Search({ articles, error }) {

  const router = useRouter();
  const { term } = router.query;

  const [content, setContent] = useState('')

  const createInterested = async () => {
    if(content.length <= 10){
      toast.warn('يجب ان يكون الاقتراح اكثر من 10  حروف', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      
    } else {
      const sendinterested =  postApi('interested/create', {
        content: content,
        type: 'لم يتم التحديد'
      })
      toast.promise(
        sendinterested,{
          pending: 'جاري ارسال الاقتراح الان',
          success: 'تم ارسال الاقتراح بنجاح👌',
          error: 'فشل ارسال الاقتراح هناك مشكله في الخادم 🤯'
        },{position: toast.POSITION.BOTTOM_RIGHT}
        )
      }
  }

  const articlesMaping = articles.map((article) => {
    return (
      <div className="col-md-6 mt-5" key={article._id}>
        <ArticleCard articleData={article} />
      </div>
    )
  })

  const articlesList = () => {
    if (articles.length == 0 && !term) {
      return <HandelError image="online-articles.svg" text='لا توجد مقالات علي المنصه الان' />
    } else if(articles.length == 0)  {
      return <HandelError image="web_search.svg" text={`لم نجد ما تبحث عنه ${term}`} />
    }
    else{
      return <div className="row">{articlesMaping}</div> 
    }
  }

  return (
    <>
      <Head>
        <title>مصادر - بحث</title>
        <meta name="description" content="يتم الرد علي الكثير من الاسئله التي توضح اهداف الموقع والمبادئ التي يتبعها الموقع والتي تساعد الناس علي معرفتنا اكثر والاسائله التي تساعدك في الوصول الي اكبر قدر من المعرفة بنا" />
      </Head>
      <HeroPages
        title="هنا تجد كل المقالات الموجوده علي الموقع"
        text="كل المقالات في كل الاقسام تجدها في هذه الصفحه مجمعة في مكان واحد من اجل تسهيل الوصول اليها وتصفحها بشكل اسهل وتسريع عملية البحث والتصفح في الموقع نعدك انك سوف تجد الكثير من المقالات المفيده كل ما عليك هو البحث في المقالات"
        search={true} />
      <section className="bg-light py-5">
        <div className="container">
          <HeadSetion
            title="كل المقالات الموجوده علي المنصه"
            text="كل المقالات التي تم كتابتها علي المنصه في كل الاقسام الموجوده علي المنصه في حال انك تريد انت تتفقد الكثير من المقالات"
          />
            {error
              ? <HandelError  image="server_down.svg"  text="توجد مشكله في الخادم الان"/>
              : articlesList()
            }
        </div>
      </section>

      <section className="py-5">
        <div className="container d-flex align-items-center">
          <div className="row justify-content-center">
            <div className="col-md-11 text-center">
              <h5 className='fs-h2 text-primary mb-3'>هل يتوجد موضع لم تجده علي المنصه ؟</h5>
              <p className='fs-p2 lh-md'>هل يتوجد موضوع انت مهتم به ولم تجده في الموقع وتريد ان نكتب عنه علي الموقع ادخل اسم الموضوع في حقل الادخال ونحن سوف نقوم بالبحث عنه والكتابه وجلب اليك افضل المصادر ولاكن من اجل ان يصلك اشعار عندما يتم نشر الموضوع اشترك في الموقع </p>
              <div className="search mt-4">
                <input type="text" onChange={(e) => setContent(e.target.value)} value={content} className="form-field" placeholder="ادخل الموضوع الذي تريده" />
                <button className="btn-primary" onClick={createInterested}>ارسال</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Search


export async function getServerSideProps({ query }) {
  const page = query.page;
  const term = query.term || '';

  try {
    const { articles } = await fetchApi(`search/?page=${page}&term=${term}`);
    const { categorys } = await fetchApi('categorys')
    console.log(categorys);
    return {
      props: {
        articles,
        error: null,
      },
    }
  } catch (error) {
    return {
      props: {
        articles: [],
        error,
      },
    }
  }
}