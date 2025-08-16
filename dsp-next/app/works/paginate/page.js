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
              <h1 className={`${ZenOldMincho.className} ${"section_ttl"}`}>ページネーション</h1>
              <div className="detail_info">
                <dl className="info_list">
                  <dt className="info_ttl">Type:</dt>
                  <dd className="info_item">Programming</dd>
                </dl>
                <dl className="info_list">
                  <dt className="info_ttl">Launch Date:</dt>
                  <dd className="info_item">2025.8</dd>
                </dl>
                <Link href="https://ds-ceater.github.io/react-paginate-TypeScript/" className="btn info_item-link" target='_blank' rel='noopener'>
                  VIEW SITE
                </Link>
              </div>
              <div className="detail_mock">
                <Image
                  src="/images/paginate.png"
                  width={1280}
                  height={896}
                  style={{ width: '100%', height: 'auto' }}
                  alt="天気検索アプリ"
                  className='detail_mock-pic'
                  priority
                />
              </div>
              <div className="detail_contents">
                <p className="detail_comment">APIで画像を取得し、ページングする機能を作成しました。
                </p>
                <div className="detail_desc">
                  <div className="detail_box">
                    <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">言語</span></h1>
                    <div className="detail_box-textWrap">
                      <p className="detail_box-text">React、TypeScript</p>
                    </div>
                  </div>
                  {/* <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">目的</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">企業の掲げるミッションのイメージをイラストで直感的に伝える</p>
                  </div>
                </div>
                <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">担当範囲</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">イラスト制作</p>
                  <p className="detail_box-text">（他 ディレクター 1名）</p>
                  </div>
                </div> 
                <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">使用ツール</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">Illustrator / Clip Studio Paint</p>
                  </div>
                </div>*/}
                  {/* <div className="detail_box">
                  <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">使用言語</span></h1>
                  <div className="detail_box-textWrap">
                  <p className="detail_box-text">HTML / CSS(Sass) / PHP(WordPress) / JavaScript / jQuery</p>
                  </div>
                </div> */}
                  <div className="detail_box">
                    <h1 className="detail_box-ttl"><span className="detail_box-ttl-letter">制作期間</span></h1>
                    <div className="detail_box-textWrap">
                      <p className="detail_box-text">1日</p>
                    </div>
                  </div>
                </div>
                {/* <div className="detail_point">
                  <h1 className={`${garamond.className} ${"detail_point-ttl"}`}>Point</h1>
                  <div className="detail_point-contents-wrap">
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
                  </div>
                  <div className="detail_point-contents-wrap">
                    <h1 className={`${garamond.className} ${"detail_point-contents-ttl"}`}>Design</h1>
                    <div className="detail_point-contents">
                      <div className="detail_point-pic-wrap">
                        <Image
                          src="/images/logo_karuizawa-pass-white.svg"
                          width={272}
                          height={334}
                          style={{ width: '100%', height: 'auto' }}
                          alt="The軽井沢管理画面"
                          className='detail_point-pic'
                        />
                      </div>
                      <p className="detail_point-text">優雅で気品のある印象になるよう筆記体と明朝体を組み合わせ、微調整してデザインしました。</p>
                    </div>
                  </div>
                </div> */}
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )

}