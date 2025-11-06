"use strict";
var Fudge;
(function (Fudge) {
    console.log(FudgeCore);
    window.addEventListener("load", hndlLoad);
    var f = FudgeCore;
    Fudge.mesh = new f.MeshCube("mesh");
    Fudge.material = new f.Material("material", f.ShaderLitTextured);
    const earth = new Fudge.Body("earth");
    const cmpCamera = new f.ComponentCamera();
    const viewport = new f.Viewport();
    function hndlLoad() {
        // eslint-disable-next-line @typescript-eslint/typedef
        // node.addComponent(new f.ComponentMesh(mesh));
        // node.addComponent(new f.ComponentMaterial(material));
        // node.addComponent(new f.ComponentTransform());
        // node.getComponent(f.ComponentMesh).mtxPivot.rotate(new f.Vector3(20, 50, -30));
        // node.getComponent(f.ComponentMaterial).clrPrimary = new f.Color(0.3, 0, 0.5);
        // node.getComponent(f.ComponentMesh).mtxPivot.scale(new f.Vector3(0.5, 1, 1.2));
        // node.getComponent(f.ComponentMesh).mtxPivot.translateX(-2)
        cmpCamera.mtxPivot.translateZ(-6);
        viewport.initialize("viewport", earth, cmpCamera, document.querySelector("canvas"));
        viewport.draw();
        f.Loop.start();
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
    }
    function update() {
        viewport.draw();
    }
})(Fudge || (Fudge = {}));
//# sourceMappingURL=Fudge.js.map