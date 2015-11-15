# drawing-canvas
#### What it does?
It allows to draw in the canvas block and has a button to clear the block. All this is achieved through HTML5 and JavaScript.


#### Why?
This was done to crystallize the learning of < canvas> HTML5 tag and related javascript methods.

#### Key methods
- var drawing = document.getElementById(“drawing”);
- var context = drawing.getContext(“2d”);
- context.beginPath();
- context.moveTo(X,Y);
- context.lineTo(X,Y);
- context.lineTo(X,Y);
- context.closePath();  _- this is optional_
- context.stroke();     _- this draws on the path created by moveTo/lineTo_

#### Points to note
Little bit about canvas tag:
- The canvas element has two attributes to control the size of the element's bitmap: _width_ and _height_.
- The _width_ attribute defaults to 300, and the _height_ attribute defaults to 150.
- _e.g._ ```canvasObject.setAttribute('width', '475');```


#### Additional resources
- http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
- https://html.spec.whatwg.org/multipage/scripting.html#attr-canvas-width
