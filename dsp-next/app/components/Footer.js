"use client"

import Link from 'next/link'
import Image from 'next/image'
import '../styles/index.css'
import '../styles/style.scss'
import React, { useState } from "react";




export const Footer = () => {


    return (
      <>
        <footer>
          <div className="footer">
            <div className="footer_wrap">
              <h1>
                <Image
                  src="/images/logo_ds.svg"
                  width={54}
                  height={59}
                  alt="DaichiSasaki_logo"
                />
              </h1>

              <nav id="footer-nav">
                <ul
                  className={"nav_list"}>
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
        </footer>
      </>
    );
  }

// if (typeof window !== 'undefined') {

  if (typeof document !== 'undefined') {
    const animateFade = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.animate(
            {
              opacity: [0, 1],
              filter: ['blur(.4rem)', 'blur(0)'],
              translate: ['0 4rem', 0]
            },
            {
              duration: 1000,
              easing: 'ease',
              fill: 'forwards',
            }
          )
        };
      });
    };

    const fadeObserver = new IntersectionObserver(animateFade);
    const fadeElements = document.querySelectorAll('.fadein');
    fadeElements.forEach((fadeElement) => {
      fadeObserver.observe(fadeElement);
    });
  };

// };