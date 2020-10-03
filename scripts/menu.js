/*function toggleMenu(){
  var x = document.getElementById("menu");
  if (x.style.display == "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
}*/
if(navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) == null) addCSS('UI.css');
else addCSS('UI_Mobile.css');
sizeTest();

function sizeTest(){
document.write("Height: " + document.documentElement.clientHeight + " ");
document.write("Width: " + document.documentElement.clientWidth + " ");
}

function addCSS(filename){
 var head = document.getElementsByTagName('head')[0];
 var style = document.createElement('link');
 style.href = filename;
 style.type = 'text/css';
 style.rel = 'stylesheet';
 head.append(style);
}

function onHoverBtnMenu(){
  document.getElementById("menu").style.visibility = "visible";
  document.getElementById("menu").style.opacity = 1;
}
function onLeaveMenu(){
  document.getElementById("menu").style.opacity = 0;
  document.getElementById("menu").style.visibility = "hidden";
}