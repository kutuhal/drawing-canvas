# drawing-canvas
#### What it does?
It allows to draw in the canvas block and has a button to clear the block. All this is achieved through HTML5 and JavaScript.
> This has a bug if CSS is included; I am trying to fix it. 

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

#### Additional resources
http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
