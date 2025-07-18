import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import HeroPages from "../components/layout/HeroPages";
import FeatureCard from "./../components/cards/FeatureCard";
import SectionCard from "./../components/cards/SectionCard";
import ArticleCard from "./../components/cards/ArticleCard";
import HeadSection from "./../components/HeadSection";
import { fetchApi, postApi } from "./../utils/handelApi";
import HandelError from "./../components/HandelError";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { toast } from "react-toastify";

export default function Home({
  newArticles,
  articlesVisits,
  articlesNomination,
  categories,
  error,
}) {
  const categoriesMapping = categories.map((category) => {
    return (
      <div className="col-sm-6 col-md-4  mt-5" key={category._id}>
        <SectionCard name={category.name} image={category.image} />
      </div>
    );
  });

  const categoriesList = () => {
    if (categories.length === 0) {
      return (
        <HandelError
          image="writing-room.svg"
          text="لا يوجد اقسام علي الموقع الان"
        />
      );
    } else {
      return <div className="row">{categoriesMapping}</div>;
    }
  };

  const [email, setEmail] = useState("");

  const subscribe = () => {
    const rgexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (String(email).toLowerCase().match(rgexEmail)) {
      const subscribePromise = postApi("subscribe/create", { email: email });
      toast.promise(
        subscribePromise,
        {
          pending: "جاري الاشتراك في المنصه الان",
          success: "تم الاشتراك في المنصه بنجاح👌",
          error: {
            render({ data }) {
              // When the promise reject, data will contains the error
              return data;
            },
          },
        },
        { position: toast.POSITION.BOTTOM_RIGHT }
      );
    } else {
      toast.warn("هذا الحقل يجب ان يكون بريد اكتروني", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <>
      <Head>
        <title>موقع مصادر</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <HeroPages
        title="مرحبا بك في موقع مصادر"
        text="هل تبحث عن مكان يحتوي علي الكثير من المصادر والمراجع في الكثير من المجالات التي تهتم بها تجده علي موقع مصادر ويوفر عليك الكثير من البحث وتضيع الوقت في البحث نحن نوفر كل هذا لدينا علي الموقع كل ما عليك فعله البحث في الموقع وسوف تجد كل ماتريده      "
        search={true}
        full={true}
      />

      <section className="py-5">
        <div className="container">
          <HeadSection
            title="ما هي المميزات التي يقدمها الموقع ؟"
            text="نحن نوفر لك الكثير من المميزات والتسهيلات تساعدك في عملك ودراستك,لذالك نوفر لك كل هذه المميزات والخدمات"
          />
          <div className="row mt-4">
            <div className="col-xs-12 col-md-6 col-lg-4 mt-3">
              <FeatureCard
                icon="fi-rr-browser"
                title="مواقع الاكترونيه"
                text="الكثير من المواقع الاكترونيه المفيده لك التي نقوم بالبحث عنها وتفيرها كلها من اجلك والتي بدورها تساعدك في انجاز المهام"
              />
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 mt-3">
              <FeatureCard
                icon="fi-rr-smartphone"
                title="تطبيقات الموبايل "
                text="بكل تأكيد أن اغلبنا اصبح يستخدم الموبيل المحمول بشكل يومي ومتكرر ,نحن بدورنا نقوم بالبحث عن التطبيقات المفيدة اليك"
              />
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 mt-3">
              <FeatureCard
                icon="fi-rr-book"
                title="الكتب"
                text="الكتب اقدم طرق المعرفه التي استعملها الانسان من اجل التعلم ونقل والعلوم الي من يريد التعلم منها,نرشح لك الكثير من الكتب"
              />
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 mt-3">
              <FeatureCard
                icon="fi-rr-computer"
                title="برامج الكمبيوتر"
                text="نقدم اليك الكثير من برامج الكمبيوتر التي تساعدك وتنجز لك المهام وتستخدمها في عملك واستخدماتك المختلفه في حياتك"
              />
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 mt-3">
              <FeatureCard
                icon="fi-rr-play-alt"
                title="قنوات يوتيوب"
                text="اليوتيوب اكبر منصه علي الاطلاق تقدم فيديوهات علي مستوي العالم ويتوجد به صناع محتوي جيدين في كافة المجالات المختلفه"
              />
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 mt-3">
              <FeatureCard
                icon="fi-rr-diploma"
                title="الكثير من المواضيع المختلفه"
                text="لدينا الكثير من المحتوي المتنوع والمفيد مثل الافكار الجيده ونرشح عليك اشياء متنوعه تساعدك"
              />
            </div>
          </div>
        </div>
      </section>

      {/* start category block */}
      <section className="bg-light py-4">
        <div className="container">
          <HeadSection
            title="الاقسام الموجوده في الموقع"
            text="نحن نوفر اليك الكثير من الاقسام في اغلب المجالات,كل ما عليك فعله هو الدخول الي احدي الاقسام لتجد كل المقالات المتعلقه بهذا القسم"
          />
          {error ? (
            <HandelError
              image="server_down.svg"
              text="توجد مشكله في الخادم الان"
            />
          ) : (
            categoriesList()
          )}
        </div>
      </section>

      {/* start new Articles block */}
      <section className="bg-light py-4">
        <div className="container">
          <HeadSection
            title="احدث مقالات لدينا"
            text="هنا تجد احدث المقالات التي ضفناها مؤخرا علي الموقع,قم بي تفقدها والقي نظرا عليهم لتجد ما يهمك"
          />
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            pagination={{ clickable: true }}
            className="py-5"
          >
            {error ? (
              <HandelError
                image="server_down.svg"
                text="توجد مشكله في الخادم الان"
              />
            ) : newArticles.length === 0 ? (
              <HandelError
                image="online-articles.svg"
                text="لا توجد مقالات علي المنصه الان"
              />
            ) : (
              newArticles.map((article) => {
                return (
                  <SwiperSlide key={article._id}>
                    <ArticleCard articleData={article} />
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
      </section>

      {/* start articles Nomination block */}
      <section className="bg-light py-4">
        <div className="container">
          <HeadSection
            title="مقالات مرشحه لك"
            text="نرشح اليك المقالات التي نرا انها سوف تفيدك ولا غناء عن المحتوي الموجود بها لذالك ننصحك ان تلقي عليها نظره"
          />

          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            pagination={{ clickable: true }}
            className="py-5"
          >
            {error ? (
              <HandelError
                image="server_down.svg"
                text="توجد مشكله في الخادم الان"
              />
            ) : articlesNomination.length === 0 ? (
              <HandelError
                image="online-articles.svg"
                text="لا توجد مقالات علي المنصه الان"
              />
            ) : (
              articlesNomination.map((article) => {
                return (
                  <SwiperSlide key={article._id}>
                    <ArticleCard articleData={article} />
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
      </section>

      {/* start articles Visits block */}
      <section className="bg-light py-5">
        <div className="container">
          <HeadSection
            title="اكثر الماقالات مشاهده"
            text="هذه المقالات التي حصلت علي اعلي نسب زياره لدينا وحصلت علي الكثير من الاعجاب لدي الجمهور قم بزيارتها والاستفاده منها"
          />

          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            pagination={{ clickable: true }}
            className="py-5"
          >
            {error ? (
              <HandelError
                image="server_down.svg"
                text="توجد مشكله في الخادم الان"
              />
            ) : articlesVisits.length === 0 ? (
              <HandelError
                image="online-articles.svg"
                text="لا توجد مقالات علي المنصه الان"
              />
            ) : (
              articlesVisits.map((article) => {
                return (
                  <SwiperSlide key={article._id}>
                    <ArticleCard articleData={article} />
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
      </section>
      <section className="py-5">
        <div className="container py-4 d-flex align-items-center">
          <div className="row justify-content-center">
            <div className="col-md-11 text-center">
              <h5 className="fs-h2 text-primary mb-2">
                أشترك في موقع مصادر ليصلك كل جديد
              </h5>
              <p className="fs-p2 lh-md">
                اذا كونت تريد متابعة كل المقالات التي ننشرها في احد المجالات
                التي تهتم بها كل ما عليك فعله ادخال البريد الاكتروني الخاص بك
                واختيار الاقسام التي تريد ان يصلك كل جديد عنها ونحن سوف نرسل لك
                المقالات اول بي اول من اجلك{" "}
                <Link href="/privacy">سياسة الخصوصيه</Link>
              </p>
              <div className="search mt-4">
                <input
                  type="email"
                  name="email"
                  className="form-field"
                  placeholder="ادخل البريد الاكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn-primary" onClick={subscribe}>
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { categorys } = await fetchApi("categorys");
    const { newArticles } = await fetchApi("articles/new");
    const { articlesVisits } = await fetchApi("articles/visits");
    const { articlesNomination } = await fetchApi("articles/nomination");
    return {
      props: {
        newArticles,
        articlesVisits,
        articlesNomination,
        categories: categorys,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        newArticles: [],
        articlesVisits: [],
        articlesNomination: [],
        categories: [],
        error,
      },
    };
  }
}
