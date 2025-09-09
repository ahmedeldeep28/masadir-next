import Link from "next/link";
import { api } from "../lib/axios";
import { useState } from "react";
import { toast } from "react-toastify";

function SubscribeForm() {
  const [email, setEmail] = useState("");

  const subscribe = () => {
    const rgexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (String(email).toLowerCase().match(rgexEmail)) {
      const subscribePromise = api.post("subscribes", {
        data: { email: email },
      });
      toast.promise(subscribePromise, {
        pending: "جاري الاشتراك في المنصه الان",
        success: "تم الاشتراك في المنصه بنجاح👌",
        error: "فشل الاشتراك في المنص",
      });
    } else {
      toast.warn("هذا الحقل يجب ان يكون بريد اكتروني");
    }
  };
  return (
    <section className="py-5">
      <div className="container py-4 d-flex align-items-center">
        <div className="row justify-content-center">
          <div className="col-md-11 text-center">
            <h5 className="fs-h2 text-primary mb-2">
              أشترك في موقع مصادر ليصلك كل جديد
            </h5>
            <p className="fs-p2 lh-md">
              اذا كونت تريد متابعة كل المقالات التي ننشرها في احد المجالات التي
              تهتم بها كل ما عليك فعله ادخال البريد الاكتروني الخاص بك واختيار
              الاقسام التي تريد ان يصلك كل جديد عنها ونحن سوف نرسل لك المقالات
              اول بي اول من اجلك
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
  );
}

export default SubscribeForm;
