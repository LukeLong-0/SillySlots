// rarity distribution:
let nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
            1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 8] 
var stop = 0; // number of times pulled 
let prize = 0; // final result
let totalprize = 0; // cumulative score
let flavortext = "..."; // tells you how good your result is
let imgstring = ""; // path for displayed image on slot
let pulls = 0; // total number of attempts
let gameover = 0; // "game over" status
let share = 0; // whether or not the share pop up is active

let a_elem = document.getElementById('a_slot'); // each slot's currently displayed number
let b_elem = document.getElementById('b_slot');
let c_elem = document.getElementById('c_slot');
let result_elem_1 = document.getElementById('result1'); // the currently displayed result strings
let result_elem_2 = document.getElementById('result2');
let result_elem_3 = document.getElementById('result3');
let resultscore = document.getElementById('resultscore');

// randomly update each slot every 50ms
function shuffle() {
    if (stop < 1){
        // all three slots are spinning
        a_elem.innerHTML = imgpath( nums[Math.floor(Math.random()*nums.length)] );
    } if (stop < 2){
        b_elem.innerHTML = imgpath( nums[Math.floor(Math.random()*nums.length)] );
    } if (stop < 3){
        c_elem.innerHTML = imgpath( nums[Math.floor(Math.random()*nums.length)] );
        setTimeout(shuffle, 50);
    }
    else {
        // no slots are spinning
        results();
    }
}

// returns a string of the path for a specific image based on the number value pulled
function imgpath(num) {
    switch(num) {
        case 0: return "<img src=\"assets/0_kroger.webp\" alt=\"0\">";
        case 1: return "<img src=\"assets/1_dake.webp\" alt=\"1\">";
        case 3: return "<img src=\"assets/2_imgcat.webp\" alt=\"3\">";
        case 5: return "<img src=\"assets/3_luigi.webp\" alt=\"5\">";
        case 8: return "<img src=\"assets/4_realshaq.webp\" alt=\"8\">";
        default: console.log("Error: It's so over");
    }
}

function pull() {
    stop++;
    pulls++;
}

function reset() {
    if (!gameover){
        totalprize -= 500;
        stop = 0;
        result_elem_1.innerHTML = "Awaiting score"; 
        resultscore.innerHTML = "<br>";
        result_elem_2.innerHTML = "...";
        shuffle();
    }
    else {
        playAgain();
    }
}

// calculate and display the resulting score prize
function results(){
    let a_res = Number(a_elem.children[0].getAttribute('alt')); 
    let b_res = Number(b_elem.children[0].getAttribute('alt')); 
    let c_res = Number(c_elem.children[0].getAttribute('alt'));

    if (a_res == b_res == c_res) {
        prize = a_res * b_res * c_res;
        prize *= 8;
    } 
    else if (a_res == b_res) {
        prize = a_res * b_res;
        prize *= 2;
    }
    else if (b_res == c_res) {
        prize = b_res * c_res;
        prize *= 2;
    }
    else if (a_res == c_res){
        prize = a_res * c_res;
        prize *= 2;
    }
    else if (a_res != 0 && b_res != 0 && c_res != 0){
        prize = Math.min(a_res, b_res, c_res)
    }

    if (prize < 2){
        flavortext = "Bummer! Better luck next time!"
    }
    else if (prize < 10) {
        flavortext = "Better than nothin'! Run it back!"
    }
    else if (prize < 50) {
        flavortext = "That's more like it! Don't stop now!"
    }
    else if (prize <  128) {
        flavortext = "Sick roll! Keep gambling!"
    }
    else if (prize < 256){
        flavortext = "BIG BUCKS!!! NEVER GIVE UP!!!"
    }
    else if (prize >= 256){
        flavortext = "JACKPOT!!!!!!!!!! GAMBLING WORKS!!!!!!"
    } 
    
    result_elem_1.innerHTML = ("Your Prize: ");
    resultscore.innerHTML = (prize*100 + " V-Bucks&#8482");
    result_elem_2.innerHTML = (flavortext);

    totalprize += (prize*100);
    result_elem_3.innerHTML = ("Total profit: " + totalprize + " V-Bucks&#8482");
    if (totalprize <= -10000) {
        gameOver();
    }
}

shuffle();

function gameOver() {
    gameover = 1;
    document.getElementsByClassName("button")[0].style.display = "none";
    document.getElementsByClassName("slotsmain")[0].disable = true;
    result_elem_1.innerHTML = "Your mom's credit card ran out of money!";
    resultscore.innerHTML = "GAME OVER! LOSER!";
    result_elem_2.innerHTML = "Use the \'Retry\' button to reset!"
    result_elem_3.innerHTML = "You lost " + Math.abs(totalprize) + " V-Bucks in " + pulls + " attempts!";
}

// restart after game over
function playAgain() {
    gameover = 0;
    document.getElementsByClassName("button")[0].style.display = "initial";
    document.getElementsByClassName("slotsmain")[0].disable = "true";
    pulls = 0;
    totalprize = 500; // first one is free
    reset();
}

function shareScore() {
    let sharebox = document.getElementsByClassName("sharebox")[0];
    if (!share){
        share = 1;
        document.getElementsByClassName("share")[0].innerHTML = "[Close] <span style=\"color:grey;font-style:italic;text-decoration:none;\">  (Copy & paste the text!)</span>";
        sharebox.hidden = false;
        sharebox.innerHTML = "Wow! I earned a profit of " + totalprize + " V-Bucks from Guilt-Free Gambling Dot Com!<br>Best of all, it didn't cost me any real money! I LOVE gambling!<br>";
    }
    else {
        share = 0;
        document.getElementsByClassName("share")[0].innerHTML = "[Share]";
        sharebox.hidden = true;
    }
}