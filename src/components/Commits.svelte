<script lang="ts">
    import getData from "./utils/commits";
    let promise = getData()
</script>

<section>

    {#await promise}
        <h1>Waiting...</h1>
    {:then result} 
        <h1>Commits: {result.length}</h1>
        <ul class="listComits">
            {#each result as commit, index}
                <li> 
                    <a href={commit.author.url}>
                        <img 
                            src={commit.author.avatar_url} 
                            alt={commit.author.name} 
                        />
                    </a>
                    <a href={commit.html_url}>
                        <p>
                            {commit.message} 
                        </p>
                    </a>
                </li>
            {/each}
        </ul>
    {:catch}
        <h1>error</h1> 
    {/await}

</section>

<style>
    section{
        max-width: 400px;
    }

    .listComits{
        max-height: calc( ( 50px + 10px * 2 ) * 5);
        overflow: scroll;
    
        padding: 0;
        border: 2px solid black;
    }

    li{
        display: flex;
        max-height: 50px;
        padding: 10px 0 10px 0; 
        align-items: center;
        border-top: 2px solid black;
        
    }

    li:first-child{
        border-top: 0;
    }


    a {
        color: black;
        cursor: pointer;
        text-decoration: none;
    }

    a:hover{
        text-decoration: underline 3px;
    }

    img{
        /* 
        width: 20px;
        height: 20px; 
        */
        height: calc( 50px - 2px );
        margin: 1px 5px 1px 5px;
    }
</style>