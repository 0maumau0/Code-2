"use strict";
var Asteroids;
(function (Asteroids) {
    class Projektile extends Asteroids.Moveable {
        lifetime;
        constructor(_position, _velocity) {
            // console.log("constructor");
            super();
            if (_position) {
                // const newPosition:Vector = new Vector (_position.x,_position.y)
                // newPosition
                this.position = _position.copy();
            }
            else
                this.position = new Asteroids.Vector(0, 0);
            this.velocity = new Asteroids.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        ;
        draw() {
            // console.log("draw");
            Asteroids.crc2.save();
            Asteroids.crc2.translate(this.position.x, this.position.y);
            Asteroids.crc2.scale(this.size, this.size);
            Asteroids.crc2.translate(-50, -50);
            Asteroids.crc2.lineWidth = 1 / this.size;
            Asteroids.crc2.stroke(Asteroids.asteroidPaths[this.type]);
            Asteroids.crc2.restore();
        }
        ;
        checkHit(_hotspot) {
            const hitsize = 50 * this.size;
            const difference = new Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    Asteroids.Projektile = Projektile;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Projektile.js.map