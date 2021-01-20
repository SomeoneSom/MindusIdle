var divsmain = ["res", "drshop", "crshop", "upg", "power", "land", "options"];
var resources;
var obj;
function tick(times = 1) {
  for (var k = 0; k < times; k++) {
    for (var i = 0; i < Object.keys(obj).length; i++) {
      object = obj[Object.keys(obj)[i]]
      amount = object[0];
      for (var j = 0; j < 17; j++) {
        if (object[5]*amount <= resources["power"]) {
          resources[Object.keys(resources)[j]] += object[2][j] * amount;
          resources["power"] -= object[5]*amount;
        }
      }
    }
  }
}
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
  document.getElementById('upg').innerHTML = "";
}
function loadSave() {
  resources = JSON.parse(window.localStorage['resources']);
  obj = JSON.parse(window.localStorage['obj']);
  upgrades = JSON.parse(window.localStorage['upgrades']);
}
function getNewFeatures() {
  for (var objct of Object.keys(JSON.parse(objj))) {
    if (typeof(obj[objct]) == "undefined") {
      obj[objct] = JSON.parse(objj)[objct];
    }
    for (var i = 1; i < 6; i++) {
      obj[objct][i] = JSON.parse(objj)[objct][i];
    }
  }
  for (var resn of Object.keys(JSON.parse(resourcesj))) {
    if (typeof(resources[resn]) == "undefined") {
      resources[resn] = JSON.parse(resourcesj)[resn];
    }
  }
}
if (typeof(window.localStorage['resources']) == "undefined") {
  wipeSave();
}
function save() {
  window.localStorage['resources'] = JSON.stringify(resources);
  window.localStorage['obj'] = JSON.stringify(obj);
  //this code shows the 'Saved!' bar
  var bar = document.getElementsByClassName("autosavebar")[0];
  bar.style.visibility = "visible";
  bar.style.opacity = 1;
  window.setTimeout(function(){bar.style.visibility = "hidden";bar.style.opacity = 0;}, 1000);
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
  if (objc[0] % 100 == 0 && objc[0] >= 1000 && objc[0] <= 10000) {
    objc[2] = objc[2].map(x => x*10);
  } else if (objc[0] % 25 == 0 && objc[0] >= 100 && objc[0] < 1000) {
    objc[2] = objc[2].map(x => x*4);
  }
}
loadSave();
getNewFeatures();
if (!localStorage['lastAccessed']) {
  localStorage['lastAccessed'] = Math.floor(Date.now() / 1000);
}
var disparity = Math.floor(Date.now() / 1000) - localStorage['lastAccessed'];
localStorage['lastAccessed'] = Math.floor(Date.now() / 1000);
tick(disparity);
//nums go up here
window.setInterval(tick, 1000);
//building and res counts change here
window.setInterval(function(){
  for (var i = 0; i < 18; i++) {
    document.getElementById(i.toString(10).concat("res")).innerHTML = parseFloat(resources[Object.keys(resources)[i]].toFixed(2)).toString(10);
  }
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
window.setInterval(save, 30000);
//upgrade management
window.setInterval(function(){
  for (var i = 0; i < upgrades.length; i++) {
    if ((eval('('+upgrades[i][3]+'());') == true) && (document.getElementById(upgrades[i][0]) == null) && (upgrades)) {
      document.getElementById('upg').innerHTML += `<button id="${upgrades[i][0]}" title="${upgrades[i][1]}" onclick="do_func(${upgrades[i][4]});upgrades[${i}][2]=1;">${upgrades[i][0]}</button>`;
      upgrades[i][5] = 1;    
    }
    if (upgrades[i][2] == 1 && document.getElementById(upgrades[i][0]) != null) {
      element = document.getElementById(upgrades[i][0]);
      element.parentNode.removeChild(element);
    }
  }
}, 100);
//save on window close
window.addEventListener('beforeunload', function(){
  save();
  return null;
});