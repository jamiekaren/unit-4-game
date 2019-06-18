console.log("Working...");

// variables for audio on page

let themeMusic = new Audio("assets/sounds/star-wars-theme.mp3");
let soloBite = new Audio("assets/sounds/solo-bite.mp3");
let lukeBite = new Audio("assets/sounds/luke-bite.mp3");
let trooperBite = new Audio("assets/sounds/droidsound02.mp3");
let greedoBite = new Audio("");

console.log (lukeBite);

// to play epic fight music with button clicks

    $("#theme-button").on("click", function () {
        themeMusic.play();
        console.log('Playing theme music');
    });
    $("#pause-button").on("click", function () {
        themeMusic.pause();
    });

//Create some objects to store characters and their stats

let solo = {
    name: 'Han Solo',
    soloSound: $("#solo").on("click", function () {
        soloBite.play()
        console.log('Sound bite works!');
        }),
    health: 2000,
    attack: 100,
    counter: 400,
    choosenSolo:  selectChar(solo, skyWalker || stormTrooper || greedo),
};

let skyWalker = {
    name: 'Luke Skywalker',
    lukeSound: $("#luke").on("click", function () {
        lukeBite.play()
        }),
    health: 3000,
    attack: 250,
    counter: 300,
};

let stormTrooper = {
    name: 'Stormtrooper',
    trooperSound: $("#trooper").on("click", function () {
        trooperBite.play()
        }),
    health: 500,
    attack: 100,
    counter: 50,
};

let greedo = {
    name: 'Greedo',
    greedoSound: $("#greedo").on("click", function () {
        greedoBite.play()
        }),
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

let gameStart = {
    selectChar: function (user, enemy) {
        $("button").on('click').css("border", "green").addClass("user-chosen");
        $("button").on('click').css("border", "red").addClass("enemy-chosen");
    },
    moveChar: function (user, enemy) {
        if (user == true )
            $(user).append("#user-character");

        else if (enemy == true)
            $(enemy).append("#enemy-character")
    },

};

//if chosen 1st, move to user-character 



//When character is selected, move remaining images to left column
//Also move selected character to left of screen (characters start in the middle)
//Create on click event for "Fight" button 

