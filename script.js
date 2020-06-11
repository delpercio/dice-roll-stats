console.log("hello")

let count =[0,0,0,0,0,0,0,0,0,0,0,0,0]

function DiceRoll() {
    let dieOne = Math.floor(Math.random() * 6) + 1;
    let dieTwo = Math.floor(Math.random() * 6) + 1;
    return dieOne + dieTwo
}





for (i = 0; i < 999; i++){
    document.write(DiceRoll()+"<br>")
    


}