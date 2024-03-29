/*
### Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

#### Bonus:
- al click su una thumb, visualizzare in grande l'immagine corrispondente
- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
#### Consigli del giorno:
- Riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- Il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe 
*/

const {createApp} = Vue

const app = createApp({
    data(){
        return {
            pictures,
            currentIndex: 0,
            autoplay: null
        }  
    },
    computed: {
        isFirstIndex(){
            return this.currentIndex === 0
        },
        isLastIndex(){
            return this.currentIndex === this.pictures.length -1
        }
    },
    methods: {
        setCurrentIndex(target){
            if(target === "next") {
                if (this.isLastIndex) this.currentIndex = 0
                else this.currentIndex++
            } else {
                if(this.isFirstIndex) this.currentIndex = this.pictures.length -1
                else this.currentIndex--
            }
        },
        stopAutoplay(){
            clearInterval(this.autoplay)
        },
        startAutoplay(){
            this.autoplay = setInterval (() => {
                this.setCurrentIndex("next")
            }, 3000)
        }
    },
    mounted(){
        this.startAutoplay()
    } 
})


app.mount('#root')