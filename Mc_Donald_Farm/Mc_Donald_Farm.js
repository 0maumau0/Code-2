"use strict";
var HayDay;
(function (HayDay) {
    const hay = new HayDay.Silo("hay", 75, 200, 50);
    const seeds = new HayDay.Silo("seeds", 5, 5, 1);
    const carrot = new HayDay.Silo("carrot", 100, 100, 20);
    const dryfood = new HayDay.Silo("dryfood", 50, 80, 15);
    const pig = new HayDay.Animal("Tom", 3, carrot, 10, "Oink");
    const cat = new HayDay.Animal("satoshi", 4, dryfood, 0.2, "Miau");
    const donkey = new HayDay.Animal("bengeboi", 2, hay, 15, "Ia");
    const chicken = new HayDay.Animal("nugget", 1, seeds, 0.1, "bock bock");
    const cow = new HayDay.Animal("Michelle", 0, hay, 25, "Mow");
})(HayDay || (HayDay = {}));
//# sourceMappingURL=Mc_Donald_Farm.js.map