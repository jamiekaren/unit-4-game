console.log("Working...");

//Create some objects to store characters and their stats


let vader = {
    health = 5000,
    attack = 300,
    counter = 100,
};

let solo = {
    health = 2000,
    attack = 400,
    counter = 50,
};

let skyWalker = {
    health = 3000,
    attack = 250,
    counter = 300,
};

let stormTrooper = {
    health = 500,
    attack = 100,
    counter = 50,
};


//have border of character change color on hover or select

// document.getElementById(solo).onclick = function () {
//     console.log(solo);
// };

$("#solo").on('click').css("border", "blue");

//When character is selected, move remaining images to left column
//Also move selected character to left of screen (characters start in the middle)
//Create on click event for "Fight" button




