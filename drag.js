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

function draw(){
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');

    ctx.rect(100, 100, 100, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
     
    // draw the stroke
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();
  }
}
draw();