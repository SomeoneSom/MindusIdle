var divs = ["res", "shop", "upg", "land"];
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
    var div = document.getElementsByClassName(divtag);
    if (divname == divtag) {
      div.style.color = "orange";
    } else {
      div.style.color = "white";
    }
  }
}
enableDiv("res");
colorA("res");
