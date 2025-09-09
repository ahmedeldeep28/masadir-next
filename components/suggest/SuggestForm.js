import { FormField, FormSelect } from "../Form";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { api } from "../../lib/axios";

function SuggestForm() {
  const initialValues = {
    name: "",
    email: "",
    site_url: "",
    category: "",
    message: "",
  };
  const schema = Yup.object({
    name: Yup.string().min(3).max(24).required("هذا الحقل مهم"),
    email: Yup.string().email().required("هذا الحقل مهم"),
    site_url: Yup.string().url().nullable().required("هذا الحقل مهم"),
    category: Yup.string().required("هذا الحقل مهم"),
    message: Yup.string().min(8).max(150),
  });
  const onSubmit = async (data, actions) => {
    try {
      await api.post("/suggests", { data });
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
            <FormField
              type="url"
              name="site_url"
              label="رابط المصدر"
              placeholder="ادخل رابط الموقع"
              propsInput={props}
            />
            <FormSelect name="category" label="قسم المصدر" propsInput={props}>
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

export default SuggestForm;
