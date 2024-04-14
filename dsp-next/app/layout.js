import "./globals.css";

export const metadata = {
  title: "DaichiSasaki | Webデザイン、コーディング、イラスト、写真撮影",
  description: "Webデベロッパー、佐々木大地のポートフォリオです。デザイン、コーディング、フロントエンド、WordPress等対応しております。よろしくお願いいたします。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className={'container'}>
          {children}
        </div>
      </body>
    </html>
  );
}
