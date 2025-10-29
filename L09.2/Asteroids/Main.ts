namespace Asteroids {
    window.addEventListener("load", hndLoad);
    export let crc2: CanvasRenderingContext2D;

    function hndLoad(_event: Event): void {

        console.log("Asteroids starting");
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillRect(0,0 ,canvas.width,canvas.height);
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        

        createPaths();
        console.log("Asteroids paths", asteroidPaths);

        const pinky: Asteroid = new Asteroid(1);
        console.log(pinky);

        for (let i:number = 0; i<50; i++){
        pinky.draw();
        pinky.move(0.1);
        };
      




    }
}