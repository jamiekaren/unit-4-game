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

// Create an arena object for the ally & enemy buttons
let arenaObj = {};

//Create some objects to store characters and their stats
let characters = [
    {
        id: 'solo',
        name: 'Han Solo',
        soloSound: new Audio("assets/sounds/solo-bite.mp3"),
        playSound: function () {
            this.soloSound.play();
        },
        health: 1500,
        attack: 5,
        counter: 10,
        stats: function () {
            $("#solo-health").empty();
            $("#solo-health").prepend(this.name + "<br>" + "Health: " + this.health)
        },
    },

    {
        id: 'droid',
        name: 'R2-D2',
        r2Sound: new Audio("assets/sounds/R2D2-sound01.mp3"),
        playSound: function () {
            this.r2Sound.play();
        },
        stats: function () {
            $("#droid-health").empty();
            $("#droid-health").prepend(this.name + "<br>" + "Health: " + this.health)
        },
        health: 75,
        attack: 5,
        counter: 10,
    },


    {
        id: 'luke',
        name: 'Luke Skywalker',
        lukeSound: new Audio("assets/sounds/luke02.mp3"),
        playSound: function () {
            this.lukeSound.play();

        },
        stats: function () {
            $("#luke-health").empty();
            $("#luke-health").prepend(this.name + "<br>" + "Health: " + this.health)
        },
        health: 120,
        attack: 5,
        counter: 15,
    },

    {
        id: 'trooper',
        name: 'Stormtrooper',
        trooperSound: new Audio("assets/sounds/droidsound02.mp3"),
        playSound: function () {
            this.trooperSound.play();
        },
        stats: function () {
            $("#trooper-health").empty();
            $("#trooper-health").prepend(this.name + "<br>" + "Health: " + this.health)
        },
        health: 50,
        attack: 5,
        counter: 5,
    },

    {
        id: 'greedo',
        name: 'Greedo',
        greedoSound: new Audio("assets/sounds/greedo-2.mp3"),
        playSound: function () {
            this.greedoSound.play();
        },
        stats: function () {
            $("#greedo-health").empty();
            $('#greedo-health').prepend(this.name + "<br>" + "Health: " + this.health)
        },
        health: 200,
        attack: 5,
        counter: 25,
    },
];

characters[0].stats();
characters[1].stats();
characters[2].stats();
characters[3].stats();
characters[4].stats();


//character selection, sound, and move process with button click

//watches for button click on div area 
$("#characters-area :button").click(function () {

    // Capture the ID of this object
    let id = $(this).attr('id');


    // Iterate over the array and compare this button's id
    // to the array-object's id
    characters.forEach(function (object) {

        if (object.id === id) {
            if ($("#user-character > button").length === 0) {
                console.log('Your character is ' + id);
                $("#" + id).prependTo("#user-character");

                // Add corresponding object into the arenaObj as an ally
                arenaObj.ally = object;
            }

            else {
                $("#" + id).prependTo("#enemy-character");
                console.log("Your enemy is " + id);

                // Add corresponding object into the arenaObj as an enemy
                arenaObj.enemy = object;
            }

            // We know what object it is, and since the user
            // clicks on one object at a time, we can
            // play the sound of that object
            object.playSound();


        }
    });

});


function killCharacter () {
    if (arenaObj.ally.health <= 0) {
        $("#user-character").empty();
        alert("Game Over! Hit CTRL + R to refresh the page and try again.");
        $("#fight-outcome").text("You are dead. The Galaxy will fall into chaos!");


    } else if (arenaObj.enemy.health <= 0) {
        $("#enemy-character").empty();
        $("#fight-outcome").text(arenaObj.enemy.name + " is dead. The Force is strong with you!");
        alert("Your journey is not over. Please select another character to fight.");
        
        
    }
};


/*Characters are seleceted, now we have our attack button.
User clicks on button, 

*/
function setAttack() {
    $("#fight-outcome").empty();

    arenaObj.enemy.health -= arenaObj.ally.attack;
    arenaObj.enemy.stats();

    killCharacter();

    $("#fight-outcome").empty();

    arenaObj.ally.health -= arenaObj.enemy.counter;
    arenaObj.ally.stats();

    killCharacter();

    console.log("Your enemy HP is " + arenaObj.enemy.health 
    + " and your HP is " + arenaObj.ally.health);
};

function updateHealth() {
    $("#arena-text").text(arenaObj.enemy.name +
        " attacked you for " + arenaObj.enemy.counter +
        " damange." + "You attacked " + arenaObj.enemy.name +
        " for " + arenaObj.ally.attack + " damage.");
};


$("#arena").on('click', function () {

    setAttack();
    updateHealth();


});
