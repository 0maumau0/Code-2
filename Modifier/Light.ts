namespace Fire {

    export abstract class Light {
        public strength: number
        public color: string

        public constructor(_strength: number, _color: string) {
            this.strength = _strength;
            this.color = _color;
        }
       
        public static substract(_first: number, _second: number): number {
            const number: number = _first - _second;

            return number
        }

        
        public brightness(_add: number): void {
            this.strength = this.strength + _add;
            console.log(this.strength);

        }

        public abstract log(): void


    }

}