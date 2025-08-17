"use client"

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../styles/style.scss';

export const RotatingCards = () => {
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth === 0) return;

    const cards = gsap.utils.toArray(".cardOwn", containerRef.current);

    // 初期状態を透明にする
    gsap.set(cards, { opacity: 0 });

    let radius, perspective;
    if (windowWidth < 768) {
      radius = windowWidth * 0.5;
      perspective = windowWidth * 1.5;
    } else {
      radius = windowWidth * 0.25;
      perspective = windowWidth * 0.55;
    }

    gsap.set(containerRef.current, {
      perspective,
      transformStyle: "preserve-3d"
    });

    cards.forEach((element, index) => {
      gsap.set(element, {
        rotationY: index * 360 / cards.length,
        transformOrigin: "50% 50% " + -radius
      });
    });

    // タイムラインを作成
    const tl = gsap.timeline({
      delay: 5,
      // `onComplete`でフェードイン完了後に回転を開始
      onComplete: () => {
        gsap.to(cards, {
          rotationY: "-=250",
          duration: 15,
          repeat: -1,
          ease: "none"
        });
      }
    });

    // 1. カードを順番にフェードインさせる
    tl.to(cards, {
      opacity: 1,
      duration: 0.2, // 透明から不透明に変わる時間を短く設定
      stagger: 0.5, // カードが現れる時間差を短く設定
    });

    // クリーンアップ関数
    return () => {
      gsap.killTweensOf(cards);
      gsap.killTweensOf(containerRef.current);
    };

  }, [windowWidth]);

  return (
    <>
      <div className="rotating-cards-container">
        <div ref={containerRef} className="cardWrapper">
          <div className="cardOwn card"><h1 className="cardOwnTtl">Coding</h1><p className="cardOwnText">Building websites and applications using code.</p></div>
          <div className="cardOwn card"><h1 className="cardOwnTtl">Design</h1><p className="cardOwnText"> Creating user-friendly and aesthetically pleasing websites.</p></div>
          <div className="cardOwn card"><h1 className="cardOwnTtl">Movie</h1><p className="cardOwnText">Enhancing and arranging video footage into a final product.</p></div>
          <div className="cardOwn card"><h1 className="cardOwnTtl">Illust</h1><p className="cardOwnText">Crafting custom images and graphics for various media.</p></div>
          {/* 他のカード要素 */}
        </div>
      </div>
    </>
  )
}