<!DOCTYPE html>
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" type="text/css" href="style.css">
<html lang="en">

<div class="slotsheader">
    <a href="home.php"><img src="assets/header.png" class="logo"></a>
    <button class="theme_button" onclick="changeTheme()">THEME</button>
</div>

<div onclick=mobileView()>
    <img class="mobilebutton" src="assets/borger.png"></img>
</div>

<script language="javascript">
    let expand = 0;
    function changeTheme() { 
        document.body.classList.toggle("dark-mode"); 
    }
    function mobileView() {
        if (!expand){
            document.getElementsByClassName("banner")[0].style.display = "flex"; 
        } else {
            document.getElementsByClassName("banner")[0].style.display = "none"; 
        }
        expand = !expand;
    } 
</script>

<div class="banner">
    <a class="banner_item" href="home.php">HOME</a>
    <a class="banner_item" href="slots.php">SLOTS</a>
    <a class="banner_item" href="roulette.php">ROULETTE</a>
    <a class="banner_item" href="about.php">ABOUT</a> 
    <a class="banner_item" href="contact.php">CONTACT</a> 
</div>