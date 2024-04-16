import { cards } from "./Card.js";
import { Game } from "./Game.js"

const gameDOM = document.querySelector('[data-game]') as HTMLDivElement

const game = new Game(gameDOM, cards)
game.init()

console.log(cards)