var proj1="<h3>Hydrangeas</h3><p>This is a re-creation of the classic game 'Simon.' In addition to designing and coding the page, I created the sounds. Everything is 'vanilla' javascript/html/css. **click white arrows to see more**</p>";

var proj2="<h3>Mercy</h3><p>This page offers the viewer a random quote and an option to send a Tweet of said quote. The quotes are stored as an array of objects. I used Bootstrap and jQuery for the design/code, but the photograph is my own. </p>";

var proj3="<h3>Calculator</h3><p>A basic calculator. The photograph in the background was taken by my wife. A great deal of the effort put into this project was my attempts to limit improper inputs, though on reflection, if the user wants to enter nonsense operators, I don't see why that should bother me. </p>";

var proj4="<h3>Wiki Viewer</h3><p> This page makes a call to the Wikipedia API based on the search query entered into the box. The background image was lifted from the internet, but I am overall quite happy with the design of this. Uses jQuery/Bootstrap, though only to a minor degree</p>";

var proj5="<h3>Twitch API Viewer</h3><p>When I learn more about the backend, I'd like to update this to include an option to save a list of streamers, but for now it displays a set group. My first (and so far only) attempt at using ajax without jQuery. I feel the design is not as intricate as I would like, but the simplicity has its own appeal.</p>";

var proj6="<h3>Weather Page</h3><p>Just displays basic information concerning the weather. One of my earliest projects, and it shows, but I'm happy to keep it as is to remind myself of how far I've come.</p>";

var proj7="<h3>Tic Tac Toe</h3><p>I kept to a simple overall design, and I think the end result was nice. I was proud to have made an 'unbeatable' AI, but my wife complained that that took the fun out of it, and hence 'medium' and 'easy' difficulties were born. As yet, I feel this is the most sophisticated project I've completed. Don't laugh. </p>";

var proj8="<h3>Pomodoro Timer</h3><p>It was during the creation of this website that I learned to keep my ambition in check. The code probably reveals remnants of aborted features and abandonded ideas, though hopefully the website itself doesn't betray its origins. Interesting note: the picture displayed during the 'work' session of the timer is of my living room around the time I was working on this project and duly reflected my state of mind back then.</p>";


var projSummaries = [proj1, proj2, proj3, proj4, proj5, proj6, proj7, proj8];

var degrees=0;
var a=0;

window.wheel = document.getElementById("wheel");
window.turn = document.getElementById("turn");
window.turn2 = document.getElementById("turn2");
window.description = document.getElementById("descBox");
description.innerHTML = projSummaries[a];

turn2.addEventListener("click", function(){
 
  if (a>0){
     a--;
  } else {a=7;}
 
  description.innerHTML = projSummaries[a];
  degrees-=45;
  var rotation = "rotate(" + degrees + "deg)";
  console.log(rotation);
  wheel.style.transform = rotation;
    
})

turn.addEventListener("click", function(){
 
  if (a<7){
     a++;
  } else {a=0;}
 
  description.innerHTML = projSummaries[a];
  degrees+=45;
  var rotation = "rotate(" + degrees + "deg)";
  console.log(rotation);
  wheel.style.transform = rotation;
    
})