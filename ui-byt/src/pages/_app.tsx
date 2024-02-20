import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '@/styles/globals.css'
import { useEffect } from 'react'
import { Poppins } from "next/font/google"

const poppins = Poppins({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'], variable: '--font-poppins' })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
  }, [])

  return <div className={`${poppins.variable} font-sans`}>
    <Component {...pageProps} />
  </div>
}