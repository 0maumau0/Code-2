"use strict";
var Fudge;
(function (Fudge) {
    console.log(FudgeCore);
    window.addEventListener("load", hndlLoad);
    var f = FudgeCore;
    Fudge.celestials = [];
    Fudge.mesh = new f.MeshSphere("mesh");
    Fudge.material = new f.Material("material", f.ShaderLit);
    const sun = new Fudge.Body("Sun", 0, 10);
    const earth = new Fudge.Body("earth", 6, 12);
    const jupiter = new Fudge.Body("Jupiter", 10, 5);
    const mercur = new Fudge.Body("Mercury", 2, 29);
    const venus = new Fudge.Body("Venus", 4, 121);
    const mars = new Fudge.Body("Mars", 8, 0.5);
    const saturn = new Fudge.Body("Saturn", 12, 5);
    const uranus = new Fudge.Body("Uranus", 14, 8.5);
    const neptun = new Fudge.Body("Neptun", 16, 8);
    const cmpCamera = new f.ComponentCamera();
    const viewport = new f.Viewport();
    function hndlLoad() {
        addChild();
        // eslint-disable-next-line @typescript-eslint/typedef
        // node.addComponent(new f.ComponentMesh(mesh));
        // node.addComponent(new f.ComponentMaterial(material));
        // node.addComponent(new f.ComponentTransform());
        // node.getComponent(f.ComponentMesh).mtxPivot.rotate(new f.Vector3(20, 50, -30));
        // node.getComponent(f.ComponentMaterial).clrPrimary = new f.Color(0.3, 0, 0.5);
        // node.getComponent(f.ComponentMesh).mtxPivot.scale(new f.Vector3(0.5, 1, 1.2));
        // node.getComponent(f.ComponentMesh).mtxPivot.translateX(-2)
        earth.getComponent(f.ComponentMaterial).clrPrimary = new f.Color(0.5, 0.2, 0);
        sun.getComponent(f.ComponentMaterial).clrPrimary = new f.Color(1, 1, 0);
        cmpCamera.mtxPivot.translateZ(-25);
        cmpCamera.mtxPivot.translateY(15);
        cmpCamera.mtxPivot.rotateX(30);
        viewport.initialize("viewport", sun, cmpCamera, document.querySelector("canvas"));
        viewport.draw();
        f.Loop.start();
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
    }
    function update() {
        for (let i = 0; i < Fudge.celestials.length; i++) {
            Fudge.celestials[i].update();
        }
        viewport.draw();
    }
    function addChild() {
        sun.addChild(earth);
        sun.addChild(mercur);
        sun.addChild(venus);
        sun.addChild(mars);
        sun.addChild(jupiter);
        sun.addChild(saturn);
        sun.addChild(neptun);
        sun.addChild(uranus);
    }
})(Fudge || (Fudge = {}));
//# sourceMappingURL=Fudge.js.map