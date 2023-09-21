<script lang="ts">
  import Cherector from "./Cherector.svelte";
  import { listOfPlaers } from "utils/hardCode";

  let typeFilter = "win"; // harcode type for sort fn
  let minCount = 0;
  let maxCount = 5;
  // need fn for change min & max -> min+=5 & max+=5

  $: sortFn = (anyList: typeof listOfPlaers) => {
    // mb not good relise \ rewrite
    switch (typeFilter) {
      case "win":
        // @ts-ignore
        return anyList
          .sort((a, b) => (a.win > b.win ? -1 : 1))
          .slice(minCount, maxCount);
      case "kill":
        // @ts-ignore
        return anyList
          .sort((a, b) => (a.kill > b.kill ? -1 : 1))
          .slice(minCount, maxCount);
      case "death":
        // @ts-ignore
        return anyList
          .sort((a, b) => (a.death > b.death ? -1 : 1))
          .slice(minCount, maxCount);
      default:
        return anyList.slice(minCount, maxCount);
    }
  };

  // harcode -> fetch data from api
  let promisList = new Promise<typeof listOfPlaers>((resolve, reject) => {
    setTimeout(() => {
      resolve(listOfPlaers);
    }, 500);
  });
</script>

<section class="top">
  <h2>Top plaers</h2>
  <ul class="list">
    {#await promisList}
      {#each Array(5) as item, index}
        <ol class="list-item">
          <h1 class="list-item_number">{index + 1}</h1>
          <div class="card">
            <h3 class="card_info-name">Waiting ...</h3>
            <div class="card_info">
              <Cherector laer={0} max="50px" />
              <p class="card_info-text">Waiting ...</p>
            </div>
          </div>
        </ol>
      {/each}
    {:then resultList}
      {#each sortFn(resultList) as item, index}
        <ol class="list-item">
          <h1 class="list-item_number">{index + 1}</h1>
          <div class="card">
            <h3 class="card_info-name">{item.plaer.name}</h3>
            <div class="card_info">
              <Cherector laer={item.plaer.skin} max="50px" />
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
    {/await}
  </ul>
  <div class="control">
    <button
      on:click={() => {
        typeFilter = "win";
      }}>win</button
    >
    <button
      on:click={() => {
        typeFilter = "kill";
      }}>kill</button
    >
    <button
      on:click={() => {
        typeFilter = "death";
      }}>death</button
    >
  </div>
</section>

<style>
  .control {
    margin-top: 10px;
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
    margin-top: 20px;
    display: flex;
    gap: 5px;
    align-items: center;
    text-align: center;
  }
  .card_info-name {
    display: block;
    width: max-content;
    position: absolute;
    margin: 0;
  }
  .card_info-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card_info span:last-child {
    margin-top: 5px;
  }
</style>
