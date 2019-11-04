console.log("JS connected"); // this to check that our script is connected to out HTML

var body = document.querySelector("body");// query select body 
// change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties

body.style.fontfamily="Arial, sans-serif",
body.style.backgroundColor = "pink";
// change the backgroundColor to a color of your choice

var nickname =  document.getElementById("nickId").innerHTML="GhidaK";// qurey select the ID nickname
//add some value to nickname Hint: innerHTML
// query select favorites byID
// query select hometown byID
var favorites =  document.getElementById("fId").innerHTML="Reading";
var hometown =  document.getElementById("HomeId").innerHTML="Riyadh";
// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';

//change the color of all selectors to colors of your choice, it better be good LOL
document.getElementById("fId").style.color = "#ff0000";
document.getElementById("nickId").style.color = "#ff0000";
document.getElementById("HomeId").style.color = "#ff0000";



// https://www.w3schools.com/jsref/prop_style_color.asp