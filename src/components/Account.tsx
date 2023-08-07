import { useAccount, useDisconnect } from 'wagmi'

import { useIsMounted } from '../hooks'
import { Balance } from './Balance'
import { BlockNumber } from './BlockNumber'
import { SendTransaction } from './SendTransaction'
import { SendTransactionPrepared } from './SendTransactionPrepared'
import { SignMessage } from './SignMessage'
import { SignTypedData } from './SignTypedData'
import { Token } from './Token'
import { WatchContractEvents } from './WatchContractEvents'
import { WatchPendingTransactions } from './WatchPendingTransactions'
import { WriteContract } from './WriteContract'
import { WriteContractPrepared } from './WriteContractPrepared'

export const Account = () => {
  const isMounted = useIsMounted()
  const account = useAccount({
    onConnect: (data) => console.log('connected', data),
    onDisconnect: () => console.log('disconnected'),
  })
  const disconnect = useDisconnect()

  return (
    <div>
      <div>
        {account?.address}
      </div>

      <div>
        {account?.address && (
          <button type='button' onClick={() => disconnect.disconnect()}>
            Disconnect
          </button>
        )}
        {isMounted && account?.connector?.name && (
          <span>Connected to {account.connector.name}</span>
        )}
      </div>

      {true && (
        <>
          {true && (
            <>
              <h4>Balance</h4>
              <Balance />

              <h4>Block Number</h4>
              <BlockNumber />

              <h4>Send Transaction</h4>
              <SendTransaction />

              <h4>Send Transaction Prepared</h4>
              <SendTransactionPrepared />
            </>
          )}


          <h4>Watch Pending Transactions</h4>
          <WatchPendingTransactions />

          <h4>Write Contract</h4>
          <WriteContract />

          <h4>Write Contract Prepared</h4>
          <WriteContractPrepared />

          <h4>Contract Events</h4>
          <WatchContractEvents />

          {true && (
            <>
              <h4>Sign Message</h4>
              <SignMessage />

              <h4>Sign Typed Data</h4>
              <SignTypedData />

              <h4>Token</h4>
              <Token />
            </>
          )}
        </>
      )}
    </div>
  )
}
