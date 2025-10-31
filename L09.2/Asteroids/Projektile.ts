namespace Asteroids {


    export class Projectile extends Moveable {
        public lifetime: number = 2;


        public constructor(_position: Vector, _velocity: Vector) {
            // console.log("constructor");

            super();

            this.velocity = _velocity.copy();





        };


        public draw(): void {
            // console.log("draw");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.strokeRect(-2,-2,2,2);
            crc2.restore()
        };


        public move(_timeslice:number):void{
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime< 0){
                this.velocity = new Vector(0,0);
            }
        }

    }




}