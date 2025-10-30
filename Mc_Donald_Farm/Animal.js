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
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.consumption = _consumption;
            this.sound = _sound;
        }
        eat() {
            console.log(this.name + " " + "eating");
            this.food.quantity = this.food.quantity - this.consumption;
            console.log(this.food.quantity + " " + "kg" + " " + this.food.name + " " + "left");
        }
        sing() {
            const songtext = "Old MacDonald had a farm, Ee-aye, ee-aye, oh And on his farm he had a" + " " + this.name + " " +
                "Ee-aye, ee-aye, ohWith a" + this.sound + this.sound + "" + "here and a" + " " + this.sound + this.sound + " " +
                "thereHere a" + " " + this.sound + " " + ", there a" + " " + this.sound + "" + "Everywhere a" + "" + this.sound + this.sound + " " +
                "Old MacDonald had a farm,Ee-aye, ee-aye, oh.";
            console.log(this.name);
            console.log(songtext);
        }
        doSpecialAction() {
        }
    }
    HayDay.Animal = Animal;
    let SPECIES;
    (function (SPECIES) {
        SPECIES[SPECIES["COW"] = 0] = "COW";
        SPECIES[SPECIES["CHICKEN"] = 1] = "CHICKEN";
        SPECIES[SPECIES["DONKEY"] = 2] = "DONKEY";
        SPECIES[SPECIES["PIG"] = 3] = "PIG";
        SPECIES[SPECIES["CAT"] = 4] = "CAT";
    })(SPECIES = HayDay.SPECIES || (HayDay.SPECIES = {}));
})(HayDay || (HayDay = {}));
//# sourceMappingURL=Animal.js.map