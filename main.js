var divsmain = ["res", "drshop", "crshop", "upg", "land"];
var divsdr = ["mech", "pneu", "lasr", "arbl"]
var imgs = ["coppimg", "leadimg", "scrpimg", "sandimg", "coalimg", "titaimg", "thorimg"];
var resources;
var drills;
function enableDiv(divname, divs) {
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
function colorA(divname, divs) {
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
    var img = document.getElementById(imgtag);
    if (imgName == imgtag) {
      img.style.border = "1px solid white";
    } else {
      img.style.border = "none";
    }
  }
}
enableDiv("mech", divsdr);
colorA("mech", divsdr);
enableDiv("res", divsmain);
colorA("res", divsmain);
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
