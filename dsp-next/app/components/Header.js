"use client"

import Link from 'next/link'
import Image from 'next/image'
import '../styles/index.css'
import '../styles/style.scss'
import React, { useState } from "react";




export const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);
	const handleMenuOpen = () => {
	setOpenMenu(!openMenu);
	};

    return (
      <>
        <header>
          <div className="header">
            <div className="header_wrap">
              <h1>
              <Link href="/" className="header_link">
                <Image
                  src="/images/logo_ds.svg"
                  width={54}
                  height={59}
                  alt="DaichiSasaki_logo"
                />
                </Link>
              </h1>

              <button
                onClick={handleMenuOpen}
                type="button"
                className={`${"openBtn"} ${openMenu ? "open" : "close"}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>


              <nav id="g-nav">
                <ul
                  className={`${"nav_list"} ${openMenu ? "open" : "close"}`}>
                  <li className="nav_item">
                    <Link href="#about" className="nav_link">
                      About
                    </Link>
                  </li>
                  <li className="nav_item">
                    <Link href="#skills" className="nav_link">
                      Skills
                    </Link>
                  </li>
                  <li className="nav_item">
                    <Link href="#works" className="nav_link">
                      Works
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </>
    );
  }