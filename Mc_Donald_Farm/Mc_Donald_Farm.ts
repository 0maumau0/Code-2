namespace HayDay {

    const hay: Silo = new Silo("hay", 75, 200, 50);
    const seeds: Silo = new Silo("seeds", 5, 5, 1);
    const carrot: Silo = new Silo("carrot", 100, 100, 20);
    const dryfood: Silo = new Silo("dryfood", 50, 80, 15);

    const pig: Animal = new Animal("Tom",3,carrot,10,"Oink");
    const cat: Animal = new Animal("satoshi", 4, dryfood, 1, "Miau");
    const donkey: Animal = new Animal("bengeboi", 2, hay, 15, "Ia");
    const chicken: Animal = new Animal("nugget", 1, seeds, 0.5, "bock bock");
    const cow: Animal = new Animal("Michelle", 0, hay, 25, "Mow");

    const animalcollection: Animal[] = [pig, donkey, cat, chicken, cow]
    const silocollection: Silo[] = [dryfood, hay, seeds, carrot]

    for (let i: number = 0; i < 10; i++) {

        console.log("day"+" "+i);
        

        for (let i: number = 0; i < Animal.length; i++) {


            animalcollection[i].sing();
            animalcollection[i].eat();

        }

        for (let i: number = 0; i < Silo.length; i++) {
            silocollection[i].restock();

        }
         }

    }