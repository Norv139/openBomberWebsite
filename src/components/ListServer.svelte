<script>
  import Cherector from "./Cherector.svelte";

  import { topServers } from "../utils/hardCode";

  let minCount = 0;
  let maxCount = 5;
  // need fn for change min & max -> min+=5 & max+=5

  let promisList = new Promise((resolve, reject) => {
    // harcode -> fetch data from api
    setTimeout(() => {
      resolve(topServers);
    }, 1000);
  });
</script>

<section class="top">
  <h2>Top servers</h2>
  <ul class="list">
    {#await promisList}
      {#each Array(5) as server, index}
        <ol class="list-item">
          <h1 class="list-item_number">{index + 1}</h1>
          <div class="card">
            <h3 class="card_info-name">Loading...</h3>
            <div class="card_info">online: ?</div>
          </div>
        </ol>
      {/each}
    {:then resultList}
      {#each resultList as server, index}
        <ol class="list-item">
          <h1 class="list-item_number">{index + 1}</h1>
          <div class="card">
            <h3 class="card_info-name">{server.name}</h3>
            <div class="card_info">
              <p class="card_info-text">
                online: {server.online}
              </p>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="card_info-text"> conncet </a>
            </div>
          </div>
        </ol>
      {/each}
    {/await}
  </ul>
  <div class="control">
    <!-- <button on:click={()=>{ }}>win</button>
        <button on:click={()=>{ }}>kill</button>
        <button on:click={()=>{ }}>death</button> -->
  </div>
</section>

<style>
  .control {
    display: flex;
    justify-content: space-between;
  }
  .top {
    align-items: center;
    width: 400px;
  }
  button {
    font-family: "PPixel";
    border: 3px solid #141d3b;
    background-color: #243246;
    color: white;
    padding: 6px;
  }
  button:hover {
    font-family: "PPixel";
    border: 3px solid #141d3b;
    background-color: #415f92;
    color: white;
    padding: 6px;
  }
  .list {
    border: 2px solid black;
    margin: 0;
    padding: 0;
    /* width: 100%; */
  }
  .list-item {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    text-align: center;
    border-top: 2px solid black;
    height: 100px;
  }
  .list-item:first-child {
    border: 0;
  }
  .list-item h1 {
    width: 90px;
  }
  .card {
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
  .card_info {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
    text-align: start;
  }
  .card_info-name {
    display: block;
    width: max-content;
    position: absolute;
    margin: 0;
  }
  .card_info-text {
    margin: 0;
    align-items: start;
    text-align: start;
  }
  .card_info span:last-child {
    margin-top: 5px;
  }
  a {
    color: #14d05c;
  }
</style>
