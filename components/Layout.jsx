import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="favicon.ico" />
                <meta name='keywords' content='{keywords}' />
                <meta name='description' content='{description}' />
            </Head>
            <Header />
            <main className='w-full bg-slate-700 text-white'>
            <div className='flex container w-4/5 items-center justify-center p-4'>
                <div className='w-full bg-slate-600 rounded lg'>
            {children}
            </div>
            </div>
            </main>
            <Footer />
        </div>
    )
}


Layout.defaultProps = {
    title: 'NFT Gallery',
    keywords: 'nft, gallery',
    description: 'NFT lookup website',

}