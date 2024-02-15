import Head from 'next/head'
import FooterQuote from '../components/testimonials/quote'
import LogoFooter from '../components/hero/partners'
import Main from '../components/hero/main'
import Navbar from '../components/navigation/navbar'
import Page2 from '../components/problem'
import Page3 from '../components/solution/solution'
import { Poppins } from 'next/font/google'
import ProductSuite from '../components/product-suite/content'
import PageFooter from '@/components/footer/page-footer'
import ProductPage from '@/components/products'
import Enterprise from '../components/enterprise/content'

const poppins = Poppins({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'], variable: '--font-poppins' })

export default function Home() {
  return (
    <>
      <Head>
        <title>Byt.io</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`font-[400] text-dark-grey ${poppins.variable} font-sans`}>
        <Navbar />
        <Main />
        <LogoFooter />
        <FooterQuote />
        <Page2 />
        <Page3 />
        <ProductPage />
        <ProductSuite />
        <Enterprise />
        <PageFooter />
      </main>
    </>
  )
}
