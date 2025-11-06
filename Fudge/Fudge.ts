namespace Fudge {
    console.log(FudgeCore);
    window.addEventListener("load", hndlLoad);
    import f = FudgeCore;
    export const celestials: Body[] = []
    export const mesh: f.Mesh = new f.MeshSphere("mesh");
    export const material: f.Material = new f.Material("material", f.ShaderLit);

    const sun: Body = new Body("Sun", 0, 10);
    const earth: Body = new Body("earth", 6, 12);
    const jupiter: Body = new Body("Jupiter", 10, 5);
    const mercur: Body = new Body("Mercury", 2, 29);
    const venus: Body = new Body("Venus", 4, 121);
    const mars: Body = new Body("Mars", 8, 0.5);
    const saturn: Body = new Body("Saturn", 12, 5);
    const uranus: Body = new Body("Uranus", 14, 8.5);
    const neptun: Body = new Body("Neptun", 16, 8);


    const cmpCamera: f.ComponentCamera = new f.ComponentCamera();
    const viewport: f.Viewport = new f.Viewport();

    function hndlLoad(): void {

        addChild();

        


        // eslint-disable-next-line @typescript-eslint/typedef
        // node.addComponent(new f.ComponentMesh(mesh));
        // node.addComponent(new f.ComponentMaterial(material));
        // node.addComponent(new f.ComponentTransform());
        // node.getComponent(f.ComponentMesh).mtxPivot.rotate(new f.Vector3(20, 50, -30));
        // node.getComponent(f.ComponentMaterial).clrPrimary = new f.Color(0.3, 0, 0.5);
        // node.getComponent(f.ComponentMesh).mtxPivot.scale(new f.Vector3(0.5, 1, 1.2));
        // node.getComponent(f.ComponentMesh).mtxPivot.translateX(-2)
        earth.getComponent(f.ComponentMaterial).clrPrimary = new f.Color(0.5, 0.2, 0)
        sun.getComponent(f.ComponentMaterial).clrPrimary = new f.Color(1, 1, 0)


        cmpCamera.mtxPivot.translateZ(-25)
        cmpCamera.mtxPivot.translateY(15)
        cmpCamera.mtxPivot.rotateX(30)


        viewport.initialize("viewport", sun, cmpCamera, document.querySelector("canvas")!);
        viewport.draw();

        f.Loop.start()
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);

    }

    function update(): void {

        for (let i :number =0 ; i < celestials.length;i++){
            celestials[i].update();
        }
        viewport.draw();

    }

    function addChild(): void {
        sun.addChild(earth);
        sun.addChild(mercur);
        sun.addChild(venus);
        sun.addChild(mars);
        sun.addChild(jupiter);
        sun.addChild(saturn);
        sun.addChild(neptun);
        sun.addChild(uranus);
    }
    
}