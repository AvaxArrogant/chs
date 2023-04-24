<script>
    import MiddlePlus from '$lib/assets/MiddlePlus.png'
</script>

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
            <div class="mt-16">
                <img src={MiddlePlus} alt="Middle" class="w-64 mx-auto" />
            </div>
            <div>
                Stats Box
            </div>
        </div>
    </div>


</div>

<style>
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