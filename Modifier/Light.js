"use strict";
var Fire;
(function (Fire) {
    class Light {
        strength;
        color;
        constructor(_strength, _color) {
            this.strength = _strength;
            this.color = _color;
        }
        static substract(_first, _second) {
            const number = _first - _second;
            return number;
        }
        brightness(_add) {
            this.strength = this.strength + _add;
            console.log(this.strength);
        }
    }
    Fire.Light = Light;
})(Fire || (Fire = {}));
//# sourceMappingURL=Light.js.map