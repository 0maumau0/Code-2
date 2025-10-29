"use strict";
var Asteroids;
(function (Asteroids) {
    class Asteroid {
        position;
        velocity;
        type = 0;
        size = 0;
        constructor(_size) {
            console.log("constructor");
            this.position = new Asteroids.Vector(0, 0);
            this.velocity = new Asteroids.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        ;
        move(_timeslice) {
            console.log("move");
        }
        ;
        draw() {
            console.log("draw");
        }
        ;
    }
    Asteroids.Asteroid = Asteroid;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Asteroids.js.map