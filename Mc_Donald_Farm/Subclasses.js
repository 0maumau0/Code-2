"use strict";
var HayDay;
(function (HayDay) {
    class Cow extends HayDay.Animal {
        hooves;
        constructor(_name, _hooves) {
            super(_name, HayDay.SPECIES.COW, HayDay.hay, 20, "moow");
            this.hooves = _hooves;
        }
        doSpecialAction() {
            console.log("milky way");
        }
        ;
    }
    HayDay.Cow = Cow;
    class Cat extends HayDay.Animal {
        whiskars;
        constructor(_name, _whiskars) {
            super(_name, HayDay.SPECIES.CAT, HayDay.dryfood, 1, "Miwau");
            this.whiskars = _whiskars;
        }
        doSpecialAction() {
            const random = Math.floor(Math.random() * 4);
            switch (random) {
                case (1):
                    console.log("Cat caught cow");
                    break;
                case (2):
                    console.log("Cat caught Chicken");
                    break;
                case (3):
                    console.log("Cat caught Pig");
                    break;
                case (4):
                    console.log("Cat caught Donkey");
                    break;
            }
        }
    }
    HayDay.Cat = Cat;
})(HayDay || (HayDay = {}));
//# sourceMappingURL=Subclasses.js.map