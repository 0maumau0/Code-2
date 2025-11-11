"use strict";
var Script;
(function (Script) {
    var f = FudgeCore;
    f.Project.registerScriptNamespace(Script); // Register the namespace to FUDGE for serialization
    class CubaControl extends f.ComponentScript {
        // Register the script as component for use in the editor via drag&drop
        static { this.iSubclass = f.Component.registerSubclass(CubaControl); }
        constructor() {
            super();
            // Properties may be mutated by users in the editor via the automatically created user interface
            this.message = "CustomComponentScript added to ";
            // Activate the functions of this component as response to events
            this.hndEvent = (_event) => {
                switch (_event.type) {
                    case "componentAdd" /* f.EVENT.COMPONENT_ADD */:
                        //f.Debug.log(this.message, this.node);
                        break;
                    case "componentRemove" /* f.EVENT.COMPONENT_REMOVE */:
                        this.removeEventListener("componentAdd" /* f.EVENT.COMPONENT_ADD */, this.hndEvent);
                        this.removeEventListener("componentRemove" /* f.EVENT.COMPONENT_REMOVE */, this.hndEvent);
                        break;
                    case "nodeDeserialized" /* f.EVENT.NODE_DESERIALIZED */:
                        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, this.update);
                        break;
                }
            };
            this.update = () => {
                // let node:f.Node = this.node;
                // let cmpTransform:f.ComponentTransform = node.getComponent(f.ComponentTransform);
                // cmpTransform.mtxLocal.rotateY(mouseX /100);
            };
            this.experiment = (_angle) => {
                // console.log("Experiment is a success");
                this.node.getComponent(f.ComponentTransform).mtxLocal.rotateY(_angle);
            };
            // Don't start when running in editor
            if (f.Project.mode == f.MODE.EDITOR)
                return;
            // Listen to this component being added to or removed from a node
            this.addEventListener("componentAdd" /* f.EVENT.COMPONENT_ADD */, this.hndEvent);
            this.addEventListener("componentRemove" /* f.EVENT.COMPONENT_REMOVE */, this.hndEvent);
            this.addEventListener("nodeDeserialized" /* f.EVENT.NODE_DESERIALIZED */, this.hndEvent);
        }
        drive(_speed) {
            this.node.getComponent(f.ComponentTransform).mtxLocal.translateZ(_speed);
        }
    }
    Script.CubaControl = CubaControl;
    // protected reduceMutator(_mutator: ƒ.Mutator): void {
    //   // delete properties that should not be mutated
    //   // undefined properties and private fields (#) will not be included by default
    // }
})(Script || (Script = {}));
var Script;
(function (Script) {
    var f = FudgeCore;
    Script.leftclick = false;
    // export let mouseX:number = 0;
    f.Debug.info("Main Program Template running!");
    let viewport;
    let cuba;
    let activeCar = cuba;
    const speed = 0.01;
    let speede = 0;
    const cubaCars = []; // you can create instead an array out of the CUba graph and his childs
    // const cubox:f.GraphInstance = new f.GraphInstance(graphCuba);
    // cubaCars.push(cubox);
    // const cubert:f.GraphInstance = new f.GraphInstance(graphCuba);
    // cubaCars.push(cubert);
    document.addEventListener("interactiveViewportStarted", start);
    async function start(_event) {
        viewport = _event.detail;
        // const graphCuba:f.Graph = f.Project.getResource("Graph|2025-11-10T09:20:52.686Z|17517")
        const graphCuba = f.Project.getResourcesByName("Cuba")[0];
        cuba = viewport.getBranch().getChildByName("Cuba");
        cubaCars.push(cuba);
        await spawnCars(graphCuba);
        console.log(cuba);
        // cuba.getComponent(CubaControl).experiment();
        document.addEventListener("mousedown", hndlClick);
        document.addEventListener("mousemove", hndlMovement);
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        f.Loop.start(); // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
    }
    function update(_event) {
        // ƒ.Physics.simulate();  // if physics is included and used
        viewport.draw();
        f.AudioManager.default.update();
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W, f.KEYBOARD_CODE.S]) == true) {
            if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W])) {
                speede += speed;
                console.log(speede + "forward");
                activeCar.getComponent(Script.CubaControl).drive(speede);
            }
            else {
                speede -= speed;
                console.log(speede + "backwards");
                activeCar.getComponent(Script.CubaControl).drive(speede);
            }
        }
        else
            speede = 0;
    }
    function hndlMovement(_event) {
        const angle = _event.movementX;
        activeCar.getComponent(Script.CubaControl).experiment(-angle);
        // mouseX = window.innerWidth/2 - _event.clientX;
        // mouseX = _event.movementX;
        // console.log(_event.movementX);
    }
    function hndlClick(_event) {
        const vecScreen = new f.Vector2(_event.offsetX, _event.offsetY);
        const ray = viewport.getRayFromClient(vecScreen);
        console.log("now the ray");
        console.log(ray);
        for (let i = 0; i < cubaCars.length; i++) {
            const distance = ray.getDistance(cubaCars[i].mtxWorld.translation);
            const minDistance = new f.Vector3(-0.5, -0.5, -0.5);
            const maxDistance = new f.Vector3(0.5, 0.5, 0.5);
            console.log(distance);
            if (minDistance > distance && distance < maxDistance) {
                console.log("car is hittet");
                activeCar = cubaCars[i];
            }
        }
    }
    async function spawnCars(_graph) {
        for (let i = 0; i < 10; i++) {
            const cubaInstance = await f.Project.createGraphInstance(_graph);
            cubaInstance.getComponent(f.ComponentTransform).mtxLocal.translateX(f.random.getRangeFloored(-15, 15));
            cubaInstance.getComponent(f.ComponentTransform).mtxLocal.translateZ(f.random.getRangeFloored(-15, 15));
            // console.log(cubaInstance)
            cuba.getParent().addChild(cubaInstance);
            cubaCars.push(cubaInstance);
        }
    }
})(Script || (Script = {}));
//# sourceMappingURL=Script.js.map