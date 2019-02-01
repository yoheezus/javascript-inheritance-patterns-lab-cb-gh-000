function Point(x, y) {
    this.x = x
    this.y = y;
}
// Extend functions by adding to Prototype
Point.prototype.toString =  function() {return `(${this.x}, ${this.y})`}

function Side(length) {
    this.length = length
}

function Shape() {}
// Extend functions by adding to Prototype
Shape.prototype.addToPlane = function(x, y) {
        this.position = new Point(x, y)
}
// Extend functions by adding to Prototype
Shape.prototype.move = function(x, y) {
        this.addToPlane(x, y)
}


function Circle(radius) {
    Shape.call(this)
    this.radius = radius
}
//inherit from Shape Prototype
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

// extend Circle
Circle.prototype.area = function() {
    return (Math.PI * (this.radius ** 2.0))
}

Circle.prototype.circumference = function() {
    return ((Math.PI * this.radius) * 2.0)
}

Circle.prototype.diameter = function() {
    return this.radius * 2
}

function Polygon(sides) {
    Shape.call(this)
    this.sides = sides
}
// Inherit from shape
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Shape

//extend Polygon
Polygon.prototype.numberOfSides = function() {
    return this.sides.length
}
Polygon.prototype.perimeter = function() {
    var total = 0
    for (let i = 0; i < this.sides.length; i++) {
        total += this.sides[i].length
    }
    return total
}

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
    Polygon.call(this, [
        new Side(sideOneLength),
        new Side(sideTwoLength),
        new Side(sideThreeLength),
        new Side(sideFourLength)
    ])
}
// inherit from Polygon
Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral


function Rectangle(width, height) {
    Quadrilateral.call(this, width, height, width, height)
    this.width = width
    this.height = height
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
