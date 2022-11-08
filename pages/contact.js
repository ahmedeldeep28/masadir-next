import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import HeroPages from './../components/layout/HeroPages';
import { FormField, FormSelect } from './../components/Form';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { postApi } from './../utils/handelApi';
import { toast } from 'react-toastify';

function contact() {

    const initialValues = {
        name: '',
        email: '',
        object: '',
        message: '',
    }
    let schema = Yup.object({
        name: Yup.string().min(3).max(20).required("هذا الحقل مهم"),
        email: Yup.string().email().required("هذا الحقل مهم"),
        object: Yup.string().matches(/(عرض اعلان|اقتراح اضافه ميزه|شكوي| موضوع اخر)/,"يجب ان تختار قسم المصدر").required("هذا الحقل مهم"),
        message: Yup.string().min(8).max(200).required("هذا الحقل مهم"),
    });
    const onSubmit = async (values, actions) => {
        try {
            await postApi("contact", values);
            actions.resetForm(false);
            toast.success("تم ارسال الرساله بنجاح", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        } catch (error) {

            toast.error(error, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
    }
    return (
        <>
            <Head>
                <title>مصادر - تواصل معنا</title>
                <meta name="description" content="يتم الرد علي الكثير من الاسئله التي توضح اهداف الموقع والمبادئ التي يتبعها الموقع والتي تساعد الناس علي معرفتنا اكثر والاسائله التي تساعدك في الوصول الي اكبر قدر من المعرفة بنا" />
            </Head>
            <HeroPages
                title="تواصل معنا الان"
                text="يمكنك التواصل مع ادارة المنصه عن طريق هذه الصفحه من خلال نوذج المراسله الموجود فيها, في حالة واجهتك مشاكل في الموقع او تريد التبليغ عن الاخطاء التي عثرت عليها او في حالة تريد عرض اعلان او اضافه ميزه تساعد في تطوير المنصه تواصل معنا"
            />
            <section className="contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <div className="content  mt-5">
                                <h3 className='text-primary fs-h3 mb-2'> من فضلك إقرأ هذا قبل ارسال رسالتك</h3>
                                <p className="fs-p2 text-gray lh-md mb-3">نحن نرحب بكل الاشخاص الذين يريدون التواصل معنا من اجل مساعدتهم والاستماع الي ارائهم التي تساعدنا في التطور وتقديم افضل محتوي ولاكن من اجل تجنب كثرة الرسائل اتصل بنا من اجل الاسباب التالية ..</p>
                                <ul>
                                    <li className="fs-p1 font-text mt-1 d-flex align-items-center">
                                        <i className="fi-rr-checkbox ml-2 text-primary"></i>
                                        من اجل عرض اعلان اقرا ... <Link href="/faqs">  سياسه الاعلانات </Link>
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
                        <div className="col-md-6 d-none d-md-flex mt-5 mb-5" >
                            <Image src='/new_message.svg' layout="responsive" width={400} height={400} alt="message image" />
                        </div>
                    </div>
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-9">
                            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema} >
                                {(props) => {
                                    return (
                                        <Form>
                                            <div className="row gx-1">
                                                <div className="col-md-6">
                                                    <FormField
                                                        type="text"
                                                        name="name"
                                                        label="اسمك"
                                                        placeholder="ادخل اسمك"
                                                        propsInput={props}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <FormField
                                                        type="email"
                                                        name="email"
                                                        label="البريد الاكتروني"
                                                        placeholder="ادخل البريد الاكتروني"
                                                        propsInput={props} />
                                                </div>
                                            </div>
                                            <FormSelect
                                                type="text"
                                                name="object"
                                                label="نوع الرسالة"
                                                propsInput={props}>
                                                <option >اختر نوع الرسالة</option>
                                                <option value="اقتراح اضافه ميزه">اقتراح اضافه ميزه</option>
                                                <option value="عرض اعلان">عرض اعلان</option>
                                                <option value="شكوي">شكوي</option>
                                                <option value="موضوع اخر">موضوع اخر</option>
                                            </FormSelect>
                                            <FormField
                                                type="text"
                                                name="message"
                                                label="الرساله"
                                                as="textarea"
                                                placeholder="اكتب رسالتك"
                                                propsInput={props} />
                                            <button
                                                disabled={props.isSubmitting}
                                                type="submite"
                                                className="btn-primary">
                                                {props.isSubmitting ? "جاري الارسال" : "ارسال الرساله"}
                                            </button>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default contact