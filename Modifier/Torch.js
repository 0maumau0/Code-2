"use strict";
var Fire;
(function (Fire) {
    class Torch extends Fire.Light {
        wood; //enum also possible
        material;
        size;
        constructor(_strength, _color, _wood, _material, _size) {
            super(_strength, _color);
            this.wood = _wood;
            this.material = _material;
            this.size = _size;
        }
        log() {
            console.log("log");
        }
    }
    Fire.Torch = Torch;
})(Fire || (Fire = {}));
//# sourceMappingURL=Torch.js.map