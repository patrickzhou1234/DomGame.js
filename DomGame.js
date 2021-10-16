class Dom {
  constructor(name) {
    this.name = name;
    document.getElementById(this.name);
  }
  Color(color) { // params: color, id
    this.color = color;
    document.getElementById(this.name).style.color = color;
  }
  Position(x, y) { // params: x coord, y coord, id
    this.x = x;
    this.y = y;
    document.getElementById(this.name).style.position = "absolute";
    document.getElementById(this.name).style.left = x;
    document.getElementById(this.name).style.top = y;
  }
  Rotation(angle) { // params: angle
    this.angle = angle;
    document.getElementById(this.name).style.transform = 'rotate('+angle+'deg)';
  }
  Rect(x, y, width, height, color, id) { // params: x coord, y coord, width, height, color, id
    var newRect = document.createElement("div");
    newRect.style.cssText = "left: "+x+";top: "+y+";position: absolute;width: "+width+";height: "+height+";background-color:"+color+";";
    newRect.id = id;
    document.body.appendChild(newRect);
  }
  MoveTo(x, y, speed) { // params: x coord, y coord, speed, id
    document.getElementById(this.name).style.top = document.getElementById(this.name).offsetTop + 'px';
    document.getElementById(this.name).style.left = document.getElementById(this.name).offsetLeft + 'px';
    document.getElementById(this.name).style.transition = "left "+speed+" linear, top "+speed+" linear";
    document.getElementById(this.name).style.left = x;
    document.getElementById(this.name).style.top = y;
  }
  PointAt(x, y) { // params:x,y
    var dy = y-(document.getElementById(this.name).offsetTop+document.getElementById(this.name).offsetHeight/2);
    var dx = x-(document.getElementById(this.name).offsetLeft+document.getElementById(this.name).offsetWidth/2);
    var angle = Math.atan2(dy, dx)*180/Math.PI;
    document.getElementById(this.name).style.transform = 'rotate('+angle+'deg)';
  }
}

const _Dom = Dom;
Dom = function(name) {
  return new _Dom(name);
};
Dom.prototype = _Dom.prototype;
