<script lang="ts">
  import Commits from "components/Commits.svelte";
  import ViewCharacters from "components/ViewCharacters.svelte";
  import Cherector from "components/Cherector.svelte";
  import Top from "components/TopPlayers.svelte";
  import ListServer from "components/ListServer.svelte";
</script>

<header>
  <a href="https://openbomber.ru/" class="logo"><h3>openbomber</h3></a>

  <p>[menu]</p>

  <p>[links]</p>
</header>
<main>
  <ListServer />

  <Top />
  <Commits />
  <ViewCharacters />
</main>
<div class="bg-img" />

<style>
  main {
    background-color: #404040d0;
    /* #545c73b5; */
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    /* background-color: #00a33e23; */
  }

  :root {
    font-family: "PPixel";
  }

  .logo {
    color: #14d05c;
  }

  header {
    position: sticky;
    display: flex;
    z-index: 10;
    justify-content: space-around;
    /* padding: 20px 10px; */
    /* width: 100%; */
    /* border: 1px solid black; */
    align-items: center;
    height: 60px;
    top: 0;
    background-color: #545c73;
    outline: 2px solid #171920;
  }
</style>
