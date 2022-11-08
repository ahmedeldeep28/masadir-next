import Image from 'next/image'
import Head from 'next/head'
import HeroPages from './../components/layout/HeroPages';
import { FormField, FormSelect } from './../components/Form';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { postApi } from './../utils/handelApi';
import { toast } from 'react-toastify';

function suggest() {

    const initialValues = {
        name: '',
        email: '',
        siteName: '',
        siteSection: '',
        message: '',
    }
    let schema = Yup.object({
        name: Yup.string().min(3).max(24).required("هذا الحقل مهم"),
        email: Yup.string().email().required("هذا الحقل مهم"),
        siteName: Yup.string().url().nullable().required("هذا الحقل مهم"),
        siteSection: Yup.string().required("هذا الحقل مهم"),
        message: Yup.string().min(8).max(150)
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
                <title>مصادر - اضف مصدر</title>
                <meta name="description" content="يتم الرد علي الكثير من الاسئله التي توضح اهداف الموقع والمبادئ التي يتبعها الموقع والتي تساعد الناس علي معرفتنا اكثر والاسائله التي تساعدك في الوصول الي اكبر قدر من المعرفة بنا" />
            </Head>
            <HeroPages
                title="اقترح علينا مصدر جيد تعرفه يساعد الناس"
                text="يمكنك اقتراح مصدر جيده تعرفه وترا انه سوف يساعد الاشخاص علي التعلم او في العمل الخاص بهم وتساعدنا في تقديم افضل مصادر وتطوير المحتوي علي الموقع وتجعله اكثر قيمه كل ما عليك فعله ملئ نموذج المؤاسله الموجودعلي الصفحه"
            />
            <section className="contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <div className="content  mt-5">
                                <h3 className='text-primary fs-h3 mb-2'> قبل ان تقترح الموقع اقرا هذا اولا</h3>
                                <p className="fs-p2 text-gray lh-md mb-3"> من اجل تقيدم افضل محتوي يساعد الاشخاص يجب ان يكون له موصفات خاصه ومميزات تجعلنا نقبل به علي موقعنا ويجب احترام هذه المعاير من اجل تقديم تجربه مميزه ومحتوي جيد وقيم يساعد الاشخاص هذه المعاير ساسية الخصوصيه</p>
                                <ul>
                                    <li className="fs-p1 font-text mt-1 d-flex align-items-center">
                                        <i className="fi-rr-checkbox ml-2 text-primary"></i>
                                        لا يحتوي المصدر علي اي محتوي اباحي
                                    </li>
                                    <li className="fs-p1 font-text mt-1 d-flex align-items-center">
                                        <i className="fi-rr-checkbox ml-2 text-primary"></i>
                                        ان يكون مصدر أمن وموثوق فيه
                                    </li>
                                    <li className="fs-p1 font-text mt-1 d-flex align-items-center">
                                        <i className="fi-rr-checkbox ml-2 text-primary"></i>
                                        يكون ذو قيميه وفائده
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-flex mt-5 mb-5" >
                        <Image src='/things_to_say.svg' layout="responsive" width={400} height={400} alt="message image" />
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
                                            <FormField
                                                type="url"
                                                name="siteName"
                                                label="رابط المصدر"
                                                placeholder="ادخل رابط الموقع"
                                                propsInput={props} />
                                            <FormSelect
                                                name="siteSection"
                                                label="قسم المصدر"
                                                propsInput={props}>
                                                <option>اختر قسم المصدر</option>
                                                <option value="برمجه">برمجه</option>
                                                <option value="اقتصاد">اقتصاد</option>
                                                <option value="تصميم">تصميم</option>
                                                <option value="علوم">علوم</option>
                                            </FormSelect>
                                            <FormField
                                                type="text"
                                                name="message"
                                                label="الرساله"
                                                placeholder="اكتب رسالتك"

                                                as="textarea"
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

export default suggest