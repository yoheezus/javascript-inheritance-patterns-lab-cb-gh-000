function Point(x, y) {
    this.x = x
    this.y = y;
    this.toString = () => `(${x}, ${y})`
}

function Shape() {
    this.addToPlane = (x, y) => {
        this.position = new Point(x, y)
    }
}
