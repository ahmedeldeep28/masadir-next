import { useState } from "react";
import { api } from "../lib/axios";
import { toast } from "react-toastify";

function InterestedForm() {
  const [object, setObject] = useState("");

  const sendInterested = async () => {
    if (object.length <= 10) {
      toast.warn("يجب ان يكون الاقتراح اكثر من 10  حروف" );
    } else {
      const interestedPromise = api.post("interesteds", {
        data: { object: object },
      });
      toast.promise(interestedPromise, {
        pending: "جاري ارسال الاقتراح الان",
        success: "تم ارسال الاقتراح بنجاح👌",
        error: "فشل ارسال الاقتراح هناك مشكله في الخادم 🤯",
        
      });
      interestedPromise.then(() => setObject(""))
    }
  };
  return (
    <section className="py-5">
      <div className="container d-flex align-items-center">
        <div className="row justify-content-center">
          <div className="col-md-11 text-center">
            <h5 className="fs-h2 text-primary mb-3">
              هل يتوجد موضع لم تجده علي المنصه ؟
            </h5>
            <p className="fs-p2 lh-md">
              هل يتوجد موضوع انت مهتم به ولم تجده في الموقع وتريد ان نكتب عنه
              علي الموقع ادخل اسم الموضوع في حقل الادخال ونحن سوف نقوم بالبحث
              عنه والكتابه وجلب اليك افضل المصادر ولاكن من اجل ان يصلك اشعار
              عندما يتم نشر الموضوع اشترك في الموقع{" "}
            </p>
            <div className="search mt-4">
              <input
                type="text"
                value={object}
                onChange={(e) => setObject(e.target.value)}
                className="form-field"
                placeholder="ادخل الموضوع الذي تريده"
              />
              <button className="btn-primary" onClick={sendInterested}>
                ارسال
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InterestedForm;
