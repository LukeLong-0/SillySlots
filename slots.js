let nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4];
var stop = 0; // number of times pulled 
let prize = 0; // final result
let totalprize = 0;
let flavortext = ""; // tells you how good your result is
let imgstring = ""; // path for displayed image on slot

let a_elem = document.getElementById('a_slot'); // each slot's currently displayed number
let b_elem = document.getElementById('b_slot');
let c_elem = document.getElementById('c_slot');
let result_elem_1 = document.getElementById('result1'); // the currently displayed result strings
let result_elem_2 = document.getElementById('result2');

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
        case 2: return "<img src=\"assets/2_imgcat.webp\" alt=\"2\">";
        case 3: return "<img src=\"assets/3_luigi.webp\" alt=\"3\">";
        case 4: return "<img src=\"assets/4_realshaq.webp\" alt=\"4\">";
        default: console.log("Error: It's so over");
    }
}

function pull() {
    stop++;
}

function reset() {
    stop = 0;
    result_elem_1.innerHTML = "Awaiting score..."; result_elem_2.innerHTML = "";
    shuffle();
}

// calculate and display the resulting score prize
// 0 = most common, 4 = rarest
function results(){
    let a_res = Number(a_elem.children[0].getAttribute('alt')); 
    let b_res = Number(b_elem.children[0].getAttribute('alt')); 
    let c_res = Number(c_elem.children[0].getAttribute('alt'));
    console.log(a_res, b_res, c_res)

    if (a_res == b_res == c_res) {
        prize = a_res * b_res * c_res;
        prize = prize * 5;
    } 
    else if (a_res == b_res) {
        prize = a_res * b_res;
        prize = prize * 2;
    }
    else if (b_res == c_res) {
        prize = b_res * c_res;
        prize = prize * 2;
    }
    else if (a_res == c_res){
        prize = a_res * c_res;
        prize = prize * 2;
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
    else if (prize < 40) {
        flavortext = "Sick roll! Keep gambling!"
    }
    else if (prize < 256){
        flavortext = "BIG BUCKS!!! NEVER GIVE UP!!!"
    }
    else if (prize>=256){
        flavortext = "JACKPOT!!!!!!!!!! GAMBLING WORKS!!!!!!"
    } 
    
    result_elem_1.innerHTML = ("Your Prize: " + prize*1000 + " Venezuelan Bolivar");
    result_elem_2.innerHTML = (flavortext);
    totalprize = totalprize + (prize*1000)
}

shuffle();

