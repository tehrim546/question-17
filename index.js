"use strict";
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList = [
    "Meerab",
    "Sakina",
    "Anabia",
];
// solution question 16
// informing people you found a bigger dinner table
for (let guest of guestList) {
    console.log(`Hello,${guest} we found a bigger dinner table,`);
}
//add a new guest to the beginning of the array;
let newGuestAtBeginning = "Faheem";
guestList.unshift(newGuestAtBeginning);
console.log(guestList);
//add new guest in the middle of the array use 
let newGuestInMiddle = "Zahra";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
//console.log(guestList)
//print a new set of invitation to each
console.log("New set of invitation messages,");
for (let guest of guestList) {
    console.log(`Dear${guest} you are invited to dinner.`);
}
