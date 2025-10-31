namespace Asteroids {


    export class Projektile extends Moveable{
        public lifetime: number;
       

        public constructor( _position: Vector,_velocity:Vector) {
            // console.log("constructor");

            super();

            if (_position) {
                // const newPosition:Vector = new Vector (_position.x,_position.y)
                // newPosition
                this.position = _position.copy();
            }
            else
                this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;



        };

       
        public draw(): void {
            // console.log("draw");
            
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
             crc2.lineWidth = 1 / this.size
            crc2.stroke(asteroidPaths[this.type]);

            crc2.restore()



        };

        public checkHit(_hotspot: Vector): boolean {
            const hitsize: number = 50 * this.size;
            const difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize)


        }
    }




}