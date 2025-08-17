"use client"

import { useEffect } from 'react'
import gsap, { selector } from 'gsap';
import Link from 'next/link'
import Image from 'next/image'
import './styles/index.css'
import './styles/style.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { RotatingCards } from './components/RotatingCards'
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
});


function AnimatedText({ text }) {
  const letters = [...text];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    const spans = document.querySelectorAll(".js-text span");

    gsap.set(spans, { opacity: 0, scale: 1.2, filter: "blur(10px)" });
    tl.to(spans, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.5,
      stagger: 0.03,
      delay: 0.3,
    });

    return () => {
      gsap.killTweensOf(".js-text span");
    };
  }, []);

  return (
    <p className="js-text">
      {letters.map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </p>
  );
}


export default function Page() {
  useEffect(() => {
    // タイムラインを定義
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // すべてのjs-text要素を取得
    const textElements = document.querySelectorAll(".js-text");

    // 各要素の文字を<span>で囲む処理
    textElements.forEach(paragraph => {
      const textContent = paragraph.textContent;
      const newTextContent = [...textContent].map((char) => `<span>${char}</span>`).join("");
      paragraph.innerHTML = newTextContent;
    });

    // タイムラインにアニメーションを追加
    textElements.forEach((paragraph, index) => {
      const spans = paragraph.querySelectorAll("span");

      // 各行の初期状態を設定
      gsap.set(spans, {
        opacity: 0,
        scale: 1.2,
        filter: 'blur(10px)',
      });

      // アニメーションをタイムラインに追加
      // staggerToを使用することで、各行のアニメーションが完了してから次の行が始まる
      tl.to(spans, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.5,
        stagger: 0.03,
        delay: 0.3, // 各行のアニメーション開始前に0.5秒の遅延を追加
      }, index * 1.2); // 各行のアニメーション開始タイミングを制御
    });

    return () => {
      gsap.killTweensOf(".js-text span");
    };
  }, []);
  return (
    <>
      <section>
        <Header />
        <div className="top">
          <RotatingCards />
          <div className="top_contents">
            <div className={`${garamond.className} ${"name_wrap"}`}>
              <h1 className="name_comment js-text">Welcome to</h1>
              <h1 className="name_job js-text">WEB DEVELOPER</h1>
              <h1 className="name_name js-text">DAICHI SASAKI</h1>
              <h1 className="name_title js-text">PORTFOLIO</h1>
            </div>
          </div>

          {/* <div className="loop eb-garamond">
            <div className="loop_item">DESIGN STRATEGY　</div>
            <div className="loop_item">DESIGN STRATEGY　</div>
          </div> */}
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
              <div className="skills_wrap">
              <div className="skills_blk fadein">
                <div className="skills_blk-card">
                    <div className="cardOwn card cardCoding"><h1 className="cardOwnTtl">Coding</h1><p className="cardOwnText">Building websites and applications using code.</p></div>
                </div>
                <div className="skills_blk-text">
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
              </div>
              <div className="skills_blk fadein">
                <div className="skills_blk-card">
                    <div className="cardOwn card cardDesign"><h1 className="cardOwnTtl">Design</h1><p className="cardOwnText"> Creating user-friendly and aesthetically pleasing websites.</p></div>
                </div>
                <div className="skills_blk-text">
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
              </div>
              <div className="skills_blk fadein">
                <div className="skills_blk-card">
                    <div className="cardOwn card cardMovie"><h1 className="cardOwnTtl">Movie</h1><p className="cardOwnText">Enhancing and arranging video footage into a final product.</p></div>
                </div>
                <div className="skills_blk-text">
                  <h1 className={`${garamond.className} ${"skills_blk-ttl"}`}>
                    Movie
                  </h1>
                  <p className="skills_blk-contents section_text">
                    動画編集も対応しております。Webサイトのトップ動画、結婚式のプロフィールムービーなどの制作実績があります。
                  </p>
                  <p className="skills_blk-tools">
                    <span className="skills_blk-tools-ttl">Tools:</span>
                    <span className="skills_blk-tools-name">
                      AfterEffects,Premiere
                    </span>
                  </p>
                </div>
              </div>
              <div className="skills_blk fadein">
                <div className="skills_blk-card">
                    <div className="cardOwn card cardIllust"><h1 className="cardOwnTtl">Illust</h1><p className="cardOwnText">Crafting custom images and graphics for various media.</p></div>
                </div>
                <div className="skills_blk-text">
                  <h1 className={`${garamond.className} ${"skills_blk-ttl"}`}>
                    Illust
                  </h1>
                  <p className="skills_blk-contents section_text">
                    イラスト制作も行います。週刊少年漫画雑誌での受賞歴があり、漫画制作も可能です。似顔絵の制作実績もあります。
                  </p>
                  <p className="skills_blk-tools">
                    <span className="skills_blk-tools-ttl">Tools:</span>
                    <span className="skills_blk-tools-name">
                      Illustrator,Clip Studio
                    </span>
                  </p>
                </div>
              </div>
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
                <li className="works_item fadein">
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
                <li className="works_item fadein">

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
                <li className="works_item fadein">
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
                <li className="works_item fadein">

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
              <p className="works_caution">※そのほか多数の実績がございます。別途PDF形式の資料がございますので、必要な場合はお申しつけくださいませ。</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="works section_wrap" id="projects">
          <div className="section_inner">
            <h1 className="section_ttl fadein">
              <span className={`${garamond.className} ${"section_ttl-en"}`}>
                Projects
              </span>
              <span className="section_ttl-ja">自主制作</span>{" "}
            </h1>
            <div className="section_contents">
              <ul className="works_list">
                <li className="works_item fadein">
                  <figure>
                    <img
                      src="images/weather.png"
                      alt="天気検索アプリ"
                      width="645"
                      height="363"
                    />
                  </figure>
                  <h3 className="works_item-job">プログラミング</h3>
                  <h1 className="works_item-ttl">天気検索アプリ</h1>
                  <Link href="/works/weather" className="btn">
                    VIEW MORE
                  </Link>

                </li>
                <li className="works_item fadein">

                  <figure>
                    <img
                      src="images/paginate.png"
                      alt="ページネーション"
                      width="645"
                      height="363"
                    />
                  </figure>
                  <h3 className="works_item-job">プログラミング</h3>

                  <h1 className="works_item-ttl">ページネーション</h1>
                  {/* <p className="btn">VIEW MORE</p>
                  <Link href="/works/cocomanna" className="works_item-link">
                  </Link> */}
                  <Link href="/works/paginate" className="btn">
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



