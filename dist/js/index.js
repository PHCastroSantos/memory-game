import { cards } from "./Card.js";
import { Game } from "./Game.js";
var gameDOM = document.querySelector('[data-game]');
var game = new Game(gameDOM, cards);
game.init();
console.log(cards);
