"use strict";
var HayDay;
(function (HayDay) {
    class Silo {
        name;
        quantity;
        capacity;
        demand;
        constructor(_name, _quantity, _capacity, _demand) {
            this.set(_name, _quantity, _capacity, _demand);
        }
        set(_a, _b, _c, _d) {
            this.name = _a;
            this.quantity = _b;
            this.capacity = _c;
            this.demand = _d;
        }
        restock() {
            let supply = 0;
            if (this.quantity < this.demand) {
                supply = this.capacity - this.quantity;
                this.quantity = supply + this.quantity;
                console.log(this.name + " " + "are under demand order is placed !");
                console.log("you got" + "  " + supply + " " + this.name + " " + "delivered");
                console.log(" new quantity = " + " " + this.quantity);
            }
            else
                console.log(this.name + " " + "not need to be filled");
        }
    }
    HayDay.Silo = Silo;
})(HayDay || (HayDay = {}));
//# sourceMappingURL=Silo.js.map