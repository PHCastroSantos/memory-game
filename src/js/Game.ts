import {Card} from './Card.js'

export class Game {
    constructor(private dom: HTMLDivElement, private cards: Card[]){

    }

    private firstCard: HTMLDivElement | null = null
    private secondCard: HTMLDivElement | null = null

    reset(){
        this.firstCard?.classList.remove("show")
        this.secondCard?.classList.remove("show")
        this.firstCard = null
        this.secondCard = null
    }

    setCorrectAttempt(){
        this.firstCard = null
        this.secondCard = null
    }

    addListeners() {
        Array.from(this.dom.querySelectorAll('[data-card]')).forEach( (card, i) => {
            card.addEventListener("click", e => {

                const target = e.currentTarget as HTMLDivElement

                const audio = target.querySelector('.card-audio') as HTMLAudioElement

                if (!audio.paused) {
                    audio.pause()
                    audio.currentTime = 0
                }

                audio.play()

                if(this.firstCard === e.currentTarget || 
                    this.secondCard === e.currentTarget ||
                    (e.currentTarget as HTMLDivElement).classList.contains("show")
                ) return

                if(!this.firstCard){
                    this.firstCard = e.currentTarget as HTMLDivElement
                    this.firstCard.classList.add("show")
                }

                else if(!this.secondCard) {
                    this.secondCard = e.currentTarget as HTMLDivElement
                    this.secondCard.classList.add("show")

                    if(this.firstCard.getAttribute("data-card") === this.secondCard.getAttribute("data-card")) {
                        this.setCorrectAttempt()
                    } else {
                        setTimeout(this.reset.bind(this), 2000)
                    }
                }
            })
        })
    }

    init() {

        this.dom.innerHTML = `
        ${this.cards.map( card => (
            `
            <div class="card" data-card="${card.id}">
                <img src="img/${card.img}" class="card-front" alt="${card.description}">
                <audio id="audio" src="${card.audio}" class="card-audio"></audio>
                <img src="img/back.png" class="card-back" alt="Jogo da memória dos memes">
            </div>
            
        `)).join('')}
        `
        this.addListeners()
    }
}