import { useAccount, useConnect } from 'wagmi'

import { useIsMounted } from '../hooks'
import { ConnectKitButton } from "connectkit";

export const Connect = () => {
  const isMounted = useIsMounted()
  const { connector, isReconnecting } = useAccount()
  const { connect, connectors, isLoading, error, pendingConnector } =
    useConnect()

  return (
      <div style={{textAlign: 'right'}} >
      <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, chain }) => {
        return (
          <button onClick={show} >
            {isConnected ? address : "Connect Wallet"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
    </div>
  )
}
