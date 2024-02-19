// import '@/styles/globals.css'
// import "@rainbow-me/rainbowkit/styles.css";
// import {
//   RainbowKitProvider,
//   getDefaultConfig,
// } from '@rainbow-me/rainbowkit'
// import { mainnet } from 'wagmi/chains'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { WagmiProvider, http } from 'wagmi'
// import type { AppProps } from 'next/app'

// const config = getDefaultConfig({
//   appName: 'RainbowKit demo',
//   projectId: 'YOUR_PROJECT_ID',
//   chains: [mainnet],
//   transports: {
//     [mainnet.id]: http(),
//   },
// })

// const queryClient = new QueryClient()

// export default function App({ Component, pageProps }: AppProps) {
//   return <WagmiProvider config={config}>
//     <QueryClientProvider client={queryClient}>
//       <RainbowKitProvider>
//         <Component {...pageProps} />
//       </RainbowKitProvider>
//     </QueryClientProvider>
//   </WagmiProvider>
// }

import '@/styles/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}