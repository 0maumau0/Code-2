namespace HayDay {

    export class Animal {
        public name: string;
        public species: SPECIES;
        public food: Silo;
        public consumption: number;
        public sound: string;



        public constructor(_name: string, _species: SPECIES, _food: Silo, _consumption: number, _sound: string) {

            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.consumption = _consumption;
            this.sound = _sound;

        }

       public eat(): void {

            console.log(this.name + " " + "eating");


            this.food.quantity = this.food.quantity - this.consumption;



            console.log(this.food.quantity + " " + "kg" + " " + this.food.name + " " + "left");

        }

       public sing(): void {

            const songtext: string = "Old MacDonald had a farm, Ee-aye, ee-aye, oh And on his farm he had a" + " " + this.name + " " +
                "Ee-aye, ee-aye, ohWith a" + this.sound + this.sound + "" + "here and a" + " " + this.sound + this.sound + " " +
                "thereHere a" + " " + this.sound + " " + ", there a" + " " + this.sound + "" + "Everywhere a" + "" + this.sound + this.sound + " " +
                "Old MacDonald had a farm,Ee-aye, ee-aye, oh."

            console.log(this.name);
            console.log(songtext);

        }

        public doSpecialAction():void {

        }
    }



    export enum SPECIES {
        COW,
        CHICKEN,
        DONKEY,
        PIG,
        CAT,
    }
}