namespace HayDay {

  export  class Animal {
        name: string;
        species: SPECIES;
        food: Silo;
        consumption: number;
        sound: string;



        constructor(_name: string, _species: SPECIES, _food: Silo,
            _consumption: number, _sound: string) {

            this.set(_name,_species,_food,_consumption,_sound);

        }
        set(_a:string, _b:SPECIES,_c:Silo,_d:number,_e:string): void {
            this.name = _a;
            this.species = _b; 
            this.food = _c
            this.consumption = _d;
            this.sound= _e;

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