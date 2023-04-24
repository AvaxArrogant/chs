<script>
  import "../app.postcss";
  import navLogo from '$lib/assets/navLogo.png'
  import RoundPlus from '$lib/assets/RoundPlus.png'
  import { configureWagmi, wagmiLoaded } from 'svelte-wagmi'
  import { web3Modal, connected, connection, disconnectWagmi, signerAddress } from 'svelte-wagmi'
  import { onMount } from 'svelte'
  import { abbrAddress } from '$lib/utils'

  onMount(async () => {
		await configureWagmi({
			walletconnect: true,
			walletconnectProjectID: "TheGridProject",
		})
	})

  const connect = async () => {
    if(!$connected) $web3Modal.openModal()
  }

  const disconnect = async() => {
    disconnectWagmi()
  }
</script>

<nav class="navigation flex justify-between shadow-xl pt-8 md:pt-4 px-2 md:px-16 pb-2">
  <div>
    <img src={navLogo} alt="Logo" />
  </div>
  <div>
    <a href="/play"><img src={RoundPlus} alt="Logo" class="w-16" /></a>
  </div>
  <div>
    {#if !$connected}
    <button on:click={connect} class="connectBtn p-4">Connect</button>
    {:else}
    <button on:click={disconnect} class="connectBtn p-4">{abbrAddress($signerAddress)}</button>
    {/if}
  </div>
</nav>

<main>
<slot />
</main>

<footer class="fixed w-full bottom-0 p-12 bg-black">
  <img src={navLogo} alt="Logo" class="mx-auto" />
</footer>

<style>
  .navigation {
    background: rgb(67,60,112);
    background: linear-gradient(90deg, #314868 0%, #5E458C 100%);
    background-attachment: fixed;
  }

  .grad {
    box-sizing: border-box;
    background: radial-gradient(343.89% 124.16% at 50.81% 95.21%, #663E8B 0.53%, #52518B 26.87%, #3C5C8B 51.8%, #43474D 95.12%);
    padding:12px;
  }
  .connectBtn {
        background: linear-gradient(180deg, #38405D 0%, #643F8A 100%);
        box-shadow: -4px 18px 7px rgba(0, 0, 0, 0.01), -2px 10px 6px rgba(0, 0, 0, 0.05), -1px 4px 5px rgba(0, 0, 0, 0.09), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        border:#314056 2px solid;
        color:#fff;
        font-weight:bold;
        font-size:16px;
        font-family: 'Bruno Ace SC', cursive;
    }
</style>