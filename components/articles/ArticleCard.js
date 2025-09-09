import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from './../../lib/utils';

function ArticleCard({ articleData }) {
  const { title, publishedAt, slug, description, category, cover } = articleData;

  return (
    <Link href={`/article/${slug}`}>
      <div className="card-article">
        <div className="header">
          <Image
            width={650}
            height={350}
          src={getStrapiMedia(cover.url)}
          blurDataURL={getStrapiMedia(cover.url)}
            placeholder="blur"
            alt={cover.alternativeText}
          />
        </div>
        <div className="details py-2 mt-1 d-flex justify-content-between align-items-center">
          <span className="category text-primary fs-p1 font-title">
            {category?.name}
          </span>
          <span className="date fs-p3 font-title">
            <i className="fi-rr-calendar mr-1"></i> {publishedAt}
          </span>
        </div>
        <div className="body">
          <h4 className="fs-h4 mb-2">{title}</h4>
          <p className="text fs-p3 lh-sm text-gray">
            {description.slice(0, 150)}....
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
