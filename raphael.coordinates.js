/*
 Examples:
 var paper = Raphael(10, 50, 320, 200);
 var path = paper.path("M10 10 L90 90 L21 18 L19 31");
 
 path.getSubLengthByCord({
   y: 10,
   x: 10 
 }, {
   x: 21,
   y: 18
 });
 # => 212.86170582141557
 
 path.getLengthFromStartByCord(21, 18); # => 212.86170582141557
 
 path.getLengthFromEndByCord(90, 90); # => 112.87756726953388
*/

/*
  Returns length in pixels between two points.
  @from Hash containing x and y cords for start point.
  @to Hash containing x and y cords for end point.
  Example Hash {
    x: 1000,
    y: 2000
  }
*/
Raphael.el.getSubLengthByCord = function (from, to) {
  var path, max, min, calculation, start, stop, i, n, found = {}, sum = 0;
  
  calculation = function (start, stop) {
    var deltaX = start.x - stop.x;
    var deltaY = start.y - stop.y;
    
    return Math.sqrt(Math.pow(deltaY, 2) + Math.pow(deltaX, 2));
  };
  
  for (i = this.attrs.path.length - 1; i >= 0; i--){
    path = this.attrs.path[i];
    if(path[1] === from.x && path[2] === from.y){
      found.from = i;
    }
    
    if(path[1] === to.x && path[2] === to.y){
      found.to = i;
    }
  };
  
  if(found.to !== undefined && found.from !== undefined){
    max = Math.max(found.to, found.from);
    min = Math.min(found.to, found.from);
    
    for (n = min; n < max; n++) {
      start = this.attrs.path[n];
      stop = this.attrs.path[n + 1];
      sum += calculation({
        x: start[1],
        y: start[2]
      }, {
        x: stop[1],
        y: stop[2]
      });
    };
    return sum;
  }
  
  return null;
};

/*
  Returns length in pixels from the first coordinate.
  @x Integer containing the x containing.
  @y Integer containing the y coordinate.
*/
Raphael.el.getLengthFromStartByCord = function(x, y) {
  var path = this.attrs.path;
  return this.getSubLengthByCord({
    x: path[0][1],
    y: path[0][2]
  }, {
    x: x,
    y: y
  });
};

/*
  Returns length in pixels from the last coordinate.
  @x Integer containing the x containing.
  @y Integer containing the y coordinate.
*/
Raphael.el.getLengthFromEndByCord = function(x, y) {
  var length, path;
  path = this.attrs.path;
  length = path.length;
  
  return this.getSubLengthByCord({
    x: path[length - 1][1],
    y: path[length - 1][2]
  }, {
    x: x,
    y: y
  });
};