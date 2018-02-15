// // var Rectangle = (function () {
// //     function Rectangle(canvas) {
// //         var inst=this;
// //         this.canvas = canvas;
// //         this.className= 'Rectangle';
// //         this.isDrawing = false;
// //         this.bindEvents();
// //     }

// //     Rectangle.prototype.bindEvents = function() {
// //     var inst = this;
// //     inst.canvas.on('mouse:down', function(o) {
// //       inst.onMouseDown(o);
// //     });
// //     inst.canvas.on('mouse:move', function(o) {
// //       inst.onMouseMove(o);
// //     });
// //     inst.canvas.on('mouse:up', function(o) {
// //       inst.onMouseUp(o);
// //     });
// //     inst.canvas.on('object:moving', function(o) {
// //       inst.disable();
// //     })
// //   }
// //     Rectangle.prototype.onMouseUp = function (o) {
// //       var inst = this;
// //       inst.disable();
// //     };

// //     Rectangle.prototype.onMouseMove = function (o) {
// //       var inst = this;
      

// //       if(!inst.isEnable()){ return; }
// //       console.log("mouse move rectange");
// //       var pointer = inst.canvas.getPointer(o.e);
// //       var activeObj = inst.canvas.getActiveObject();

// //       activeObj.stroke= 'red',
// //       activeObj.strokeWidth= 5;
// //       activeObj.fill = 'transparent';

// //       if(origX > pointer.x){
// //           activeObj.set({ left: Math.abs(pointer.x) }); 
// //       }
// //       if(origY > pointer.y){
// //           activeObj.set({ top: Math.abs(pointer.y) });
// //       }

// //       activeObj.set({ width: Math.abs(origX - pointer.x) });
// //       activeObj.set({ height: Math.abs(origY - pointer.y) });

// //       activeObj.setCoords();
// //       inst.canvas.renderAll();

// //     };

// //     Rectangle.prototype.onMouseDown = function (o) {
// //       var inst = this;
// //       inst.enable();

// //       var pointer = inst.canvas.getPointer(o.e);
// //       origX = pointer.x;
// //       origY = pointer.y;

// //     	var rect = new fabric.Rect({
// //           left: origX,
// //           top: origY,
// //           originX: 'left',
// //           originY: 'top',
// //           width: pointer.x-origX,
// //           height: pointer.y-origY,
// //           angle: 0,
// //           transparentCorners: false,
// //           hasBorders: false,
// //           hasControls: false
// //       });

// //   	  inst.canvas.add(rect).setActiveObject(rect);
// //     };

// //     Rectangle.prototype.isEnable = function(){
// //       return this.isDrawing;
// //     }

// //     Rectangle.prototype.enable = function(){
// //       this.isDrawing = true;
// //     }

// //     Rectangle.prototype.disable = function(){
// //       this.isDrawing = false;
// //     }

// //     return Rectangle;
// // }());

// var canvas, context;

// (function drawSquare(){
//   var canvas = document.getElementById("canvas");
//   var context = canvas.getContext("2d");
//   context.rect(200, 200, 20, 20);
//   context.stroke();
// })();

// var Circle = (function() {
//   function Circle(canvas) {
//     this.canvas = canvas;
//     this.className = 'Circle';
//     this.isDrawing = false;
//     this.bindEvents();
//   }

//   Circle.prototype.bindEvents = function() {
//     var inst = this;
//     inst.canvas.on('mouse:down', function(o) {
//       inst.onMouseDown(o);
//     });
//     inst.canvas.on('mouse:move', function(o) {
//       inst.onMouseMove(o);
//     });
//     inst.canvas.on('mouse:up', function(o) {
//       inst.onMouseUp(o);
//     });
//     inst.canvas.on('object:moving', function(o) {
//       inst.disable();
//     })
//   }

//   Circle.prototype.onMouseUp = function(o) {
//     var inst = this;
//     inst.disable();
//   };

//   Circle.prototype.onMouseMove = function(o) {
//     var inst = this;
//     if (!inst.isEnable()) {
//       return;
//     }

