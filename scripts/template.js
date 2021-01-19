//capitalize function for obj names
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
//make all necessary anchors and divs in the correct locations for all the objs
var divsdr = divscr = divslnd = divspower = [];
var i = 0;
for (var objct of Object.keys(JSON.parse(objj))) {
    var flag = JSON.parse(objj)[objct][3];
    if (flag == 0) {
        var divlst = "divsdr";
        var id = "drnav";
        document.getElementById('drshop').innerHTML += `<div id="${objct}"></div>`;
        divsdr.push(objct);
    } else if (flag == 1) {
        var divlst = "divscr";
        var id = "crnav";
        document.getElementById('crshop').innerHTML += `<div id="${objct}"></div>`;
        divscr.push(objct);
    } else if (flag == 2) {
        var divlst = "divslnd";
        var id = "lndnav"
        document.getElementById('land').innerHTML += `<div id="${objct}"></div>`;
        divslnd.push(objct);
    } else {
        var divlst = "divspower";
        var id = "powernav";
        document.getElementById('power').innerHTML += `<div id="${objct}"></div>`;
        divspower.push(objct);
    }
    document.getElementById(id).innerHTML += `<li><a href="javascript:enableDiv('${objct}', ${divlst})" class="${objct}">${JSON.parse(objj)[objct][4]}</a></li>`;
    document.getElementById(objct).innerHTML += `<p>You have <span id="${i}count">0</span> ${pluralize(JSON.parse(objj)[objct][4])} ${(flag != 3) ? "producing" : "."}:`;
    for (var j = 0; j < 17; j++) {
        if (JSON.parse(objj)[objct][2][j] != 0) {
            document.getElementById(objct).innerHTML += `<span id="${i}out${j}"> 0</span> ${Object.keys(JSON.parse(resourcesj))[j].capitalize()} `;
        }
    }
    document.getElementById(objct).innerHTML += `${(flag != 3) ? 'per second.' : ''}<br /><br />
    Buying 1 will cost:<br /><br />`;
    for (var j = 0; j < 17; j++) {
        if (JSON.parse(objj)[objct][1][j] != 0) {
            document.getElementById(objct).innerHTML += `<span id="${i}cost${j}"> 0</span> ${Object.keys(JSON.parse(resourcesj))[j].capitalize()} `;
        }
    }
    document.getElementById(objct).innerHTML += `<br /><br />
    Additionally, each ${JSON.parse(objj)[objct][4]} ${(JSON.parse(objj)[objct][5] < 0) ? 'produces' : 'consumes'} ${Math.abs(JSON.parse(objj)[objct][5])} power per second, totaling <span id="${i}out{j}">0</span> power per second.</p>
    <button onclick="buy(obj.${objct}, 1);">Buy 1</button>`;
    i++;
}
//manage unlocking of all objects (not upgrades)
window.setInterval(function(){
    for (var objct of Object.keys(JSON.parse(objj))) {
        if (obj[objct][0] > 0) {
            continue;
        }
        var entry = document.getElementsByClassName(objct)[0];
        var canBuy = JSON.parse(objj)[objct][1].map(function(x, i){return x <= Object.values(resources)[i]}).every(Boolean);
        if (canBuy == true) {
            entry.style.display = "";
        } else {
            entry.style.display = "none";
            document.getElementById(objct).style.display = "none";
        }
    }
}, 100);