console.log("hello")
//inital array to represent total number of potential dice roll outcomes
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]



//So i wrote this in here because the rubric is a bit vague but here is a function for 1 - 6 sided die roll.
function oneRoll() {
    let theRoll = Math.floor(Math.random() * 6) + 1;
    return theRoll
}
console.log(oneRoll())



//This adds the dice roll of two 6 sided die and returns the result
function dieRoll() {
    let dieOne = Math.floor(Math.random() * 6) + 1;
    let dieTwo = Math.floor(Math.random() * 6) + 1;
    return dieOne + dieTwo
}



//Loop runs 'dieRoll' 1000 times and tracks the the results, results are stored in the inital array
for (i = 0; i < 999; i++) {
    let currentRoll = dieRoll()

    if (currentRoll === 2) {
        count[0]++
    }
    if (currentRoll === 3) {
        count[1]++
    }
    if (currentRoll === 4) {
        count[2]++
    }
    if (currentRoll === 5) {
        count[3]++
    }
    if (currentRoll === 6) {
        count[4]++
    }
    if (currentRoll === 7) {
        count[5]++
    }
    if (currentRoll === 8) {
        count[6]++
    }
    if (currentRoll === 9) {
        count[7]++
    }
    if (currentRoll === 10) {
        count[8]++
    }
    if (currentRoll === 11) {
        count[9]++
    }
    if (currentRoll === 12) {
        count[10]++
    }
    
    


}


//Prints the array into chart, I still need to query selector to adjust the css width based on the result of the rolls

let newDiv1 = document.createElement('div');
newDiv1.innerHTML = "2: " + count[0];
newDiv1.id = "div1"; newDiv1.className = "theBars"
newDiv1.style.width = count[0] + "px"
document.getElementById('container').appendChild(newDiv1);


let newDiv2 = document.createElement('div');
newDiv2.innerHTML = "3: " + count[1];
newDiv2.id = "div2"; newDiv2.className = "theBars"
newDiv2.style.width = count[1] + "px"
document.getElementById('container').appendChild(newDiv2);

let newDiv3 = document.createElement('div');
newDiv3.innerHTML = "4: " + count[2];
newDiv3.id = "div3"; newDiv3.className = "theBars"
newDiv3.style.width = count[2] + "px"

document.getElementById('container').appendChild(newDiv3);

let newDiv4 = document.createElement('div');
newDiv4.innerHTML = "5: " + count[3];
newDiv4.id = "div4"; newDiv4.className = "theBars"
newDiv4.style.width = count[3] + "px"
document.getElementById('container').appendChild(newDiv4);

let newDiv5 = document.createElement('div');
newDiv5.innerHTML = "6: " + count[4];
newDiv5.id = "div5"; newDiv5.className = "theBars"
newDiv5.style.width = count[4] + "px"
document.getElementById('container').appendChild(newDiv5);

let newDiv6 = document.createElement('div');
newDiv6.innerHTML = "7: " + count[5];
newDiv6.id = "div6"; newDiv6.className = "theBars"
newDiv6.style.width = count[5] + "px"
document.getElementById('container').appendChild(newDiv6);

let newDiv7 = document.createElement('div');
newDiv7.innerHTML = "8: " + count[6];
newDiv7.id = "div1"; newDiv7.className = "theBars"
newDiv7.style.width = count[7] + "px"
document.getElementById('container').appendChild(newDiv7);

let newDiv8 = document.createElement('div');
newDiv8.innerHTML = "9: " + count[7];
newDiv8.id = "div8"; newDiv8.className = "theBars"
newDiv8.style.width = count[7] + "px"
document.getElementById('container').appendChild(newDiv8);

let newDiv9 = document.createElement('div');
newDiv9.innerHTML = "10: " + count[8];
newDiv9.id = "div9"; newDiv9.className = "theBars"
newDiv9.style.width = count[8] + "px"
document.getElementById('container').appendChild(newDiv9);

let newDiv10 = document.createElement('div');
newDiv10.innerHTML = "11: " + count[9];
newDiv10.id = "div10"; newDiv10.className = "theBars"
newDiv10.style.width = count[9] + "px"
document.getElementById('container').appendChild(newDiv10);

let newDiv11 = document.createElement('div');
newDiv11.innerHTML = "12: " + count[10];
newDiv11.id = "div11"; newDiv11.className = "theBars"
newDiv11.style.width = count[10] + "px"
document.getElementById('container').appendChild(newDiv11);



