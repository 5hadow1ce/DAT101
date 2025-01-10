"use strict";
/**
 * @library lib2d
 * @description A library for 2d Graphics classes
 */

class TPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class TPosition extends TPoint {
    constructor(x, y) {
        super(x, y);
    }

    clone() {
        return new TPosition(this.x, this.y);
    }

    distanceToPoint(p) {
        return Math.hypot(this.x - p.x, this.y - p.y);
    }
} // end of class TPosition


class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
}

class Rectangle {
    constructor(topLeft, width, height) {
        this.topLeft = topLeft;
        this.width = width;
        this.height = height;
    }
}

export default {
    TPoint, 
    /**
     *  @class TPoint
     *  @description represents a point in 2D space
     */
    TPosition, 
    /**  
     * @class TPosition 
     * @description represents a position in 2D space, as well as contains a method to calculate the distance to another point, and a method to clone TPoint
     */
    Circle,
    Rectangle
};