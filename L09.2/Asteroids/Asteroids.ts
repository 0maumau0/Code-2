namespace Asteroids {


    export class Asteroid {
        public position: Vector;
        public velocity: Vector;
        public type: number = 0;
        public size: number = 0;

        public constructor(_size: number) {
            console.log("constructor");
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100,200);
            this.type = Math.floor(Math.random()*4);
            this.size = _size;
            


        };

        public move(_timeslice: number): void {
            console.log("move");


        };

        public draw(): void {
            console.log("draw");


        };
    }




}