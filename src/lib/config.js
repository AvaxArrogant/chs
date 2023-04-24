import CoinFlipABI from '$lib/abis/CoinFlipABI.json';
import MnkzTokenABI from '$lib/abis/MnkzTokenABI.json';

export const config = {
    chainId: 43114
}

export const contracts = {
    mnkzToken: {
        address: '0xeFdD9a1B91f164Ea5Ca973eFCe0096fE3f97645a',
        abi: MnkzTokenABI
    },
    coinFlip: {
        address: '0x2EFA50FE213b91bdAD0f7D5A86bF4664e505eb5d',
        abi: CoinFlipABI
    }
}