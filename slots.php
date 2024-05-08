<!DOCTYPE html>
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" type="text/css" href="style.css">
<html lang="en">
<?php include ("header.php"); ?>

    <body>
        <h2 style="font-style:italic">Try your luck! Never give up!</h2>
        <p>Click the "Pull" and "Retry" buttons to play!<p>
        <p>Your first roll is free, but each consecutive reset costs only 500 V-Bucks&#8482;!<br><br></p>
        
        <div class="total_score">
            <p id="result3">Total profit: 0 V-Bucks&#8482;</p>
            <p onclick=shareScore() class="share">[Share]</p>
        </div>
        <p hidden class="sharebox">asdfasdf</p>        
        <div class="score">
            <p style="margin-bottom:-20px" id="result1">Awaiting score</p>
            <p id="resultscore" class="slotslink"><br></p>
            <p style="font-size:large;font-style:italic;" id="result2">...</p>
        </div>

        <div onclick=pull() class="slotsmain">
            <p id="a_slot" onclick=pull() class="slot">A</p>
            <p id="b_slot" onclick=pull() class="slot">B</p>
            <p id="c_slot" onclick=pull() class="slot">C</p>  
        </div>

        <div class="button_container">
            <p class="button" onclick=pull()>PULL</p>
            <p class="button" onclick=reset()>RETRY</p>
        </div>
        
        <script src="slots.js"></script> 
    </body>
    
</html>