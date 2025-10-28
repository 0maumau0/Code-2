namespace HayDay {

    export class Animal {
        name: string;
        species: SPECIES;
        food: Silo;
        consumption: number;
        sound: string;



        constructor(_name: string, _species: SPECIES, _food: Silo,_consumption: number, _sound: string) {

            this.set(_name, _species, _food, _consumption, _sound);

        }
        set(_a: string, _b: SPECIES, _c: Silo, _d: number, _e: string): void {
            this.name = _a;
            this.species = _b;
            this.food = _c
            this.consumption = _d;
            this.sound = _e;

        }

        eat(): void {

            console.log(this.name + " " + "eating");

            
            this.food.quantity = this.food.quantity - this.consumption;



            console.log(this.food.quantity +" "+"kg"+" "+ this.food.name +" "+"left");

        }

        sing(): void {

            const songtext: string = "Old MacDonald had a farm, Ee-aye, ee-aye, oh And on his farm he had a" + " " + this.name + " " +
                "Ee-aye, ee-aye, ohWith a" + this.sound + this.sound + "" + "here and a" + " " + this.sound + this.sound + " " +
                "thereHere a" + " " + this.sound + " " + ", there a" + " " + this.sound + "" + "Everywhere a" + "" + this.sound + this.sound + " " +
                "Old MacDonald had a farm,Ee-aye, ee-aye, oh."

            console.log(this.name);
            console.log(songtext);

        }
    }



    enum SPECIES {
        COW,
        CHICKEN,
        DONKEY,
        PIG,
        CAT,
    }
}