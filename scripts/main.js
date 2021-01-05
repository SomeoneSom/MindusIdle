var divsmain = ["res", "drshop", "crshop", "upg", "land", "options"];
var divsdr = ["mech", "leadr"];
var divslnd = ["duo"];
var resources;
var obj;
function enableDiv(divname, divs) {
  for (var j = 0; j < divs.length; j++) {
    var divtag = divs[j];
    var div = document.getElementById(divtag);
    var anchor = document.getElementsByClassName(divtag)[0];
    if (divname == divtag) {
      div.style.display = "block";
      anchor.style.color = "orange";
    } else {
      div.style.display = "none";
      anchor.style.color = "white";
    }
  }
}
enableDiv("mech", divsdr);
enableDiv("res", divsmain);
enableDiv("duo", divslnd);
function wipeSave() {
  window.localStorage['resources'] = resourcesj;
  window.localStorage['obj'] = objj;
  window.localStorage['upgrades'] = upgradesj;
}
function loadSave() {
  resources = JSON.parse(window.localStorage['resources']);
  obj = JSON.parse(window.localStorage['obj']);
  upgrades = JSON.parse(window.localStorage['upgrades']);
}
if (typeof(window.localStorage['resources']) == undefined) {
  wipeSave();
}
function save() {
  window.localStorage['resources'] = JSON.stringify(resources);
  window.localStorage['obj'] = JSON.stringify(obj);
}
function buy(objc, amount) {
  for (var i = 0; i < 17; i++) {
    if (resources[Object.keys(resources)[i]] < objc[1][i]) {
      return;
    }
  }
  for (var i = 0; i < 17; i++) {
    resources[Object.keys(resources)[i]] -= objc[1][i];
    if (i != 16) {
      objc[1][i] = Math.round(objc[1][i] * 1.15);
    }
  }
  objc[0] += 1;
}
loadSave();
//nums go up here
window.setInterval(function(){
  for (var i = 0; i < Object.keys(obj).length; i++) {
    object = obj[Object.keys(obj)[i]]
    amount = object[0];
    for (var j = 0; j < 17; j++) {
      resources[Object.keys(resources)[j]] += object[2][j] * amount;
    }
  }
}, 1000);
//building and res counts change here
window.setInterval(function(){
  for (var i = 0; i < 16; i++) {
    document.getElementById(i.toString(10).concat("res")).innerHTML = resources[Object.keys(resources)[i]].toString(10);
  }
  document.getElementById("landcount").innerHTML = resources.land.toString(10);
  for (var i = 0; i < Object.keys(obj).length; i++) {
    document.getElementById(i.toString(10).concat("count")).innerHTML = obj[Object.keys(obj)[i]][0].toString(10);
    for (var j = 0; j < 17; j++) {
      out = obj[Object.keys(obj)[i]][2][j];
      cost = obj[Object.keys(obj)[i]][1][j].toString(10);
      if (cost != "0") {
        document.getElementById(i.toString(10).concat("cost", j.toString(10))).innerHTML = cost;
      }
      if (out != 0) {
        out *= obj[Object.keys(obj)[i]][0];
        document.getElementById(i.toString(10).concat("out", j.toString(10))).innerHTML = out.toFixed(1); 
      }
    }
  }
}, 100);
//needed for upgrades
function do_func(func) {
  func();
}
//autosave every 30 seconds
window.setInterval(save(), 30000)
//upgrade management
window.setInterval(function(){
  for (var i = 0; i < upgrades.length; i++) {
    if ((eval('('+upgrades[i][3]+'());') == true) && (upgrades[i][5] == 0)) {
      document.getElementById('upg').innerHTML += `<button title="${upgrades[i][1]}" onclick="do_func(${upgrades[i][4]})">${upgrades[i][0]}</button>`;
      upgrades[i][5] = 1;    
    }
  }
}, 1000);
//save on window close
window.addEventListener('beforeunload', function(){
  save();
  return null;
});