import React from 'react'
import Image from 'next/image'
import { fetchApi } from '../../utils/handelApi';
import { baseUrl } from '../../utils/handelApi'

function Url({ article }) {

  return (
    <div className="mt-5 pt-5">
      <div className="container-xl">
        <Image
          width={1250}
          height={750}
          layout="responsive"
          src={`${baseUrl}/images/${article.image}`}
          blurDataURL={`${baseUrl}/images/${article.image}`}
          placeholder="blur"
          alt="aaa"
        />
        <h1 className='fs-h1 text-dark my-1'>{article.title}</h1>
        <strong className="text-primary fs-p1 d-block">{article.category}</strong>
        <strong className="text-dark fs-p1 d-bloc">{article.date}</strong>
        <h5 className="fs-h3 mt-3">الوصف</h5>
        <p>{article.descraption}</p>
        <h5 className="fs-h3 mt-3">محتوي المقال</h5>
        <section dangerouslySetInnerHTML={{ __html: article.content }}></section>

      </div>
    </div>
  )
}

export default Url

export async function getServerSideProps({ params }) {
  try {
    const { article } = await fetchApi(`article/${params.url}`);
    console.log(article)

    return {
      props: {
        article,
      },
    }
  } catch (error) {
    return {
      props: {
        notFound: true,
      },
    }
  }
}
