"use strict";
var HayDay;
(function (HayDay) {
    HayDay.hay = new HayDay.Silo("hay", 75, 200, 50);
    HayDay.seeds = new HayDay.Silo("seeds", 5, 5, 1);
    HayDay.carrot = new HayDay.Silo("carrot", 100, 100, 20);
    HayDay.dryfood = new HayDay.Silo("dryfood", 50, 80, 15);
    HayDay.pig = new HayDay.Animal("Tom", 3, HayDay.carrot, 10, "Oink");
    HayDay.cat = new HayDay.Cat("satoshi", 1);
    HayDay.donkey = new HayDay.Animal("bengeboi", 2, HayDay.hay, 15, "Ia");
    HayDay.chicken = new HayDay.Animal("nugget", 1, HayDay.seeds, 0.5, "bock bock");
    HayDay.cow = new HayDay.Cow("mo", 2);
    const animalcollection = [HayDay.pig, HayDay.donkey, HayDay.cat, HayDay.chicken, HayDay.cow];
    const silocollection = [HayDay.dryfood, HayDay.hay, HayDay.seeds, HayDay.carrot];
    for (let i = 0; i < 10; i++) {
        console.log("day" + " " + i);
        for (let i = 0; i < HayDay.Animal.length; i++) {
            animalcollection[i].sing();
            animalcollection[i].eat();
            animalcollection[i].doSpecialAction();
        }
        for (let i = 0; i < HayDay.Silo.length; i++) {
            silocollection[i].restock();
        }
    }
})(HayDay || (HayDay = {}));
//# sourceMappingURL=Mc_Donald_Farm.js.map