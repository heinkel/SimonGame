
 /**** GLOBAL VARIABLES    ****/
let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue","green","yellow"];
var randomGeneratedColor = "";
var level = 0;
var gameMove = 0;


// ******  GAME LOGIC**


//----  RANDOM GAME PATTERN GENERATION ---//
function nextSequence(){
    userClickedPattern = [];
    $("h1").text("Level "+level);
    level++;
    var randomNumber = Math.floor(Math.random()*4);
    var RandomChosenColour = buttonColors[randomNumber];
    gamePattern.push(RandomChosenColour);
    $("#"+RandomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(RandomChosenColour);
    gameMove = 0;
}
 





// CLICK HANDLER
function clickHandler(id){
    playSound(id);
    animate(id); 
}

//BUTTON ANIMATION 
function animate(color){
    $("."+color).fadeOut(100).fadeIn(100);
   
}
// PLAY SOUND
function playSound(color){
    var sound = new Audio("sounds/"+color+".mp3");
    sound.play();
}

//**** USER ACTIONS HANDLER *****

$(".btn").click(function(event){
    
    if (level != 0) {  ///block the game if game didn't started yet.
        userClickedPattern.push(event.target.id);
        clickHandler(event.target.id);
        if (gamePattern[gameMove] != userClickedPattern[gameMove])
            Missed();
        else {
        gameMove++;
        if (gameMove === gamePattern.length) // this means user choices were right and time to level up
            nextSequence();
        }
    }

});

//Keypressed Detection CALL GAME START
$(document).keypress(function(){
   gameStarts();
});

$("#start").click("tap",function(){  // Mobile start event
    gameStarts();
 });



function gameStarts(){ // Inic the game after pressing a key only if level 0.
    if (level === 0){
        gamePattern = [];
        nextSequence(); //first sequence of the game
    }
}

function Missed(){   // GAME OVER FUNCTION RESET SOME CONFIGURATION AND LOCKS THE GAME TO NEXT PRESKEY TO RESTART
    playSound("wrong");
    $("h1").text("Game Over");
    level = 0;
  
}



// *******     My original FUNCTION TO FLASH BUTTON TO USER ******
// function animate(color){
//     $(color).addClass("pressed");
//     setTimeout(function(){
//         $(color).removeClass("pressed");
//     },100);



//RandomChosenColour(selectedButton);  Alleatory number chosen call

// function RandomChosenColour(randomNumber){
//     switch(randomNumber)    {
//         case 0:
            
//             var sound = new Audio("sounds/green.mp3");
//             sound.play();
//             animate(green);
//             break;
//         case 1:
           
//             var sound = new Audio("sounds/red.mp3");
//             sound.play();
//             animate(red);
//             break;
//         case 2:
            
//             var sound = new Audio("sounds/yellow.mp3");
//             sound.play();
//             animate(yellow);
//             break;

//         case 3:
           
//             var sound = new Audio("sounds/blue.mp3");
//             sound.play();
//             animate(blue);
//             break;
//         default:
//             break;
//     }
// }