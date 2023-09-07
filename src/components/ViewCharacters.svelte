<script lang="ts">
    $:laer = 0
</script>

<div class="sprite">
    <div class="sprite-container" style="--laer: {laer}">
        <div class="sprite-image">
        </div>
    </div>
    <p>{laer}</p>
    <button on:click={()=>{ laer == 51 ? laer = 0 : laer++}}>next</button>
    <button on:click={()=>{ laer == 0 ? laer = 51 : laer--}}>prev</button>
</div>


<style>
    :root{
        --min: 160px;
        --correct: calc( 10 );
        --max-width: calc( var(--min) * 12 );
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


    .sprite{

        align-items: center;
        text-align: center;
        height: max-content;
        width: var(--min)
    }

    .sprite-container {
        position: relative;
        display: flex;
        align-items: center; /*чтобы картинка была по центру*/
        height: var(--min);
        width: var(--min);
    }

    .sprite-image {
        position: absolute; 
        left: 0;
        top: 0;

        height: var(--min); 
        width: var(--min);
        
        background: 
            url('../assets/images/characters.png') 
            0px 
            calc( var(--min) * var(--laer) * -1 );  /*картинка со спрайтами с позицией в верхнем левом углу (0px 0px)*/
        background-size: var(--max-width); 
        animation: play 5s steps(12) infinite, step 15s linear infinite; 
        
        
        image-rendering: pixelated;
    }

    @keyframes play {
        100% {
            background-position: 
            var( --max-width )
            calc( var(--min) * var(--laer) * -1 ); 
        }
    }    
</style>