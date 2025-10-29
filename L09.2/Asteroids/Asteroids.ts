namespace Asteroids {


    export class Asteroid {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            console.log("constructor");


        };

        move(_timeslice: number): void {
            console.log("move");


        };

        draw(): void {
            console.log("draw");


        };
    }




}