# KeepRatio 
#### $.keepRatio, $.fn.keepRatio, $.fn.freeRatio, $.fn.ratio

### jQuery plugins to keep, free, get or set the aspectratio of elements

- $.fn.keepRatio updates after the user has ended window resizing 
- The inertia time for this behaviour can be tuned
- $.fn.freeRatio frees elements from auto resizing
- The initial aspectratio can be restored after freeing

Keeps the current aspectratio
```
$( el ).keepRatio()

```
Sets the aspectratio and keeps it. Stores the initial aspectratio
```
$( el ).keepRatio( 1 )

```
Frees the aspectratio. Set true to restore the initial aspectratio
```
$( el ).freeRatio()

$( el ).freeRatio( true )

```
Gets or sets the aspectratio 
```
$( el ).ratio()

$( el ).ratio( 1 )

```
HTML notation by data attribute
```
<div data-keep-ratio=1></div>

```
Register them via script. Selects elements by the data attribute
```
$.keepRatio.register()

```