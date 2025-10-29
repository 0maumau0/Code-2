"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        console.log("Asteroids starting");
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "white";
        Asteroids.createPaths();
        console.log("Asteroids paths", Asteroids.asteroidPaths);
        const pinky = new Asteroids.Asteroid(1);
        console.log(pinky);
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Main.js.map