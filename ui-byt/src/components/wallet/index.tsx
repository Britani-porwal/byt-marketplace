import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const Wallet = () => {
    const [haveMetamask, sethaveMetamask] = useState(true)
    const [isConnected, setIsConnected] = useState(false)
    const [accountBalance, setAccountBalance] = useState<string>()
    const [walletAddress, setWalletAddress] = useState<string>()

    useEffect(() => {
        const checkMetamaskAvailability = async () => {
            if (typeof window.ethereum === 'undefined') {
                sethaveMetamask(false);
            }
            else sethaveMetamask(true);
        }
        checkMetamaskAvailability()
    }, [])

    const connectWallet = async () => {
        try {
            if (typeof window.ethereum === 'undefined') {
                sethaveMetamask(false);
            }
            else {
                const { ethereum } = window;
                const provider = new ethers.BrowserProvider(window.ethereum);

                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                // let balance = await provider.getBalance(accounts[0])
                // let formattedBalance = ethers.formatEther(balance)
                setIsConnected(true)
                // setAccountBalance(formattedBalance)
                // setWalletAddress(accounts[0])
            }
        }
        catch (error) {
            setIsConnected(false);
        }
    }

    return (
        <>
            {haveMetamask ? (
                <div>
                    {
                        isConnected ? <button>
                            Wallet Address : {walletAddress}
                        </button> : <button onClick={connectWallet}>
                            Connect
                        </button>
                    }
                </div>
            ) :
                <div>
                    Please install Metamask
                </div>}
            {/* <ConnectButton /> */}
        </>
    )
}
export default Wallet