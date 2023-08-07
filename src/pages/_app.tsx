import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { scrollTestnet } from 'wagmi/chains'
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";




const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID; 
const chains = [scrollTestnet];
const config = createConfig(getDefaultConfig({
    autoConnect:true,
    appName:'frontfarm',
    walletConnectProjectId: walletConnectProjectId,
    chains,
})
);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextHead>
        <title>wagmi</title>
      </NextHead>

      <WagmiConfig config={config}>
      <ConnectKitProvider>
        <Component {...pageProps} />
      </ConnectKitProvider>
      </WagmiConfig>
    </>
  )
}

export default App