//     var pointer = inst.canvas.getPointer(o.e);
//     var activeObj = inst.canvas.getActiveObject();

//     activeObj.stroke = 'red',
//       activeObj.strokeWidth = 5;
//     activeObj.fill = 'red';

//     if (origX > pointer.x) {
//       activeObj.set({
//         left: Math.abs(pointer.x)
//       });
//     }

//     if (origY > pointer.y) {
//       activeObj.set({
//         top: Math.abs(pointer.y)
//       });
//     }

//     activeObj.set({
//       rx: Math.abs(origX - pointer.x) / 2
//     });
//     activeObj.set({
//       ry: Math.abs(origY - pointer.y) / 2
//     });
//     activeObj.setCoords();
//     inst.canvas.renderAll();
//   };

//   Circle.prototype.onMouseDown = function(o) {
//     var inst = this;
//     inst.enable();

//     var pointer = inst.canvas.getPointer(o.e);
//     origX = pointer.x;
//     origY = pointer.y;

//     var ellipse = new fabric.Ellipse({
//       top: origY,
//       left: origX,
//       rx: 0,
//       ry: 0,
//       transparentCorners: false,
//       hasBorders: false,
//       hasControls: false
//     });

//     inst.canvas.add(ellipse).setActiveObject(ellipse);
//   };

//   Circle.prototype.isEnable = function() {
//     return this.isDrawing;
//   }

//   Circle.prototype.enable = function() {
//     this.isDrawing = true;
//   }

//   Circle.prototype.disable = function() {
//     this.isDrawing = false;
//   }

//   return Circle;
// }());




// var canvas = new fabric.Canvas('canvas');
// var circle = new Circle(canvas);




// // var canvas = new fabric.Canvas('canvas');
// // var arrow = new Rectangle(canvas);

// // var canvas = new fabric.Canvas('canvas');
// // var shape = ();

// // var shape = {
// //   circle: drawCircle;
// //   rectangle: drawRectangle;
// // }

// // shape.circle();
// // shape.rectangle();

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

document.getElementById('draw-square').addEventListener('click', function() {
  let sx = Number(document.getElementById('pos-x').value);
  let sy = Number(document.getElementById('pos-y').value);
  let s = Number(document.getElementById('side').value);
  drawSquare(sx, sy, s);
});

document.getElementById('draw-circle').addEventListener('click', function() {
  let cx = Number(document.getElementById('center-x').value);
  let cy = Number(document.getElementById('center-y').value);
  let r = Number(document.getElementById('radius').value);
  drawCircle(cx, cy, r);
});

document.getElementById('tile').addEventListener('click', function() {
  drawTiles();
});



function drawSquare(sx, sy, s) {
  // console.log("pos x", sx);
  ctx.strokeStyle = "black";
  ctx.rect(sx, sy, s, s);
  ctx.stroke();
  document.getElementById('draw-square').disabled = true;

  if(document.getElementById('draw-circle').disabled) {
    document.getElementById('tile').disabled = false;
  }
}

function drawCircle(cx, cy, r) {

  ctx.strokeStyle="black";
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, 2 * Math.PI, false);
  ctx.stroke();
  document.getElementById('draw-circle').disabled = true;

  if(document.getElementById('draw-square').disabled) {
    document.getElementById('tile').disabled = false;
  }
}

function drawTiles() {
  let offset = 2;
  let tile_length = 5;
  let current_x = Number(document.getElementById('pos-x').value);
  let current_y = Number(document.getElementById('pos-y').value);
  let s = Number(document.getElementById('side').value);

  for(let i= current_y+offset; i+tile_length<current_y+offset+s; i+=tile_length+offset) {
    console.log("current Y", i);
    for (let j = current_x+offset; j+tile_length<current_x+offset+s; j+=tile_length+offset) {
      console.log("current x", j)
      drawtile(j,i,tile_length);
    }
  }
}

function drawtile(x, y, l) {
  console.log("pos x", x);
  console.log("pos y", y);
  ctx.strokeStyle = "white";
  ctx.fillStyle = "black";
  ctx.rect(x, y, l, l);
  ctx.fill();
  ctx.stroke();
}