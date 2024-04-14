"use client"

import Link from 'next/link'
import Image from 'next/image'
import './styles/index.css'
import './styles/style.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
});

export default function Page() {
  return (
    <>
      <section>
      <Header />
        <div className="top">
          
          <div className="top_contents fadein">
            <div className={`${garamond.className} ${"name_wrap"}`}>
              <p className="name_comment">Welcome to</p>
              <h1 className="name_job">WEB DEVELOPER</h1>
              <h1 className="name_name">DAICHI SASAKI</h1>
              <h1 className="name_title">PORTFOLIO</h1>
            </div>
          </div>
          <div className="loop eb-garamond">
            <div className="loop_item">GROW OUR BUSINESS　</div>
            <div className="loop_item">GROW OUR BUSINESS　</div>
          </div>
          <div className="scrolldown1"><span>Scroll</span></div>
        </div>
      </section>
      <section>
        <div className="about section_wrap" id="about">
          <div className="section_inner">
            <h1 className="section_ttl fadein">
              <span className={`${garamond.className} ${"section_ttl-en"}`}>
                About
              </span>
              <span className="section_ttl-ja">自己紹介</span>{" "}
            </h1>
            <div className="section_contents">
              <h1 className="about_ttl fadein">
                <span className="about_ttl-ja">佐々木 大地</span>
                <span className="about_ttl-en">Daichi Sasaki</span>
              </h1>
              <div className="about_box fadein">
                <Image
                  src="/images/profile.png"
                  width={197}
                  height={197}
                  alt="DaichiSasaki_about"
                  className="about_box-pic"
                />
                <p className="about_box-text section_text">
                  広島県出身。販売・事務等を経て、デジタルで物を創る面白さ、将来性に惹かれ、2015年10月よりWeb制作会社に勤務。
                  <br />
                  コーポレートサイト、ランディングページ、ECサイトの更新・運営などを経験。
                  案件に応じてデザイン、コーディング、ディレクションを担当。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="skills section_wrap" id="skills">
          <div className="section_inner">
            <h1 className="section_ttl fadein">
              <span className={`${garamond.className} ${"section_ttl-en"}`}>
                Skills
              </span>
              <span className="section_ttl-ja">技術</span>{" "}
            </h1>
            <div className="section_contents">
              <div className="skills_blk fadein">
                <h1 className={`${garamond.className} ${"skills_blk-ttl"}`}>
                  Web Development
                </h1>
                <p className="skills_blk-contents section_text">
                  HTML・CSS(Sass)を用いてデザインをWebサイトとして構築します。
                  <br />
                  環境に応じて、JavaScript、PHP、WordPress、React、Next.jsなどの言語やフレームワークに対応します。
                  <br />
                  日々キャッチアップを進めます。
                </p>
                <p className="skills_blk-tools">
                  <span className="skills_blk-tools-ttl">Tools:</span>
                  <span className="skills_blk-tools-name">
                    Visual Studio Code
                  </span>
                </p>
              </div>
              <div className="skills_blk fadein">
                <h1 className={`${garamond.className} ${"skills_blk-ttl"}`}>
                  Web Design
                </h1>
                <p className="skills_blk-contents section_text">
                  Webサイトやバナーをデザインします。
                  <br />
                  まずご要望をしっかりとヒアリングし、目的を果たすために最適なデザインはどういったものかを把握し、導線を定めて制作します。
                </p>
                <p className="skills_blk-tools">
                  <span className="skills_blk-tools-ttl">Tools:</span>
                  <span className="skills_blk-tools-name">
                    Figma,Photoshop,Illustrator
                  </span>
                </p>
              </div>
              <div className="skills_blk fadein">
                <h1 className={`${garamond.className} ${"skills_blk-ttl"}`}>
                  Another
                </h1>
                <p className="skills_blk-contents section_text">
                  DTP、写真撮影（商品写真、イメージ写真等）、イラスト、漫画、動画編集も対応しております。お気軽にお申し付けください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="works section_wrap" id="works">
          <div className="section_inner">
            <h1 className="section_ttl fadein">
              <span className={`${garamond.className} ${"section_ttl-en"}`}>
                Works
              </span>
              <span className="section_ttl-ja">実績</span>{" "}
            </h1>
            <div className="section_contents">
              <ul className="works_list">
                <li className="works_item">
                  <figure>
                    <img
                      src="images/the-karuizawa.png"
                      alt="The軽井沢グルメ"
                      width="645"
                      height="363"
                    />
                  </figure>
                  <h3 className="works_item-job">デザイン/コーディング</h3>
                  <h1 className="works_item-ttl">THE軽井沢グルメ</h1>
                  {/* <p className="btn">VIEW MORE</p>
                  <Link href="/works/karuizawa" className="works_item-link">
                  </Link> */}
                  <Link href="/works/karuizawa" className="btn">
                  VIEW MORE
                  </Link>
                
                </li>
                <li className="works_item">

                  <figure>
                    <img
                      src="images/cocomanna.png"
                      alt="ココマンナ公式サイト"
                      width="645"
                      height="363"
                    />
                  </figure>
                  <h3 className="works_item-job">デザイン/コーディング</h3>

                  <h1 className="works_item-ttl">ココマンナ公式サイト</h1>
                  {/* <p className="btn">VIEW MORE</p>
                  <Link href="/works/cocomanna" className="works_item-link">
                  </Link> */}
                  <Link href="/works/cocomanna" className="btn">
                  VIEW MORE
                  </Link>
                </li>
                <li className="works_item">
                  <figure>
                    <img src="images/rerise.png" alt="rerise" />
                  </figure>
                  <h3 className="works_item-job">コーディング</h3>

                  <h1 className="works_item-ttl">リライズフィットネス</h1>
                  {/* <p className="btn">VIEW MORE</p>
                  <Link href="/works/rerise" className="works_item-link">

                  </Link> */}
                  <Link href="/works/rerise" className="btn">
                  VIEW MORE
                  </Link>
                </li>
                {/* <li className="works_item">
                  <figure>
                    <img
                      src="images/manna.png"
                      width="645"
                      height="363"
                      alt="マンナジャパン"
                    />
                  </figure>
                  <h3 className="works_item-job">デザイン/コーディング</h3>

                  <h1 className="works_item-ttl">マンナジャパン公式サイト</h1>
                  <Link href="/works/mannajapan" className="btn">
                  VIEW MORE
                  </Link>
                </li> */}
                {/* <li className="works_item">
                  <figure>
                    <img
                      src="images/select.png"
                      width="645"
                      height="363"
                      alt="ECサイト アロハストリートセレクト"
                    />
                  </figure>
                  <h3 className="works_item-job">
                    ECサイト運営/デザイン/コーディング
                  </h3>
                  <h1 className="works_item-ttl">
                    ECサイト アロハストリートセレクト
                  </h1>
                  <p className="btn">VIEW MORE</p>
                  <Link href="/works/select" className="works_item-link">

                  </Link>
                  <Link href="/works/select" className="btn">
                  VIEW MORE
                  </Link>
                </li> */}
                <li className="works_item">

                  <figure>
                    <img
                      src="images/cm.png"
                      width="645"
                      height="363"
                      alt="コマースメディア イラスト"
                    />
                  </figure>
                  <h3 className="works_item-job">イラストレーション</h3>

                  <h1 className="works_item-ttl">
                    コマースメディア イラスト
                  </h1>
                  {/* <p className="btn">VIEW MORE</p>
                  <Link href="/works/cm" className="works_item-link">

                  </Link> */}
                  <Link href="/works/cm" className="btn">
                  VIEW MORE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="contact section_wrap" id="contact">
          <div className="section_inner">
            <h1 className="section_ttl fadein">
              <span className={`${garamond.className} ${"section_ttl-en"}`}>
                Contact
              </span>
              <span className="section_ttl-ja">お問い合わせ</span>{" "}
            </h1>
            <div className="section_contents">
              
                <Link
                  href="https://forms.gle/wLt9CPi6qUVWjnrK7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='btn'
                >
                  CONTACT
                </Link>
              
              {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfHGfTaDDhFuiXPfiRSw42rXAHfcUoPBppkB0AapQ6sqhdiyA/viewform?embedded=true" width="100%" height="880" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

if (typeof document !== 'undefined') {
  const animateFade = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
      // console.log(entry.target);
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'],
          translate: ['0 4rem', 0]
        },
        {
          duration: 2000,
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

  const showWorks = (entries) => {
    console.log(entries[0]);
    const worksList = document.querySelectorAll('.works_item');
    for (let i = 0; i < worksList.length; i++) {
      const keyframes = {
        opacity: [0, 1],
        translate: ['0 80px', 0],
        // scale: [1.2, 1],
        // rotate: ['z 30deg', 0],
        // filter: ['blur(10px)', 'blur(0)']
      };
      const options = {
        duration: 800,
        delay: i * 300,
        fill: 'forwards',
      };
      worksList[i].animate(keyframes, options);
    };
  };
  const worksObserver = new IntersectionObserver(showWorks);
  worksObserver.observe(document.querySelector('#works'));
};

