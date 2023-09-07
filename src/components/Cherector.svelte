<script lang="ts">
    export let laer = 0;
    export let max:string = "16px" ;
    // max -51 / min 0
</script>

<div class="sprite"  style="--laer: {laer}; --max:{max}">
    <div class="sprite-container">
        <div class="sprite-image">
        </div>
    </div>
</div>


<style>
    .sprite{

        --correct: calc( 10 );
        --min: var(--max);
        --max-width: calc( var(--min) * 12 );
    

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
        left: -1px;
        top: 0;

        height: var(--min); ; 
        width: var(--min);; 
        
        background: 
        url('../assets/images/characters.png') 
        calc( var(--min) * 11 ) /* pose */
        calc( var(--min) * var(--laer) * -1 );  /* cherecter */
        background-size: var(--max-width); 
    
        image-rendering: pixelated;
    }
</style>