console.log("hello")

function DiceRoll() {
    let dieOne = Math.floor(Math.random() * 12) + 1;
    let dieTwo = Math.floor(Math.random() * 12) + 1;
    return dieOne + dieTwo
}


document.write(DiceRoll())
