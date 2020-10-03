/*function toggleMenu(){
  var x = document.getElementById("menu");
  if (x.style.display == "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
}*/
function sizeTest(){
document.write("Height: " + document.documentElement.clientHeight + " ");
document.write("Width: " + document.documentElement.clientWidth);
}

function onHoverBtnMenu(){
  document.getElementById("menu").style.visibility = "visible";
  document.getElementById("menu").style.opacity = 1;
}
function onLeaveMenu(){
  document.getElementById("menu").style.opacity = 0;
  document.getElementById("menu").style.visibility = "hidden";
}