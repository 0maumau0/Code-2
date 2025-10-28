"use strict";
var HayDay;
(function (HayDay) {
    class Animal {
        name;
        species;
        food;
        consumption;
        sound;
        constructor(_name, _species, _food, _consumption, _sound) {
            this.set(_name, _species, _food, _consumption, _sound);
        }
        set(_a, _b, _c, _d, _e) {
            this.name = _a;
            this.species = _b;
            this.food = _c;
            this.consumption = _d;
            this.sound = _e;
        }
    }
    HayDay.Animal = Animal;
    let SPECIES;
    (function (SPECIES) {
        SPECIES[SPECIES["DOG"] = 0] = "DOG";
        SPECIES[SPECIES["CHICKEN"] = 1] = "CHICKEN";
        SPECIES[SPECIES["DONKEY"] = 2] = "DONKEY";
        SPECIES[SPECIES["PIG"] = 3] = "PIG";
    })(SPECIES || (SPECIES = {}));
})(HayDay || (HayDay = {}));
//# sourceMappingURL=Animal.js.map