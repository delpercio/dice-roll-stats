console.log("hello")

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function dieRoll() {
    let dieOne = Math.floor(Math.random() * 6) + 1;
    let dieTwo = Math.floor(Math.random() * 6) + 1;
    return dieOne + dieTwo
}




for (i = 0; i < 999; i++) {
    let currentRoll = dieRoll()
    
    if (currentRoll === 0) {
        count[0]++
    }
    if (currentRoll === 1) {
        count[1]++
    }
    if (currentRoll === 2) {
        count[2]++
    }
    if (currentRoll === 3) {
        count[3]++
    }
    if (currentRoll === 4) {
        count[4]++
    }
    if (currentRoll === 5) {
        count[5]++
    }
    if (currentRoll === 6) {
        count[6]++
    }
    if (currentRoll === 7) {
        count[7]++
    }
    if (currentRoll === 8) {
        count[8]++
    }
    if (currentRoll === 9) {
        count[9]++
    }
    if (currentRoll === 10) {
        count[10]++
    }
    if (currentRoll === 11) {
        count[11]++
    }
    if (currentRoll === 12) {
        count[12]++
    }


}

let newDiv1 = document.createElement('div');
newDiv1.innerHTML = "2: " + count[2]
document.body.appendChild(newDiv1);

let newDiv2 = document.createElement('div');
newDiv2.innerHTML = "3: " + count[3]
document.body.appendChild(newDiv2);

let newDiv3 = document.createElement('div');
newDiv3.innerHTML = "4: " + count[4]
document.body.appendChild(newDiv3);

let newDiv4 = document.createElement('div');
newDiv4.innerHTML = "5: " + count[5]
document.body.appendChild(newDiv4);

let newDiv5 = document.createElement('div');
newDiv5.innerHTML = "6: " + count[6]
document.body.appendChild(newDiv5);

let newDiv6 = document.createElement('div');
newDiv6.innerHTML = "7: " + count[7]
document.body.appendChild(newDiv6);

let newDiv7 = document.createElement('div');
newDiv7.innerHTML = "8: " + count[8]
document.body.appendChild(newDiv7);

let newDiv8 = document.createElement('div');
newDiv8.innerHTML = "9: " + count[9]
document.body.appendChild(newDiv8);

let newDiv9 = document.createElement('div');
newDiv9.innerHTML = "10: " + count[10]
document.body.appendChild(newDiv9);

let newDiv10 = document.createElement('div');
newDiv10.innerHTML = "11: " + count[11]
document.body.appendChild(newDiv10);

let newDiv11 = document.createElement('div');
newDiv11.innerHTML = "12: " + count[12]
document.body.appendChild(newDiv11);



