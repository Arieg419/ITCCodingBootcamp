var divs = document.getElementsByTagName('div');

for(var i=0; i<divs.length; i++) {
  divs[i].onclick = function(e) {
    // e = e || event
    var target = e.target;
    
    alert("target = "+target.className+", this="+this.className);

  };
}