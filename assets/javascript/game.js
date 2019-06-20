console.log("Working...");


// variables for audio on page

let themeMusic = new Audio("assets/sounds/star-wars-theme.mp3");
let fightBite = new Audio("assets/sounds/light-saber.mp3");

// to play epic fight music with button clicks

$("#theme-button").on("click", function () {
    themeMusic.play();
    console.log('Playing theme music');
});
$("#pause-button").on("click", function () {
    themeMusic.pause();
});



//Create some objects to store characters and their stats

let characters = [
    {
        id: 'solo',
        name: 'Han Solo',
        soloSound: new Audio("assets/sounds/solo-bite.mp3"),
        playSound: function () {
            this.soloSound.play();
        },
        health: 2000,
        attack: 50,
        counter: 200,
        stats: $("#solo").prepend(this.name + "<br>" + "Health: " + this.health),
    },

    {
        id: 'droid',
        name: 'R2-D2',
        r2Sound: new Audio("assets/sounds/R2D2-sound01.mp3"),
        playSound: function () {
            this.r2Sound.play();
        },
        stats: $("#droid").prepend(this.name + "<br>" + "Health: " + this.health),
        health: 2000,
        attack: 50,
        counter: 200
    },


    {
        id: 'luke',
        name: 'Luke Skywalker',
        lukeSound: new Audio("assets/sounds/luke-bite.mp3"),
        playSound: function () {
            this.lukeSound.play();

        },
        stats: $("#luke").prepend(this.name + "<br>" + "Health: " + this.health),
        health: 3000,
        attack: 100,
        counter: 50
    },

    {
        id: 'trooper',
        name: 'Stormtrooper',
        trooperSound: new Audio("assets/sounds/droidsound02.mp3"),
        playSound: function () {
            this.trooperSound.play();
        },
        stats: $("#trooper").prepend(this.name + "<br>" + "Health: " + this.health),
        health: 500,
        attack: 20,
        counter: 10
    },

    {
        id: 'greedo',
        name: 'Greedo',
        greedoSound: new Audio("assets/sounds/greedo-2.mp3"),
        playSound: function () {
            this.greedoSound.play();
        },
        stats: $("#greedo").prepend(this.name + "<br>" + "Health: " + this.health),
        health: 5000,
        attack: 100,
        counter: 50
    },
];

//character selection, sound, and move process with button click

//watches for button click on div area 
$("#characters-area :button").click(function () {

    // Capture the ID of this object
    let id = $(this).attr('id');
    console.log(id);

    // Iterate over the array and compare this button's id
    // to the array-object's id
    characters.forEach(function (object) {

        if (object.id === id) {
            if ($("#user-character > button").length === 0) {
                console.log(this + 'silly error');
                $("#" + id).prependTo("#user-character");
                
            }

            else {
                $("#" + id).prependTo("#enemy-character");
                console.log("Your enemy is" + id);
            }

            // We know what object it is, and since the user
            // clicks on one object at a time, we can
            // play the sound of that object
            object.playSound();

        }
    });

});

/*
enemy health - user char attack number
user char health - enemy counter number
prepend this to above attack div
push health result to enemy char
push health result to user char

create seperate function to check if health is 0 or less??

*/

//attack button
$("#attack-button").on("click", function () {
    fightBite.play();
    

});