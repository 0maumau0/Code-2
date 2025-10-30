namespace HayDay {

    export class Cow extends Animal {
        public hooves: number;


        public constructor(_name: string, _hooves: number) {
            super(_name, SPECIES.COW, hay, 20, "moow",);
            this.hooves = _hooves;
        }

        public doSpecialAction(): void {
            console.log("milky way");

        };
    }
    
    export class Cat extends Animal {
        public whiskars: number;


        public constructor(_name: string, _whiskars: number) {
            super(_name, SPECIES.CAT, dryfood, 1, "Miwau",);
            this.whiskars = _whiskars;
        }

        public doSpecialAction(): void {
            const random:number = Math.floor(Math.random()*4)

            switch (random ){

            case (1):
                console.log("Cat caught cow");
                
            break;
            
            case(2):
            console.log("Cat caught Chicken");
            
            break;
            
            
            
            case(3):
            console.log("Cat caught Pig")
            break;

            case(4):
            console.log("Cat caught Donkey")
            break;

            }
        }

    }
 
}