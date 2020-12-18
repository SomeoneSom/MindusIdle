var divs = ["res", "drshop", "crshop", "upg", "land"];
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
enableDiv("res");
colorA("res");
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
