<script>
    import MiddlePlus from '$lib/assets/MiddlePlus.png'
    import RoundPlus from '$lib/assets/RoundPlus.png'
    import { config, contracts } from '$lib/config';
    import { readContract, prepareWriteContract, writeContract, waitForTransaction, watchContractEvent } from '@wagmi/core';
    import { onMount } from 'svelte';
    import { connected, signerAddress } from 'svelte-wagmi';
    import { ethers } from 'ethers';

    let finishedGames=[]
    let nonFinishedGames=[]
    let showFinishBetModal = false

    onMount(() => {
        update();
        setInterval(update, 5000);
    })

    const update = async() => {
        if ($connected) {
            getFinishedGames()
        }
    }

    const getFinishedGames = async() => {
        const games = await readContract({
                address: contracts.coinFlip.address,
                abi: contracts.coinFlip.abi,
                functionName: 'getFinishedGames',
        });

        if (games.length > 0) {
            finishedGames = [];
            for (let i=0;i<games.length;i++) {
                let finished = {};
                finished.player = games[i]['playerWallet'];
                finished.betAmount = ethers.utils.formatEther(games[i]['betAmount']);
                finished.guess = Number(games[i]['guess']);
                finished.result = Number(games[i]['result']);
                finished.block = Number(games[i]['blockNumber']);
                finishedGames.push(finished);
            }
            finishedGames = finishedGames;
        } else {
            finishedGames = [];
        }
    }

    const getNonFinishedGames = async() => {
        try {
            const games = await readContract({
                    address: contracts.coinFlip.address,
                    abi: contracts.coinFlip.abi,
                    functionName: 'getNonFinishedGamesOfWallet',
                    args: [$signerAddress]
            });

            if (games.length > 0) {
                showFinishBetModal = true;
                for (let i=0;i<games.length;i++) {
                    nonFinishedGames[i] = Number(games[i]);
                }
            } else {
                nonFinishedGames = [];
                showFinishBetModal = false;
            }
            nonFinishedGames = nonFinishedGames;
        } catch (error) {}
    }


</script>
{finishedGames}
<div class="play mx-2 md:mx-96 p-0 md:p-12 mt-8 text-center rounded-md mb-64">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mb-12">
        <!-- Play -->
        <div class="innerBox px-12 py-20 rounded-md">
            <h1 class="bruno text-5xl text-white uppercase font-bold tracking-tightest">Play</h1>
            <h2 class="bruno text-2xl text-white mt-20 uppercase">Headz or Tailz?</h2>
            <div class="flex flex-cols mt-12 justify-between max-w-xs mx-auto">
                <button class="btn">Headz</button>
                <button class="btn">Tails</button>
            </div>
            <h3 class="bruno text-2xl text-white mt-16 uppercase tracking-tightest">Wager Amount</h3>
            <div class="mt-8">
                <input type="text" class="btn text-center hover:outline-none" value="24" />
            </div>
            <button class="btn mt-6">Approve</button>
        </div>

        <!-- Right -->
        <div class="innerBox p-12 rounded-md flex flex-col justify-between">
            <div class="mt-8">
                <img src={MiddlePlus} alt="Middle" class="w-64 mx-auto" />
            </div>
            <div class="play mx-1 rounded-md shadow-lg">
                <div class="flex flex-row justify-between">
                <ul class="text-left p-4 text-violet-400 text-lg">
                    <li>Your Balance:</li>
                    <li>House: </li>
                    <li>Max Bet: </li>
                    <li>vRF Fee: </li>
                    <li>Contract: </li>
                </ul>
                <img src={RoundPlus} class="w-32 h-32 m-6" alt="Plus+" />
                </div>
                <p class="text-white text-sm p-4 text-left">
                    There is a 2.5% fee to Purchase Chainlink VRF to make it completely randomized and fair with proof on the blockchain.
                </p>
            </div>
        </div>
    </div>

    <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead class="play">
            <tr class="p-4">
              <th>Player</th> 
              <th>Amount</th> 
              <th>Guess</th> 
              <th>Result</th> 
              <th>Verify</th> 
              <th>Block</th> 
            </tr>
          </thead> 
          <tbody>

          </tbody> 
        </table>
      </div>
      
      

</div>

<style>
    th {
        padding:24px 24px;
        color: #fff;
        font-family: 'Bruno Ace SC', cursive;
        font-size: 18px;
    }
    .play {
        background: linear-gradient(180deg, #2E3E53 0%, #62428C 100%);
        box-shadow: 0px 221px 89px rgba(0, 0, 0, 0.01), 0px 125px 75px rgba(0, 0, 0, 0.05), 0px 55px 55px rgba(0, 0, 0, 0.09), 0px 14px 30px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    }
    .innerBox {
        background: linear-gradient(180deg, #314056 0%, #643F8A 100%);
        box-shadow: 0px -50px 20px rgba(0, 0, 0, 0.01), 0px -28px 17px rgba(0, 0, 0, 0.05), 0px -13px 13px rgba(0, 0, 0, 0.09), 0px -3px 7px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    }
    .bruno {
        font-family: 'Bruno Ace SC', cursive;
    }
    .btn {
        background: linear-gradient(180deg, #38405D 0%, #643F8A 100%);
        box-shadow: -4px 18px 7px rgba(0, 0, 0, 0.01), -2px 10px 6px rgba(0, 0, 0, 0.05), -1px 4px 5px rgba(0, 0, 0, 0.09), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        width: 156px;
        height: 62px;
        border:#314056 2px solid;
        color:#fff;
        font-weight:bold;
        font-size:18px;
        font-family: 'Bruno Ace SC', cursive;
    }
</style>