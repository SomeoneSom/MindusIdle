var divs = ["res", "drshop", "crshop", "upg", "land"];
var imgs = ["coppimg", "leadimg"];
var resources;
var drills;
function enableDiv(divname) {
  for (var j = 0; j < divs.length; j++) {
    var divtag = divs[j];
    var div = document.getElementById(divtag);
    if (divname == divtag) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
function colorA(divname) {
  for (var j = 0; j < divs.length; j++) {
    var divtag = divs[j];
    var div = document.getElementsByClassName(divtag)[0];
    if (divname == divtag) {
      div.style.color = "orange";
    } else {
      div.style.color = "white";
    }
  }
}
function selectImg(imgName) {
  for (var j = 0; j < imgs.length; j++) {
    var imgtag = imgs[j];
    var img = document.getElementsByClassName(imgtag)[0];
    if (imgName == imgtag) {
      div.style.border = "1px solid white";
    } else {
      div.style.border = "none";
    }
  }
}
enableDiv("res");
colorA("res");
selectImg("coppimg");
function wipeSave() {
  window.localStorage['resources'] = JSON.stringify({"copper":12});
  window.localStorage['drills'] = JSON.stringify({"mech":0});
}
function loadSave() {
  resources = JSON.parse(window.localStorage['resources']);
  drills = JSON.parse(window.localStorage['drills']);
}
if (typeof(window.localStorage['resources']) == undefined) {
  wipeSave();
}
loadSave();
window.setInterval(function(){
  //pass, will be changed later
}, 1000);
window.setInterval(function(){
  document.getElementById("copperres").innerHTML = resources.copper.toString(10);
}, 100);
