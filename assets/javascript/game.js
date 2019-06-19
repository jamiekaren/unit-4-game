console.log("Working...");


// variables for audio on page

let themeMusic = new Audio("assets/sounds/star-wars-theme.mp3");
let soloBite = new Audio("assets/sounds/solo-bite.mp3");
let lukeBite = new Audio("assets/sounds/luke-bite.mp3");
let trooperBite = new Audio("assets/sounds/droidsound02.mp3");
let greedoBite = new Audio("assets/sounds/greedo-2.mp3");
let r2Bite = new Audio("assets/sounds/R2D2-sound01.mp3");
let fightBite = new Audio("assets/sounds/light-saber.mp3");

// to play epic fight music with button clicks

$("#theme-button").on("click", function () {
    themeMusic.play();
    console.log('Playing theme music');
});
$("#pause-button").on("click", function () {
    themeMusic.pause();
});

//Check all my characters are in fighting condition
console.log(greedo.name + greedo.health, solo.name + solo.health, skyWalker.name + skyWalker.health, stormTrooper.name + stormTrooper.health, droid.name + " health:" + droid.health);

//Add name and health stats to character html
$("#solo").prepend(solo.name + "<br>" + "Health: " + solo.health);
$("#luke").prepend(skyWalker.name + "<br>" + "Health: " + skyWalker.health);
$("#droid").prepend(droid.name + "<br>" + "Health: " + droid.health);
$("#trooper").prepend(stormTrooper.name + "<br>" + "Health: " + stormTrooper.health);
$("#greedo").prepend(greedo.name + "<br>" + "Health: " + greedo.health);


//move character once selected 

//    function moveChar (char, area) {
//     $(char).on("click", function () {
//         $(char).prependTo(area);
//     });
// };

// select your character

let userChar = 'user';
let enemyChar = 'enemy';

console.log(userChar);
console.log(enemyChar);



// $("#characters-area").find("#solo").click(function () {
//     userChar = ($(this).attr('id'));
//     console.log('Your Character is ' + userChar);
//     $("#solo").prependTo("#user-character");
// });

// $("#characters-area").find("#luke").click(function () {
//     userChar = ($(this).attr('id'));
//     console.log('Your Character is ' + userChar);
//     $("#luke").prependTo("#user-character");
// });

// $("#characters-area").find("#droid").click(function () {
//     userChar = ($(this).attr('id'));
//     console.log('Your Character is ' + userChar);
//     $("#droid").prependTo("#user-character");
// });

// $("#characters-area").find("#trooper").click(function () {
//     userChar = ($(this).attr('id'));
//     console.log('Your Character is ' + userChar);
//     $("#trooper").prependTo("#enemy-character");
// });

// $("#characters-area").find("#greedo").click(function () {
//     userChar = ($(this).attr('id'));
//     console.log('Your Character is ' + userChar);
//     $("#greedo").prependTo("#enemy-character");
// });

//Character that user selects
$("#characters-area").find("button").click(function () {

    if (userChar === 'user') {
        $(this).prependTo("#user-character");
         userChar = ($(this).attr('id'));
         console.log('Your Character is  ' + userChar);


    } else if (enemyChar === 'enemy') {
        enemyChar = ($(this).attr('id'));
        console.log('Your evil Enemy is your ' + enemyChar);
        $(this).prependTo("#enemy-character");
    }

});

// moveChar();
// moveEnemy();

// function hit(e, u) {
//     e.health - u.attack
// };



//attack button
$("#attack-button").on("click", function () {
    fightBite.play();
    console.log('Playing theme music');

});



// if (userChar === 'solo') {
//     moveChar ("#solo", "#user-character"); 
// } else ()



/*
when a character dies, they go to character heaven
Need to select object health property in user character div
and enemy char div
if health <= 0 then set button to hidden
*/

function heaven() {
    if (userDead == true)
        $("#user-character").hidden();
    else if (enemyDead = true)
        $("#enemy-character").remove("btn");
};


//Create some objects to store characters and their stats

let solo = {
    name: 'Han Solo',
    soloSound: $("#solo").on("click", function () {
        soloBite.play();
        console.log('Sound bite works!');
    }),
    health: 2000,
    attack: 50,
    counter: 200,
};

let droid = {

    name: 'R2-D2',
    r2Sound: $("#droid").on("click", function () {
        r2Bite.play();
        console.log('Sound bite works!');
    }),
    health: 2000,
    attack: 50,
    counter: 200,
};


let skyWalker = {

    name: 'Luke Skywalker',
    lukeSound: $("#luke").on("click", function () {
        lukeBite.play();
        console.log('Sound bite works!');
    }),
    health: 3000,
    attack: 100,
    counter: 50,
};


let stormTrooper = {

    name: 'Stormtrooper',
    trooperSound: $("#trooper").on("click", function () {
        trooperBite.play();
    }),
    health: 500,
    attack: 20,
    counter: 10,
};

let greedo = {

    name: 'Greedo',
    greedoSound: $("#greedo").on("click", function () {
        greedoBite.play();
    }),
    health: 5000,
    attack: 100,
    counter: 50,
};



//if chosen 1st, move to user-character 



//When character is selected, move remaining images to left column
//Also move selected character to left of screen (characters start in the middle)
//Create on click event for "Fight" button 

