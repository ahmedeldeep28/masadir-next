import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import HeroPages from "./../components/layout/HeroPages";
import ContactForm from "../components/contact/ContactForm";

function contact() {
  return (
    <>
      <Head>
        <title>مصادر - تواصل معنا</title>
        <meta
          name="description"
          content="يتم الرد علي الكثير من الاسئله التي توضح اهداف الموقع والمبادئ التي يتبعها الموقع والتي تساعد الناس علي معرفتنا اكثر والاسائله التي تساعدك في الوصول الي اكبر قدر من المعرفة بنا"
        />
      </Head>
      <HeroPages
        title="تواصل معنا الان"
        text="يمكنك التواصل مع ادارة المنصه عن طريق هذه الصفحه من خلال نوذج المراسله الموجود فيها, في حالة واجهتك مشاكل في الموقع او تريد التبليغ عن الاخطاء التي عثرت عليها او في حالة تريد عرض اعلان او اضافه ميزه تساعد في تطوير المنصه تواصل معنا"
      />
      <section className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="content mt-5">
                <h3 className="text-primary fs-h3 mb-2">
                  من فضلك إقرأ هذا قبل ارسال رسالتك
                </h3>
                <p className="fs-p2 text-gray lh-md mb-3">
                  نحن نرحب بكل الاشخاص الذين يريدون التواصل معنا من اجل مساعدتهم
                  والاستماع الي ارائهم التي تساعدنا في التطور وتقديم افضل محتوي
                  ولاكن من اجل تجنب كثرة الرسائل اتصل بنا من اجل الاسباب التالية
                  ..
                </p>
                <ul>
                  <li className="fs-p1 font-text mt-1 d-flex align-items-center">
                    <i className="fi-rr-checkbox ml-2 text-primary"></i>
                    من اجل عرض اعلان اقرا ...
                    <Link href="/faqs"> سياسه الاعلانات </Link>
                  </li>
                  <li className="fs-p1 font-text mt-1 d-flex align-items-center">
                    <i className="fi-rr-checkbox ml-2 text-primary"></i>
                    اقتراح اضافة ميزه او خدمة جديده
                  </li>
                  <li className="fs-p1 font-text mt-1 d-flex align-items-center">
                    <i className="fi-rr-checkbox ml-2 text-primary"></i>
                    هنا شئ يزعجك في الموقع مثل اعلان غير مناسب
                  </li>
                  <li className="fs-p1 font-text mt-1 d-flex align-items-center">
                    <i className="fi-rr-checkbox ml-2 text-primary"></i>
                    موضوع اخر يستوجب الاتصال بنا
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-flex mt-5 mb-5">
              <Image
                src="/new_message.svg"
                layout="responsive"
                width={400}
                height={400}
                alt="message image"
              />
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default contact;
