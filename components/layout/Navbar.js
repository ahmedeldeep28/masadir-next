import Link from 'next/link'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

function Navbar() {

  const [navbarActive, setNavbarActive] = useState(false);
  const [sideBarActive, setSideBarActive] = useState(false);

  const openSideBar = () => {
    setSideBarActive(true)
  }
  const closeSideBar = () => {
    setSideBarActive(false)
  }

  useEffect(() => {
    const  checkScrolling =  ()=> {
      if (window.pageYOffset >= 150) {
        setNavbarActive(true)
      }
      else {
        setNavbarActive(false)
      }
    }
    window.onscroll = checkScrolling
    checkScrolling()
  }, [])

  const router = useRouter();
  const {pathname} =  router

  return (
    <>
      <nav className={`navbar d-flex justify-items-center align-items-center  ${(navbarActive || pathname === '/article/[url]') ? 'active' : ''}`}>
        <div className="container d-flex justify-content-between">
          <ul className="d-none d-lg-flex">
            <li><Link href="/">الرائيسية</Link></li>
            <li className='position-relative'>
              <Link href="/sections">الاقسام <i className="fi-rr-caret-down"></i></Link>
              <ul className="d-flex flex-column">
                <li><Link href="/sections/برمجه">برمجه</Link></li>
                <li><Link href="/sections/اقتصاد">اقتصاد</Link></li>
                <li><Link href="/sections/تصميم">تصميم</Link></li>
                <li><Link href="/sections/علوم">علوم</Link></li>
                <li><Link href="/sections">كل الاقسام</Link></li>
              </ul>
            </li>
            <li><Link href="/search?page=1">المقالات</Link></li>
            <li><Link href="/suggest">اقترح مصدر</Link></li>
            <li><Link href="/faqs">سؤال وجواب</Link></li>
            <li><Link href="/contact">تواصل معنا</Link></li>
          </ul>
          <div className="item d-flex d-lg-none align-items-center">
            <button className="open" onClick={openSideBar}><i className="fi-rr-align-justify"></i></button>
          </div>
          <div className="item d-lg-flex align-items-center">
            <div className="logo">
              <Image src="/favicon.svg" width={35} height={35} alt="logo" />
            </div>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${sideBarActive ? 'show' : ''}`}>
        <div className="btn-close">
          <button onClick={closeSideBar}><i className="fi-rr-cross"></i></button>
        </div>
        <div className="logo">
          <Link href="/">
            <Image width={200} height={100} src="/global-network.svg" alt="logo" />
          </Link>
        </div>
        <ul className="menu">
          <li onClick={closeSideBar} className="menu-item d-flex justify-items-center fs-p2">
            <Link href="/">الرائيسية</Link>
          </li>
          <li onClick={closeSideBar} className="menu-item d-flex justify-items-center fs-p2">
            <Link href="/sections">الاقسام</Link>
          </li>
          <li onClick={closeSideBar} className="menu-item d-flex justify-items-center fs-p2">
            <Link href="/search?page=1">المقالات</Link>
          </li>
          <li onClick={closeSideBar} className="menu-item d-flex justify-items-center fs-p2">
            <Link href="/suggest">ترشيح مصدر</Link>
          </li>
          <li onClick={closeSideBar} className="menu-item d-flex justify-items-center fs-p2">
            <Link href="/faqs">سؤال وجواب </Link>
          </li>
          <li onClick={closeSideBar} className="menu-item d-flex justify-items-center fs-p2">
            <Link href="/contact">التواصل معنا</Link>
          </li>
        </ul>
      </div>
    </>

  )
}

export default Navbar