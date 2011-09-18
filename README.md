# raphael.coordinates.js

Calculates the length in *pixels* between two coordinates using a [Raphael.js path](http://raphaeljs.com/reference.html#path).

## Examples

Create a basic path.
 
``` javascript
var paper = Raphael(10, 50, 320, 200);
var path = paper.path("M10 10 L90 90 L21 18 L19 31");
```

Get length from the *M10, 10* coordinate to *L21, 18*.

``` javascript
path.getLengthBetweenCoordinates({
  y: 10,
  x: 10 
}, {
  x: 21,
  y: 18
});

/* => 212.86170582141557 */
```

Get length from start (*M10, 10*) to *M21, 18*.

``` javascript
path.getLengthFromStartTo(21, 18);
/* => 212.86170582141557 */
```

Get length from the end (*L19, 31*) to *L90, 90*.

``` javascript
path.getLengthFromEndTo(90, 90);
/* => 112.87756726953388 */
```

## Requirements

[Raphael.js](http://raphaeljs.com/) 1.5.2 or greater.

## License

Released under the *MIT license*.