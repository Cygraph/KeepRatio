# KeepRatio 
Version 0.2.1

### jQuery plugins to keep, free, get or set the aspectratio of elements
#### $.keepRatio, $.fn.keepRatio, $.fn.freeRatio, $.fn.ratio

- $.fn.keepRatio updates after the user has ended window resizing 
- The inertia time for this behaviour can be tuned
- $.fn.freeRatio frees elements from auto resizing
- The initial aspectratio can be restored after freeing

About aspectratio (width/height):
smaller than 1 is portrait, 1 is square, bigger than 1 is landscape

I use it in responsive websites for thumb menus, grids, svg-graphics and player


Keeps the current aspectratio
```
$( els ).keepRatio()

```
Sets the aspectratio and keeps it. Stores the initial aspectratio
```
$( els ).keepRatio( 1 )

```
Frees the aspectratio. Set true to restore the initial aspectratio
```
$( els ).freeRatio()

$( els ).freeRatio( true )

```
Gets or sets the aspectratio. Gets from the first in the query. Sets all in the query
```
$( el ).ratio()

$( els ).ratio( 1 )

```
HTML notation by data attribute
```
<div data-keep-ratio=1></div>

```
Register them via script. Selects elements by the data attribute
```
$.keepRatio.register()

or

$( document ).ready( $.keepRatio.register )

```
Gets or sets the inertia time in milliseconds. This defines the event delay while resizing. 0 ms means fireing the event as usual, which is very often.
Default is 50 ms so the rendering of the ratio occurs only after resize has ended. At mobiles it happens on orientation change

```
$.keepRatio.inertia()

$.keepRatio.inertia( 75 )

```