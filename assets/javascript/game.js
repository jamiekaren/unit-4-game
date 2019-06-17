console.log("Working...");

//Fight game music
// let pageAudio = document.createElement("audio");
// pageAudio.setAttribute("src", "assets\javascript\star-wars-theme.mp3");

let themeMusic = new Audio("assets/sounds/star-wars-theme.mp3");

let soloBite = new Audio("assets/sounds/solo-bite.mp3");


let gameMusic = function () {
    $(".theme-button").on("click", function () {
        music.play();
    });
    $(".pause-button").on("click", function () {
        music.pause();
    });
 
};

//Create some objects to store characters and their stats


let vader = {
    name: 'Darth Vader',
    health: 5000,
    attack: 300,
    counter: 100,
};

let solo = {
    name: 'Han Solo',
    soloSound: $("#solo").on("click", function () {
        soloBite.play()
        }),
    health: 2000,
    attack: 100,
    counter: 400,
};

let skyWalker = {
    name: 'Luke Skywalker',
    health: 3000,
    attack: 250,
    counter: 300,
};

let stormTrooper = {
    name: 'Stormtrooper',
    health: 500,
    attack: 100,
    counter: 50,
};


//Check all my characters are in fighting condition
console.log(vader.name + vader.health, solo.name + solo.health, skyWalker.name + skyWalker.health, stormTrooper.name + stormTrooper.health);


//have border of character change color on hover or select

// document.getElementById(solo).onclick = function () {
//     console.log(solo);
// };

// let gameStart = {
//     selectChar: function (user, enemy) {
//         $("image").on('click').css("border", "blue").addClass("user-chosen");
//         $("image").on('click').css("border", "red").addClass("enemy-chosen");
//     },
//     moveChar: function (user, enemy) {
//         if (selectChar == true)
//             $(selectChar).append("#user-character");

//         else if (!selectChar)
//             $().append("#enemy-character")
//     },

// };



//When character is selected, move remaining images to left column
//Also move selected character to left of screen (characters start in the middle)
//Create on click event for "Fight" button 

