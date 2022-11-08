import Link from 'next/link'
import Image from 'next/image'
import {baseUrl} from '../../utils/handelApi'

function ArticleCard({ articleData }) {
  const { title, url, description, category, date, image } = articleData
  return (
    <Link href={`/article/${url}`}>
      <div className="card-article">
        <div className="header">
          <Image
            width={650}
            height={350}
            src={`${baseUrl}/images/${image}`}
            blurDataURL={`${baseUrl}/images/${image}`}
            placeholder="blur"
            alt="صورة المقال" />
        </div>
        <div className="detils py-2 mt-1 d-flex justify-content-between align-items-center">
          <span className="categroy text-primary fs-p1 font-title">{category}</span>
          <span className="date fs-p3 font-title"><i className="fi-rr-calendar mr-1"></i> {date}</span>
        </div>
        <div className="body">
          <h4 className='fs-h4 mb-2'>{title}</h4>
          <p className="text fs-p3 lh-sm text-gray">{description.slice(0, 150)}....</p>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard