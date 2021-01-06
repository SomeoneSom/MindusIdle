String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
var i = 0;
for (var objct of Object.keys(JSON.parse(objj))) {
    var flag = JSON.parse(objj)[objct][3];
    if (flag == 0) {
        var divlst = "divsdr";
        var id = "drnav";
        document.getElementById('drshop').innerHTML += `<div id="${objct}"></div>`;
    } else if (flag == 1) {
        var divlst = "divscr";
        var id = "crnav";
        document.getElementById('crshop').innerHTML += `<div id="${objct}"></div>`;
    } else {
        var divlst = "divslnd";
        var id = "lndnav"
        document.getElementById('land').innerHTML += `<div id="${objct}"></div>`;
    }
    document.getElementById(id).innerHTML += `<li><a href="javascript:enableDiv('${objct}', ${divlst})" class="${objct}">${JSON.parse(objj)[objct][4]}</a></li>`;
    document.getElementById(objct).innerHTML += `<p>You have <span id="${i}count">0</span> ${JSON.parse(objj)[objct][4]}s producing`;
    for (var j = 0; j < 17; j++) {
        if (JSON.parse(objj)[objct][2][j] != 0) {
            document.getElementById(objct).innerHTML += `<span id="${i}out${j}">and 0</span> ${Object.keys(JSON.parse(resourcesj))[j].capitalize()} `;
        }
    }
    document.getElementById(objct).innerHTML += `per second<br /><br />
    Buying 1 will cost<br /><br />`;
    for (var j = 0; j < 17; j++) {
        if (JSON.parse(objj)[objct][1][j] != 0) {
            document.getElementById(objct).innerHTML += `<span id="${i}cost${j}">, 0</span> ${Object.keys(JSON.parse(resourcesj))[j].capitalize()} `;
        }
    }
    document.getElementById(objct).innerHTML += `</p>
    <button onclick="buy(obj.${objct}, 1);">Buy 1</button>`;
    i++;
}