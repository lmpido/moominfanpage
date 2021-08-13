document.getElementById("Hidestuff").style.display = "none";
document.getElementById("tab1").className = "highlight";
document.getElementById("header").innerHTML = "Home page";

//Set classes and page
document.getElementById("tab1").addEventListener("click", highlight1);
document.getElementById("tab2").addEventListener("click", highlight2);
document.getElementById("tab3").addEventListener("click", highlight3);

//Click on tab 1:
function highlight1() {
  document.getElementById("Hide1").style.display = "";
  document.getElementById("tab1").className = "highlight";
  document.getElementById("tab2").className = "none";
  document.getElementById("tab3").className = "none";
  document.getElementById("header").innerHTML = "Home page";
  document.getElementById("toChange").innerHTML = "MOOMIN MOOMIN MOOMIN";
  document.getElementById("Hidestuff").style.display = "none";
}
//Click on tab 2
function highlight2() {
  document.getElementById("Hide1").style.display = "none";
  document.getElementById("tab2").className = "highlight";
  document.getElementById("tab1").className = "none";
  document.getElementById("tab3").className = "none";
  document.getElementById("header").innerHTML = "About";
  document.getElementById("toChange").innerHTML =
     "The Moomin stories concern several eccentric and oddly-shaped characters, some of whom are related to each other.The central family consists of Moominpappa, Moominmamma and Moomintroll.<br>\nOther characters, such as Hemulens, Sniff, the Snork Maiden, Snufkin and Little My are accepted into or attach themselves to the family group from time to time, generally living separate lives in the surrounding Moominvalley, where the series is set.<br>\nIt is in this fictional valley, that the Moomin family decides to live at the end of The Moomins and the Great Flood.<br>";
 
 //About page images
 var img = document.createElement("img"); 
 
img.src = "http://assets.stickpng.com/images/59f873933cec115efb362361.png"; 
var src = document.getElementById("toChange"); 
src.appendChild(img);
  document.getElementById("Hidestuff").style.display = "";

}
//What happens when you click on tab 3:
function highlight3() {
  document.getElementById("Hide1").style.display = "none";
  document.getElementById("tab3").className = "highlight";
  document.getElementById("tab1").className = "none";
  document.getElementById("tab2").className = "none";
  document.getElementById("header").innerHTML = "Memes";
  document.getElementById("toChange").innerHTML =
    "Here are some memes of the Moomins!<br /><br /><br /><br /><br /><br />";
 //Meme 1 
 var img = document.createElement("img"); 
 
img.src = "https://i.redd.it/j18g07zik4931.jpg"; 
var src = document.getElementById("toChange"); 
src.appendChild(img); 
  
//Meme 2 
var img2 = document.createElement("img");
  img2.src = "https://i.pinimg.com/474x/dc/b5/d0/dcb5d07778588bfdd27eadbe7cd70994.jpg"; 
var src = document.getElementById("toChange"); 
src.appendChild(img2); 
  
//Meme 3
var img3 = document.createElement("img");
  img3.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/507/614/991.png"; 
var src = document.getElementById("toChange"); 
src.appendChild(img3);  
  
//Meme 4
var img4 = document.createElement("img");
  img4.src = "https://i.pinimg.com/originals/d1/ec/5e/d1ec5e590b4514f70b991abd145b602d.png"; 
var src = document.getElementById("toChange"); 
src.appendChild(img4); 
 
//Hide
 document.getElementById("Hidestuff").style.display = "none";
}