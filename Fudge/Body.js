"use strict";
var Fudge;
(function (Fudge) {
    var f = FudgeCore;
    class Body extends f.Node {
        constructor(_name) {
            super(_name);
            this.addComponent(new f.ComponentMesh(Fudge.mesh));
            this.addComponent(new f.ComponentMaterial(Fudge.material));
            this.addComponent(new f.ComponentTransform());
            this.mtxLocal.translateX(2);
        }
        update() {
            const rotationSpeed = 360 / 5;
            const angle = rotationSpeed * f.Loop.timeFrameGame / 1000;
            this.getComponent(f.ComponentTransform).mtxLocal.rotateY(angle);
            this.getComponent(f.ComponentMesh).mtxPivot.rotateY(angle);
        }
    }
    Fudge.Body = Body;
})(Fudge || (Fudge = {}));
//# sourceMappingURL=Body.js.map