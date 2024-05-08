<!DOCTYPE html>
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" type="text/css" href="style.css">
<html lang="en">
<?php include ("header.php"); ?>
<body>
    <div>
        <img class="wheel" src="assets/wheel.png"></img>
        <p class="roulettescore"></p>
    </div>
    
    
    <form style="margin-bottom:25px" class="selection">
        <button type="button" onclick="spin()" id="spinbutton">SPIN</button>
        <label><br>Choose number of bets:</label>  
        <select onchange=betupdate() id="betcount">
            <option>1</option> <option>2</option> <option>3</option> <option>4</option>
        </select>
        <label><br>Choose color(s):</label>
        <select id="color1">
            <option>Black</option> <option>Red</option>
        </select>
        <select style="display:none" id="color2">
            <option>Black</option> <option>Red</option>
        </select>
        <select style="display:none" id="color3">
            <option>Black</option> <option>Red</option>
        </select>
        <select style="display:none" id="color4">
            <option>Black</option> <option>Red</option>
        </select>
    </form>

    <script language="javascript">
        let bet_elem = document.getElementById("betcount");
        let betcount = bet_elem.options[bet_elem.selectedIndex].text;
        let color2_elem = document.getElementById("color2");
        let color3_elem = document.getElementById("color3");
        let color4_elem = document.getElementById("color4");

        function betupdate(){
            betcount = bet_elem.options[bet_elem.selectedIndex].text;
            if (betcount > 1){
                color2_elem.style.display = swap(color2_elem.style.display);
            } if (betcount > 2){
                color3_elem.style.display = swap(color3_elem.style.display);
            } if (betcount > 3){
                color4_elem.style.display = swap(color4_elem.style.display);
            }
        }

        function swap(elem){
            if (elem == "none"){
                return "block";
            } else {
                return "none";
            }
        }

        function spin(){
            score_elem = document.getElementsByClassName("roulettescore")[0];
            let score = 0;
            betcount = bet_elem.options[bet_elem.selectedIndex].text;
            let wins = 0;

            for (i=0;i<betcount;i++){
                if (Math.random() < 0.5){
                    wins++;
                }
            }
            score += (wins * 600) - ((betcount - wins) * 150);
            score_elem.innerHTML = score + " V-Bucks";
        }

    </script>


</body>