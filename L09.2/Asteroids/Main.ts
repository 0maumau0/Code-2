namespace Asteroids {
    window.addEventListener("load", hndLoad);
    export let crc2: CanvasRenderingContext2D;


    let asteroids: Asteroid[] = [];

    function hndLoad(_event: Event): void {

        console.log("Asteroids starting");
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";


        createPaths();
        console.log("Asteroids paths", asteroidPaths);

        createAsteroids(5);
        //createShip();

        // canvas.addEventListener("mousedown",loadLaser);
         canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress",hndlKeypress);
        // canvas.addEventListener("mousemove",sendShip);

        window.setInterval(update, 20);
    }

    function shootLaser(_event:MouseEvent):void{
        console.log("shoot Laser");
        const hotspot : Vector = new Vector(_event.offsetX, _event.offsetY);
        let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        
        if (asteroidHit){
            breakAsteroid(asteroidHit);
        }

    }

    function getAsteroidHit(_hotspot:Vector):Asteroid | null{

        for (let asteroid of asteroids){
           if (asteroid.checkHit(_hotspot)){
            return asteroid;

           }
        }
        return null;
    }

    function breakAsteroid(_asteroid:Asteroid):void{
        if (_asteroid.size > 0.3){
            for (let i:number =0 ; i<2;i++){
                const fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);

            }

        }

        const index:number  = asteroids.indexOf(_asteroid);
        asteroids.splice(index,1);
    }

    function createAsteroids(_numberAsteroids: number): void {
        console.log("create asteroids");
        for (let i: number = 0; i < _numberAsteroids; i++) {
            const asteroid: Asteroid = new Asteroid(1.0);
            asteroids.push(asteroid);
        }

    }

    function update(): void {
        console.log("update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height)

        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw(asteroid);
        }

        //ship.draw();
        //hndlCollisions();
    }

}