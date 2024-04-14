import Link from 'next/link'

export const metadata = {
    title: 'About | 佐々木'
}
export default function Page() {
    return (
        <>
        <h1>about</h1>
        <p><Link href="/">トップページに戻る</Link></p>
        </>
    )
}