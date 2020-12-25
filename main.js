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
enableDiv("mech", divsdr);
colorA("mech", divsdr);
enableDiv("res", divsmain);
colorA("res", divsmain);
//obj format: [count, costres, costdrills, output]
function wipeSave() {
  window.localStorage['resources'] = JSON.stringify({"copper":12, "lead":0, "scrap":0, "sand":0, "graphite":0, "metaglass":0, "spore_pod":0, "coal":0, "titanium":0, "thorium":0, "silicon":0, "plastanium":0, "phase_fabric":0, "surge_alloy":0, "blast_compound":0, "pyratite":0, "land":10});
  window.localStorage['obj'] = JSON.stringify({"mech":[0, [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]});
}
function loadSave() {
  resources = JSON.parse(window.localStorage['resources']);
  obj = JSON.parse(window.localStorage['obj']);
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
  }
  objc[0] += 1;
}
loadSave();
//nums go up here
window.setInterval(function(){
  //pass
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
      cost = obj[Object.keys(obj)[i]][1][j].toString(10);
      if (cost != "0") {
        document.getElementById(i.toString(10).concat("cost", j.toString(10))).innerHTML = cost;
      }
    }
  }
}, 100);
window.setInterval(save(), 600)
window.onbeforeunload = save();