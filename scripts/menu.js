/*function toggleMenu(){
  var x = document.getElementById("menu");
  if (x.style.display == "none") {
    x.style.display = "initial";
  } else {
    x.style.display = "none";
  }
}*/
if(navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) == null) addCSS('UI.css'); // Если не найдено совпадений с мобильными ОС - грузить ПК стиль
else addCSS('UI_Mobile.css');

function testClient(){ // Получения инфы о клиенте (Отладка)
document.write("Height: " + document.documentElement.clientHeight + "<br>");
document.write("Width: " + document.documentElement.clientWidth + "<br>");
document.write("UserAgent: " + navigator.userAgent + "<br>");
document.write("doNotTrack: " + navigator.doNotTrack + "<br>");
document.write("Languages: " + navigator.languages + "<br>");
document.write("Logical Processors: " + navigator.hardwareConcurrency + "<br>");
document.write("Device Memory: " + navigator.deviceMemory + "<br>");
document.write("Max Touch Points: " + navigator.maxTouchPoints + "<br>");
}

function addCSS(filename){ // Добавление стиля к документу
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