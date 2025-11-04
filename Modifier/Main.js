"use strict";
var Fire;
(function (Fire) {
    const torch = new Fire.Torch(3, "white", "oak", "wood", 3);
    torch.brightness(3);
    torch.log();
    const durability = Fire.Light.substract(5, 3);
    console.log(durability);
})(Fire || (Fire = {}));
//# sourceMappingURL=Main.js.map