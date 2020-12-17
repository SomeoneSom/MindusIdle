var divs = ["res", "shop", "upg", "land"]
function enableDiv(divname) {
  for (var j = 0; j < divs.length; j++) {
    var divtag = divs[j]
    var nodes = document.getElementById(divtag).getElementsByTagName('*');
    for(var i = 0; i < nodes.length; i++){
      if (divtag == divname) {
        nodes[i].disabled = false;
      } else {
        nodes[i].disabled = true;
      }
    }
  }
}
enableDiv("res")
