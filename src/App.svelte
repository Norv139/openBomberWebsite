<script lang="ts">
  import './styles/fonts.css';

  import Commits from './components/Commits.svelte';
  import ViewCharacters from './components/ViewCharacters.svelte';
  import Cherector from './components/Cherector.svelte';
  import Deadpool from './components/TopPlayers.svelte';
</script>

<header>
  <a href="https://openbomber.ru/" class="logo"><h3>openbomber</h3></a>

  <p>[menu]</p> 
  
  <p>[links]</p> 
</header>
<main>
  <ViewCharacters />
  <Deadpool/>
  <Commits />
</main>

<style>

  :root{
    font-family: 'PPixel';
  }

  .logo{
    color: #14d05c;
  }

  header{
    position:sticky;
    display: flex;
    z-index: 10;
    justify-content: space-around;
    /* padding: 20px 10px; */
    /* width: 100%; */
    /* border: 1px solid black; */
    align-items: center;
  }

  main{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

</style>