import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';

function Footer() {
  const [toTopShow, setToTopShow] = useState(false);

  useEffect(() => {
      if (window.pageYOffset >= 1200) {
        setToTopShow(true)
      }
      else {
        setToTopShow(false)
      }
  }, [])

  const handelToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className={`to-top ${toTopShow ? "show" : ''}`} onClick={handelToTop}>
        <i className="fi-rr-angle-up"></i>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5 socail">
              <h4 className="fs-h5 text-white"> التواصل الاجتماعي</h4>
              <ul className="d-flex flex-row mt-3">
                <li>
                  <Link href="https://www.facebook.com/masadeir">
                    <Image width={35} height={35} src="/facebook.png" alt="facebook" />
                  </Link>
                </li>
                <li className="mr-2"><Link href="https://t.me/masadeir">
                  <Image width={35} height={35} src="/telegram.png" alt="telegram" />
                </Link>
                </li>
                <li className="mr-2">
                  <Link href="https://www.linkedin.com/company/masadeir">
                    <Image width={35} height={35} src="/linkedin.png" alt="linkedin" />
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="https://www.reddit.com/r/masadeir">
                    <Image width={35} height={35} src="/reddit.png" alt="reddit" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mt-5 link">
              <h4 className="fs-h5 text-white">روابط الموقع</h4>
              <ul className="list-link d-flex flex-column mt-3">
                <li className='text-light fs-p2 mb-2'><Link href="/">الرائيسية</Link></li>
                <li className='text-light fs-p2 mb-2'><Link href="/sections"> الاقسام</Link></li>
                <li className='text-light fs-p2 mb-2'><Link href="/search?page=1">كل المقالات</Link></li>
                <li className='text-light fs-p2 mb-2'><Link href="/suggest">اقترح مصدر</Link></li>
                <li className='text-light fs-p2 mb-2'><Link href="/faqs">سؤال وجواب</Link></li>
                <li className='text-light fs-p2 mb-2'><Link href="/contact">تواصل معنا</Link></li>
                <li className='text-light fs-p2 mb-2'><Link href="/privacy">ساسية الخصوصيه</Link></li>
              </ul>
            </div>

            <div className="col-md-5 mt-5">
              <h4 className="fs-h5 text-white">نبذا مختصره عنا</h4>
              <p className="text-light fs-p2 mt-3 lh-md">مصادر هو موقع عربي يهدف الي توفير الكثير من المصادر والمراجع التي تساعد الناس في عملهم ومذاكرتهم وتوفر عليهم الكثير من الجهد والبحث علي هذه المقالات والمواقع والكتب وقنوات اليوتيوب والتطبيقات المفيده والتي تساعدهم, نقوم بالبحث والتحقق من مدي قوي هذه المصادر ونرشحها لك </p>
            </div>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Footer