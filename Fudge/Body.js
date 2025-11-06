"use strict";
var Fudge;
(function (Fudge) {
    var f = FudgeCore;
    class Body extends f.Node {
        name;
        distance;
        rotationspeed;
        constructor(_name, _distance, _rotationspeed) {
            super(_name);
            this.addComponent(new f.ComponentMesh(Fudge.mesh));
            this.addComponent(new f.ComponentMaterial(Fudge.material));
            this.addComponent(new f.ComponentTransform());
            this.name = _name;
            this.distance = _distance;
            this.rotationspeed = _rotationspeed;
            Fudge.celestials.push(this);
            this.mtxLocal.translateX(_distance);
        }
        update() {
            const rotSpeed = 360 / this.rotationspeed;
            const angle = rotSpeed * f.Loop.timeFrameGame / 1000;
            this.getComponent(f.ComponentTransform).mtxLocal.rotateY(angle, true);
            this.getComponent(f.ComponentMesh).mtxPivot.rotateY(angle);
        }
    }
    Fudge.Body = Body;
})(Fudge || (Fudge = {}));
//# sourceMappingURL=Body.js.map