import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from '../../lib/utils';

function CategoryCard({ sectionData}) {
  const {slug,name,cover} = sectionData
  return (
    <Link href={`sections/${slug}`}>
      <div className="section-card">
        <Image
          layout="responsive"
          width={350}
          height={250}
          src={getStrapiMedia(cover.url)}
          blurDataURL={getStrapiMedia(cover.url)}
          placeholder="blur"
          alt={name}
        />
        <h4 className="fs-h6 text-black mt-1 text-center">{name}</h4>
      </div>
    </Link>
  );
}

export default CategoryCard;
