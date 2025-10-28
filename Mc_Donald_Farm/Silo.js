"use strict";
var HayDay;
(function (HayDay) {
    class Silo {
        name;
        quantity;
        capacity;
        demand;
        constructor(_a, _b, _c, _d) {
            this.set(_a, _b, _c, _d);
        }
        set(_a, _b, _c, _d) {
            this.name = _a;
            this.quantity = _b;
            this.capacity = _c;
            this.demand = _d;
        }
    }
    HayDay.Silo = Silo;
})(HayDay || (HayDay = {}));
//# sourceMappingURL=Silo.js.map