context = document.getElementById('drawing').getContext("2d");
/*
//Below block is to draw a triangle using javascript
context.strokeStyle = "red";
context.lineJoin = "round";
context.beginPath();
context.moveTo(20,20); //We are taking cursor to these new co-ordinates
context.lineTo(20,130); //draw a line from cursor's current position to these new co-ordinates.
                        //these would be the new co-ordinates of cursor after drawing the line
context.lineTo(100,80); //Again draw a line from cursor position to these new co-ordinates.

context.closePath();    //this will draw the line to starting position after beginPath.
context.stroke(); // The stroke() method  draws the path we have defined with the above moveTo() and lineTo() methods.
                  // The default color is black.
*/


//below code to ensure compatibility with older browser by check if addEventListener is available or not
var EventUtil = {
addHandler: function(element, type, handler){ if (element.addEventListener){
            element.addEventListener(type, handler, false);
            } else if (element.attachEvent){
            element.attachEvent('on' + type, handler);
            } else {
            element['on' + type] = handler; }
            },

removeHandler: function(element, type, handler){ if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
            } else if (element.detachEvent){
            element.detachEvent('on' + type, handler);
            } else {
            element['on' + type] = null; }
            }
} ;

//Drawing canvas related functions
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}
function whenMousedown () {
        var mouseX = event.pageX - this.offsetLeft;
        var mouseY = event.pageY - this.offsetTop;
         paint = true;
         addClick(event.pageX - this.offsetLeft, event.pageY - this.offsetTop);
         redraw();
};
function whenMousemove (){
        if(paint){
          addClick(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, true);
          redraw();
        }
};

function whenMouseup(){
  paint = false;
};
function whenMouseleave(){
  paint = false;
};

function redraw(){
          context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

          context.strokeStyle = "#df4b26";
          context.lineJoin = "round";
          context.lineWidth = 5;

          for(var i=0; i < clickX.length; i++) {
            context.beginPath();
            if(clickDrag[i] && i){
              context.moveTo(clickX[i-1], clickY[i-1]);
             }else{
               context.moveTo(clickX[i]-1, clickY[i]);
             }
             context.lineTo(clickX[i], clickY[i]);
             context.closePath();
             context.stroke();
  }
}
// this clears the canvas and sets the arrays to null
function clearCanvas() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height) // Clears the canvas
  clickX = [];
  clickY = [];
  clickDrag = [];
};
drawingCanvas = document.getElementById('drawing')
EventUtil.addHandler (drawingCanvas, 'mousedown', whenMousedown);
EventUtil.addHandler (drawingCanvas, 'mousemove', whenMousemove);
EventUtil.addHandler (drawingCanvas, 'mouseup', whenMouseup);
EventUtil.addHandler (drawingCanvas, 'mouseleave', whenMouseleave);
EventUtil.addHandler(document.getElementById('clearBtn'), 'click', clearCanvas) ;

drawingCanvas.setAttribute('width', '780');
drawingCanvas.setAttribute('height', '500');
