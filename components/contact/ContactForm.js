import * as Yup from "yup";
import { toast } from "react-toastify";
import { api } from "../../lib/axios";
import { FormField, FormSelect } from "../Form";
import { Formik, Form } from "formik";

function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    object: "",
    message: "",
  };
  let schema = Yup.object({
    name: Yup.string().min(3).max(20).required("هذا الحقل مهم"),
    email: Yup.string().email().required("هذا الحقل مهم"),
    object: Yup.string()
      .matches(
        /(عرض اعلان|اقتراح اضافه ميزه|شكوي| موضوع اخر)/,
        "يجب ان تختار قسم المصدر"
      )
      .required("هذا الحقل مهم"),
    message: Yup.string().min(8).max(200).required("هذا الحقل مهم"),
  });
  const onSubmit = async (data, actions) => {
    try {
      await api.post("/contacts", { data });
      actions.resetForm(false);
      toast.success("تم ارسال الرساله بنجاح");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
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
                  propsInput={props}
                />
              </div>
            </div>
            <FormSelect
              type="text"
              name="object"
              label="نوع الرسالة"
              propsInput={props}
            >
              <option>اختر نوع الرسالة</option>
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
              propsInput={props}
            />
            <button
              disabled={props.isSubmitting}
              type="submite"
              className="btn-primary"
            >
              {props.isSubmitting ? "جاري الارسال" : "ارسال الرساله"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
