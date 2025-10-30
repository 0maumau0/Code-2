namespace HayDay {

    export const hay: Silo = new Silo("hay", 75, 200, 50);
    export const seeds: Silo = new Silo("seeds", 5, 5, 1);
    export const carrot: Silo = new Silo("carrot", 100, 100, 20);
    export const dryfood: Silo = new Silo("dryfood", 50, 80, 15);

    export const pig: Animal = new Animal("Tom",3,carrot,10,"Oink");
    export const cat: Cat = new Cat("satoshi",1);
    export const donkey: Animal = new Animal("bengeboi", 2, hay, 15, "Ia");
    export const chicken: Animal = new Animal("nugget", 1, seeds, 0.5, "bock bock");
    export const cow: Cow = new Cow("mo",2);

    const animalcollection: Animal[] = [pig, donkey, cat, chicken, cow]
    const silocollection: Silo[] = [dryfood, hay, seeds, carrot]

    for (let i: number = 0; i < 10; i++) {

        console.log("day"+" "+i);
        

        for (let i: number = 0; i < Animal.length; i++) {


            animalcollection[i].sing();
            animalcollection[i].eat();
            animalcollection[i].doSpecialAction();

        }

        for (let i: number = 0; i < Silo.length; i++) {
            silocollection[i].restock();

        }
         }

    }