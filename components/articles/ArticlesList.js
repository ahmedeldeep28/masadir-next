import ArticleCard from "./ArticleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ArticlesList({ articles, isSlider }) {
  if (isSlider) {
    return (
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
        {articles.map((article) => {
          return (
            <SwiperSlide key={article._id}>
              <ArticleCard articleData={article} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
  return (
    <div className="row">
      {articles.map((article) => {
        return (
          <div className="col-md-6 mt-5" key={article.id}>
            <ArticleCard articleData={article} />
          </div>
        );
      })}
    </div>
  );
}

export default ArticlesList;
