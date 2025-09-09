import { useRouter } from "next/router";
import { useState } from "react";

function HeroPages({ title, text, search, full }) {
  const router = useRouter();
  const [term, setTerm] = useState(router.query.term);

  const searchArticle = () => {
    const { query } = router;
    query.page = "1";
    query.term = term;
    router.push({ pathname: "search", query: query });
  };

  return (
    <section className={`hero-section ${full ? "h-full " : ""}`}>
      <div className="container h-100 d-flex align-items-center">
        <div className="row justify-content-center">
          <div className="col-md-11 text-center">
            <h1 className="fs-h1 text-white">{title}</h1>
            <p className="fs-p1 text-light lh-md">{text}</p>
            {search ? (
              <div className="search mt-4">
                <input
                  type="text"
                  className="form-field"
                  name="term"
                  value={term}
                  placeholder="ابحث عن مقالات في الموقع"
                  onChange={(e) => setTerm(e.target.value)}
                />
                <button
                  className="btn-primary"
                  onClick={searchArticle}
                  disabled={router.query.term === term}
                >
                  ابحث
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPages;
