"use strict";
var Asteroids;
(function (Asteroids) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            // console.log("constructor Moveable");
            if (_position) {
                // const newPosition:Vector = new Vector (_position.x,_position.y)
                // newPosition
                this.position = _position.copy();
            }
            else
                this.position = new Asteroids.Vector(0, 0);
            this.velocity = new Asteroids.Vector(0, 0);
        }
        ;
        move(_timeslice) {
            // console.log("Moveable move");
            const offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += Asteroids.crc2.canvas.width;
            }
            if (this.position.x > Asteroids.crc2.canvas.width) {
                this.position.x -= Asteroids.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += Asteroids.crc2.canvas.height;
            }
            if (this.position.y > Asteroids.crc2.canvas.height) {
                this.position.y -= Asteroids.crc2.canvas.height;
            }
        }
        ;
        draw() {
        }
        ;
    }
    Asteroids.Moveable = Moveable;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Moveable.js.map