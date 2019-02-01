function Point(x, y) {
    this.x = x
    this.y = y;
}

Point.prototype.toString =  function() {return `(${x}, ${y})`}

function Side(length) {
    this.length = length
}

function Shape() {}

Shape.prototype.addToPlane = (x, y) => {
        this.position = new Point(x, y)
}
Shape.prototype.move = function(x, y) {
        this.addToPlane(x, y)
}


function Circle(radius) {
    Shape.call(this)
    this.radius = radius
}

// function Quadrilateral(x, y, sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
// 	// Inheriting so must call parent object and pass this context
// 	Shape.call(this, 4, x, y);
// 	this.sideOneLength = sideOneLength
// 	this.sideTwoLength = sideTwoLength
// 	this.sideThreeLength = sideThreeLength
// 	this.sideFourLength = sideFourLength
// }
// // inherit from Shape prototype
// Quadrilateral.prototype = Object.create(Shape.prototype)
// Quadrilateral.prototype.constructor = Quadrilateral
//
// //extend Quadrilateral
// Quadrilateral.prototype.perimeter = function() {
// 	return this.sideOneLength + this.sideTwoLength + this.sideThreeLength + this.sideFourLength
// }
