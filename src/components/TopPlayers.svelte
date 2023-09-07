<script>
    import Cherector from "./Cherector.svelte";

    import { list } from './hardcode'

    let minCount = 0
    let maxCount = 5

    var resultList = []

    const winFn = ()=>{ resultList = list.sort((a, b) => a.win > b.win ? -1 : 1).slice(minCount, maxCount); }
    const killFn = ()=>{resultList = list.sort((a, b) => a.kill > b.kill ? -1 : 1).slice(minCount, maxCount);}
    const deathFn = ()=> {resultList = list.sort((a, b) => a.death > b.death ? -1 : 1).slice(minCount, maxCount); }
    winFn()
</script>

<section class="top">
    <ul class="list">
        {#if resultList.length != 0 } <!-- replace to {#await} -->
            {#each resultList as item, index}
                <ol class="list-item" >
                    <h1 class="list-item_number">{index + 1}</h1>
                    <div class="card">
                        <h3 class="card_info-name">{item.plaer.name}</h3>
                        <div class="card_info">
                            <Cherector laer={item.plaer.skin} max='50px'/>
                            <p class="card_info-text">
                                <span>win</span>
                                <span>{item.win}</span>
                            </p>
                            <p class="card_info-text">
                                <span>kill</span>
                                <span>{item.kill}</span>
                            </p>
                            <p class="card_info-text">
                                <span>death</span>
                                <span>{item.death}</span>
                            </p>
                        </div>
                    </div>
                </ol>
            {/each}
        {:else } <!-- mb do not delet this moment -->
            {#each [1,2,3,4,5] as item, index}
                <ol class="list-item" >
                    <h1 class="list-item_number">{index + 1}</h1>
                    <div class="card">
                        <h3 class="card_info-name">Waiting ...</h3>
                        <div class="card_info">
                            <Cherector laer={0} max='50px'/>
                            <p class="card_info-text">
                                Waiting ...
                            </p>
                        </div>
                    </div>
                </ol>
            {/each}
        {/if}
    </ul>
    <div class="control">
        <button on:click={()=>{ winFn() }}>win</button>
        <button on:click={()=>{ killFn() }}>kill</button>
        <button on:click={()=>{ deathFn() }}>death</button>
    </div>
</section>

<style>
    .control{
        display: flex;
        justify-content: space-between;
    }
    .top{
        align-items: center;
        width: 375px;
    }

    button{
        font-family: 'PPixel';
        border: 3px solid #141d3b;
        background-color: #243246;
        color: white;
        padding: 6px;
    }

    button:hover{
        font-family: 'PPixel';
        border: 3px solid #141d3b;
        background-color: #415f92;
        color: white;
        padding: 6px;
    }

    .list{
        border: 2px solid black;
        margin: 0;
        padding: 0;
        /* width: 100%; */
    }
    .list-item{
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        text-align: center;
        border-top: 2px solid black;
        height: 100px;
    }
    .list-item:first-child{
        border: 0;
    }
    .list-item h1{
        width: 90px;
    }
    .card{
        position: relative;
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: start;
        max-width: 300px;
        height: 90px;
        border-left: 2px solid black;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: none;
    }
    .card_info{
        margin-top: 20px;
        display: flex;
        gap: 5px;
        align-items: center;
        text-align: center;
        
    }
    .card_info-name{
        display: block;
        width: max-content;
        position: absolute;
        margin: 0;
    }
    .card_info-text{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card_info span:last-child{
        margin-top: 5px;
    }

</style>