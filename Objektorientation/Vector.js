"use strict";
var Objektorientated;
(function (Objektorientated) {
    class Vector {
        x = 0;
        y = 0;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    const v1 = new Vector(3, 4);
    v1.scale(2);
    console.log(v1);
})(Objektorientated || (Objektorientated = {}));
//# sourceMappingURL=Vector.js.map