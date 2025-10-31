"use strict";
var Asteroids;
(function (Asteroids) {
    class Projectile extends Asteroids.Moveable {
        lifetime = 5;
        constructor(_position, _velocity) {
            // console.log("constructor");
            super(_position);
            this.velocity = _velocity.copy();
        }
        ;
        draw() {
            // console.log("draw");
            Asteroids.crc2.save();
            Asteroids.crc2.translate(this.position.x, this.position.y);
            Asteroids.crc2.strokeRect(-2, -2, 2, 2);
            Asteroids.crc2.restore();
        }
        ;
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0) {
                this.expandable = true;
            }
        }
    }
    Asteroids.Projectile = Projectile;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Projektile.js.map