

app.component('tiles', { 
    props: ['tiles'],
    emits: ['tile-pressed', 'game-restart'],
    // props: {
    //     prop1: String, 
    //     prop2: Number, 
    // }, // props

    data () {
        return {

            tiles_press: [],
            restart: false


        }
    },
    

    methods: {

        emitTiles(tile, index) {

            this.$emit('tile-pressed', tile)
            this.tiles_press.push(tile + index)
            console.log('hi')
            
        },

        isPressed (tile ,index) {

            console.log(this.tiles_press)
            return this.tiles_press.includes(tile + index)


        }
        ,
        restartGame() {
            
            this.restart = true
            this.tiles_press = []
            this.$emit('game-restart');
            

            
        }



    },
    
    
    template: `
    
        <div class="card-stack" >
            <span v-for="(tile, index) in tiles" :key='index' class="stacked-card">
                <button class="btn btn-outline-dark" @click='emitTiles(tile, index)' v-if='!isPressed(tile, index)' ><img :src="'tile_img/' + tile + '.png' " alt="" :image="tile" width="20" height="20"></button>
            </span>
        </div>
        <br>
        <button @click="restartGame" class='btn btn-primary ms-2'>Restart Game</button>
  
        

    
    `
});





// component must be declared before app.mount(...)






