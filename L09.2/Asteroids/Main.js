"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", hndLoad);
    const asteroids = [];
    let projektile;
    function hndLoad(_event) {
        console.log("Asteroids starting");
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillRect(0, 0, canvas.width, canvas.height);
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "white";
        Asteroids.createPaths();
        console.log("Asteroids paths", Asteroids.asteroidPaths);
        createAsteroids(5);
        //createShip();
        canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress",hndlKeypress);
        // canvas.addEventListener("mousemove",sendShip);
        window.setInterval(update, 20);
    }
    function loadLaser(_event) {
        const origin = new Asteroids.Vector(_event.offsetX, _event.offsetY);
        const velocity = new Asteroids.Vector(0, 0);
        velocity.random(100, 100);
        projektile = new Asteroids.Projektile(origin, velocity);
    }
    function shootLaser(_event) {
        console.log("shoot Laser");
        const hotspot = new Asteroids.Vector(_event.offsetX, _event.offsetY);
        const asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit) {
            breakAsteroid(asteroidHit);
        }
    }
    function getAsteroidHit(_hotspot) {
        for (const asteroid of asteroids) {
            if (asteroid.checkHit(_hotspot)) {
                return asteroid;
            }
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const fragment = new Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        const index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function createAsteroids(_numberAsteroids) {
        console.log("create asteroids");
        for (let i = 0; i < _numberAsteroids; i++) {
            const asteroid = new Asteroids.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("update");
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height);
        for (const asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        projektile.move(1 / 50);
        projektile.draw();
        //ship.draw();
        //hndlCollisions();
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Main.js.map