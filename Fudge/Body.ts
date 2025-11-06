namespace Fudge {

    import f = FudgeCore;

    export class Body extends f.Node {

        public constructor(_name: string) {
            super(_name);

            this.addComponent(new f.ComponentMesh(mesh));
            this.addComponent(new f.ComponentMaterial(material));
            this.addComponent(new f.ComponentTransform());

            this.mtxLocal.translateX(2)

        }

        public update(): void {
            const rotationSpeed: number = 360 / 5;
            const angle: number = rotationSpeed * f.Loop.timeFrameGame / 1000

            this.getComponent(f.ComponentTransform).mtxLocal.rotateY(angle);
            this.getComponent(f.ComponentMesh).mtxPivot.rotateY(angle);


        }

    }




}