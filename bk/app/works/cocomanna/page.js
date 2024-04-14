import Link from 'next/link'
import Image from 'next/image'
import '../../styles/index.css'
import '../../styles/style.scss'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { EB_Garamond } from "next/font/google";
import { Zen_Old_Mincho } from "next/font/google";


const garamond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
});

const ZenOldMincho = Zen_Old_Mincho({
  weight: "600",
  preload: false,
});

export default function Page() {
  return (
    <>
      <Header />
      <div className="detail">
        <section>
          <div className="section">
            <div className="section_inner">
              <h1 className={`${ZenOldMincho.className} ${"section_ttl"}`}>ココマンナ公式サイト</h1>
              <div className="detail_info">
                <dl className="info_list">
                  <dt className="info_ttl">Type:</dt>
                  <dd className="info_item">Website</dd>
                </dl>
                <dl className="info_list">
                  <dt className="info_ttl">Launch Date:</dt>
                  <dd className="info_item">2020.12</dd>
                </dl>
                <Link href="https://cocomanna.jp/" className="btn info_item-link" target='_blank' rel='noopener'>
                      VIEW SITE
                    </Link>
              </div>
              <div className="detail_mock">
                <Image
                  src="/images/cocomanna_pcsp.png"
                  width={1280}
                  height={896}
                  style={{ width: '100%', height: 'auto' }}
                  alt="ココマンナ公式サイト"
                  className='detail_mock-pic'
                  priority
                />
              </div>
              <div className="detail_contents">
              <p className="detail_comment">横浜を中心に展開するクレープショップチェーンのポータルサイトをご依頼いただきました。ご家族連れや若い世代でにぎわう人気のお店だので、楽しさが伝わるデザインをこころがけました。<br />フランチャイズの募集もかけており、このHPから多くのお問い合わせをいただき成約にもいたっているとのことです。</p>
              <div className="detail_desc">
                <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">ターゲット</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">ココマンナに興味を持たれる客層、並びにフランチャイズへの参加を検討中の経営者。</p>
                  </div>
                </div>
                <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">目的</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">各店舗とメニュー、キャンペーンの紹介による実店舗への集客。問い合わせの受付。フランチャイズ、出店の打診の受付。</p>
                  </div>
                </div>
                <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">担当範囲</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">デザイン、コーディング</p>
                  <p className="detail_box-text">（他 ディレクター 1名）</p>
                  </div>
                </div>
                <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">使用ツール</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">Illustrator / Photoshop / XD / Visual Studio Code</p>
                  </div>
                </div>
                <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">使用言語</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">HTML / CSS(Sass) / PHP(WordPress) / JavaScript / jQuery</p>
                  </div>
                </div>
                <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">制作期間</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">2ケ月</p>
                  </div>
                </div>
              </div>
                <div className="detail_point">
                  <h1 className={`${garamond.className} ${"detail_point-ttl"}`}>Point</h1>
                  {/* <div className="detail_point-contents-wrap">
                    <h1 className={`${garamond.className} ${"detail_point-contents-ttl"}`}>Coding</h1>
                    <div className="detail_point-contents">
                      <div className="detail_point-pic-wrap">
                        <Image
                          src="/images/thekaruizawa_wp-admin.png"
                          width={272}
                          height={334}
                          style={{ width: '100%', height: 'auto' }}
                          alt="The軽井沢管理画面"
                          className='detail_point-pic'
                        />
                      </div>
                      <p className="detail_point-text">各店舗には管理画面で地域や条件などを設定することでカテゴリーごとの一覧ページに自動追加され、店舗数に応じてページ分けされる設定にしています。</p>
                    </div>
                  </div> */}
                  <div className="detail_point-contents-wrap">
                    <h1 className={`${garamond.className} ${"detail_point-contents-ttl"}`}>Design</h1>
                    <div className="detail_point-contents">
                      <div className="detail_point-pic-wrap">
                        <Image
                          src="/images/cocomanna_top.png"
                          width={1103}
                          height={823}
                          style={{ width: '100%', height: 'auto' }}
                          alt="ココマンナトップ画面"
                          className='detail_point-pic'
                        />
                      </div>
                      <p className="detail_point-text">店舗の楽しい雰囲気とメニューのシズル感が伝わるよう、材料の卵をイメージした曲線を多用し配色を明るくし、メニュー写真を配置、動きを付けて生き生きした印象となるようデザインとコーディングを行いました。</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )

}