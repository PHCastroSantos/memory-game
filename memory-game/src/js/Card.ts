interface Card {
    id: string;
    description: string;
    img: string;
}

const uniqueCards: Card[] = [
    {img: "01.png", description:"Card 01", id:"Card1"},
    {img: "02.jpg", description:"Card 02", id:"Card2"},
    {img: "03.jpg", description:"Card 03", id:"Card3"},
    {img: "04.png", description:"Card 04", id:"Card4"},
    {img: "05.png", description:"Card 05", id:"Card5"},
    {img: "06.jpg", description:"Card 06", id:"Card6"},
    {img: "07.jpg", description:"Card 07", id:"Card7"},
    {img: "08.png", description:"Card 08", id:"Card8"}
]

const cardOriginais: Card[] = []

cardOriginais.push(uniqueCards[0])
cardOriginais.push(uniqueCards[0])

export {cardOriginais}

