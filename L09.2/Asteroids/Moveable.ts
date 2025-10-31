namespace Asteroids {


    export class Moveable {
        public position: Vector;
        public velocity: Vector;
        public expandable: boolean = false;
    
        public constructor( _position?: Vector) {
            // console.log("constructor Moveable");
            if (_position) {
                // const newPosition:Vector = new Vector (_position.x,_position.y)
                // newPosition
                this.position = _position.copy();
            }
            else
                this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);

        };

        public move(_timeslice: number): void {
            // console.log("Moveable move");
            const offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }
            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += crc2.canvas.height;
            }
            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height
            }

        };

        public draw(): void {  
        };

        // public checkHit(_hotspot: Vector): boolean {
        //     const hitsize: number = 50 * this.size;
        //     const difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
        //     return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize)


        // }
    }




}