<!DOCTYPE html>
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" type="text/css" href="style.css">
<html lang="en">
<?php include ("header.php"); ?>
    <body>
      
        <h2>Never stop gambling! If you keep going, you'll eventually win!</h2>
        <h3>Click on a slot or the "pull" button to pull a number!<br>Click the "reset" button to try again!</h3>
        <p style="text-align:center;" id="result1">Awaiting score...</p>
        <p style="text-align:center;" id="result2"></p>

        <div onclick=pull() class="slotsmain">
            <p id="a_slot" class="slot">A</p>
            <p id="b_slot" class="slot">B</p>
            <p id="c_slot" class="slot">C</p>
            
        </div>
        <div class="button_container">
            <p class="button" onclick=pull()>PULL</p>
            <p class="button" onclick=reset()>RESET</p>
        </div>
        
        <script src="slots.js"></script>
        
    </body>
</html>