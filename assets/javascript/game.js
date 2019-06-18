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

// to play sound by for fighting button

// $("#attack-button").on("click", function () {
//     fightBite.play();
//     console.log('Playing theme music');
// });

//store whether a character is selected
let userChar = false;
let enemyChar = false;
let userDead = false;
let enemyDead = false;


//start game with some logical if statements...hopefully...

function gameStart() {
    $(".char").on('click', function () {
        if (userChar == false) {
            userChar = true;
            console.log(userChar + 'ready');
            $(".this").prependTo("#user-character");
        } else if (userChar == true && enemyChar == false) {
            enemyChar = true;
            $(".this").prependTo("#enemy-character");
        } else if (userChar == true && enemyChar == true) {
            alert('Attack the enemy!');
        }
    });

    //Make an attack button function


    /*minus user attack number from enemy
    then minus enemy counter-attack number from user
    then display user attack stats in sentence on document
    then add user attack number back into itself
    then display enemy attack stats in sentence on document
    if health <= to 0 , set dead variable to true, run heaven function

        */

    function attack() {
        $('#attack-button').click(function () {
            fightBite.play();
            console.log("It's on like donkey kong");

            if (!userDead) {
                
            }

        });

    };



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

    //Check all my characters are in fighting condition
    console.log(greedo.name + greedo.health, solo.name + solo.health, skyWalker.name + skyWalker.health, stormTrooper.name + stormTrooper.health, droid.name + " health:" + droid.health);

    //Add name and health stats to character html
    $("#solo").prepend(solo.name + "<br>" + "Health: " + solo.health);
    $("#luke").prepend(skyWalker.name + "<br>" + "Health: " + skyWalker.health);
    $("#droid").prepend(droid.name + "<br>" + "Health: " + droid.health);
    $("#trooper").prepend(stormTrooper.name + "<br>" + "Health: " + stormTrooper.health);
    $("#greedo").prepend(greedo.name + "<br>" + "Health: " + greedo.health);

//move character function

// greedo.health = 0;

// console.log(greedo.health);

// function moveChar (char, area) {
//     $(char).on("click", function () {
//         $(char).prependTo(area);
//     });
// };








// moveChar ("#luke", "#user-character");
// moveChar ("#droid", "#user-character");
// moveChar ("#solo", "#user-character");
// moveChar ("#trooper", "#enemy-character");
// moveChar ("#greedo", "#enemy-character");



//if chosen 1st, move to user-character 



//When character is selected, move remaining images to left column
//Also move selected character to left of screen (characters start in the middle)
//Create on click event for "Fight" button 

