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
              <h1 className={`${ZenOldMincho.className} ${"section_ttl"}`}>リライズフィットネス</h1>
              <div className="detail_info">
                <dl className="info_list">
                  <dt className="info_ttl">Type:</dt>
                  <dd className="info_item">Website</dd>
                </dl>
                <dl className="info_list">
                  <dt className="info_ttl">Launch Date:</dt>
                  <dd className="info_item">2019.10</dd>
                </dl>
                <Link href="https://rerise24.co.jp/" className="btn info_item-link" target='_blank' rel='noopener'>
                      VIEW SITE
                    </Link>
              </div>
              <div className="detail_mock">
                <Image
                  src="/images/rerise_pcsp.png"
                  width={1280}
                  height={896}
                  style={{ width: '100%', height: 'auto' }}
                  alt="リライズフィットネス"
                  className='detail_mock-pic'
                  priority
                />
              </div>
              <div className="detail_contents">
              <p className="detail_comment">千葉県鴨川市にオープンしたフィットネスジムの公式サイトの制作をご依頼いただきました。外部のデザイナーにデザインしていただき、３Dでジムの内部を内覧できるシステムを外注するなどの共同作業で完成しました。<br />サイト開設当初より多くの入会申し込みをいただいております。</p>
              <div className="detail_desc">
                <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">ターゲット</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">対象地域にお住まいのジムを利用する主に30-40代の男女。</p>
                  </div>
                </div>
                <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">目的</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">店舗、設備、料金等を紹介し集客を向上する。</p>
                  </div>
                </div>
                <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">担当範囲</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">コーディング</p>
                  <p className="detail_box-text">（他 ディレクター 1名、デザイナー1名）</p>
                  </div>
                </div>
                <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">使用ツール</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">Illustrator / Photoshop / Visual Studio Code</p>
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
                  <p className="detail_box-text">1ケ月</p>
                  </div>
                </div>
              </div>
                <div className="detail_point">
                  <h1 className={`${garamond.className} ${"detail_point-ttl"}`}>Point</h1>
                  <div className="detail_point-contents-wrap">
                    <h1 className={`${garamond.className} ${"detail_point-contents-ttl"}`}>Coding</h1>
                    <div className="detail_point-contents">
                      <div className="detail_point-pic-wrap">
                        <Image
                          src="/images/rerise_codeing.png"
                          width={1150}
                          height={636}
                          style={{ width: '100%', height: 'auto' }}
                          alt="リライズ部分"
                          className='detail_point-pic'
                        />
                      </div>
                      <p className="detail_point-text">Wordpressでオリジナルテーマを作成し、PHP編集とプラグインを用いて問い合わせフォームやカレンダーによる予約システム（現在は非表示）を設定しました。<br />アクティブ感を演出するため、スクロールに応じて項目が現れるようセッティングしました。</p>
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