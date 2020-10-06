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

function onHoverBtnMenu(){ // Показать меню
  document.getElementById("menu").style.transition = "all 0.4s";
  document.getElementById("menu").style.visibility = "visible";
  document.getElementById("menu").style.opacity = 1;
}
function onLeaveMenu(){ // Скрыть меню
  document.getElementById("menu").style.opacity = 0;
  document.getElementById("menu").style.visibility = "hidden";
}

function onDragEnterUpload (){ // Увеличение области приёма файлов при перетаскивании
	document.getElementById("upload-box").style.transition = "all 0.4s";
	document.getElementById("upload-box-text").style.transition = "all 0.4s";
	document.getElementById("upload-box-text").style.top = "89.5px";
	document.getElementById("upload-box").style.height = "200px";
}
function onDragLeaveUpload (){ // Уменьшение области приёма файлов при окончании перетаскивания
	document.getElementById("upload-box-text").style.top = "13.5px";
	document.getElementById("upload-box").style.height = "48px";
}
function onDragEnterHighlight (){ // Изменение цвета области приёма файлов при перетаскивании
	document.getElementById("upload-box").style.borderColor = "#4D4";
}
function onDragLeaveHighlight (){ // Изменение цвета области приёма файлов при окончании перетаскивания
	document.getElementById("upload-box").style.borderColor = "#666";
}