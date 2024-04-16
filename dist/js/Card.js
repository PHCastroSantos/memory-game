var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var uniqueCards = [
    { img: "01.png", description: "Card 01", id: "Card1", audio: "./audio/galo-cego.mp3" },
    { img: "02.jpg", description: "Card 02", id: "Card2", audio: "./audio/serjao.mp3" },
    { img: "03.jpg", description: "Card 03", id: "Card3", audio: "./audio/bem-loco.mp3" },
    { img: "04.png", description: "Card 04", id: "Card4", audio: "./audio/que-onda.mp3" },
    { img: "05.png", description: "Card 05", id: "Card5", audio: "./audio/eita.mp3" },
    { img: "06.jpg", description: "Card 06", id: "Card6", audio: "./audio/quero-cafe.mp3" },
    { img: "07.jpg", description: "Card 07", id: "Card7", audio: "./audio/carreta-furacao.mp3" },
    { img: "08.png", description: "Card 08", id: "Card8", audio: "./audio/aiai.mp3" }
];
var cardsOriginais = [];
function shuffleNumber(min, max) {
    var n = Math.random() * (max - min + 1) + min;
    return parseInt(n.toString());
}
uniqueCards.forEach(function (card) {
    cardsOriginais.push(__assign({}, card));
    cardsOriginais.push(__assign({}, card));
});
var cards = [];
var len = cardsOriginais.length;
while (cards.length < len) {
    var shuffled = shuffleNumber(0, cardsOriginais.length - 1);
    var item = cardsOriginais.splice(shuffled, 1);
    cards.push(item[0]);
}
export { cards };
