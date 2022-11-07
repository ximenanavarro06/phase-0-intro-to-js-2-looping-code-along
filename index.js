// Code your solutions in this file
function writeCards(names, event) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        console.log(thankYouCards(`Thank you, ${names[i]} for the wonderful ${event} gift!`))
    }
    return thankYouCards
}
