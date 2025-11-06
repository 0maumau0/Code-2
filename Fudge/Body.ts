namespace Fudge {

    import f = FudgeCore;

    export class Body extends f.Node {

       public name: string;
       public distance:number;
       public rotationspeed:number;


        public constructor(_name: string, _distance: number,_rotationspeed:number) {
        super(_name);

        this.addComponent(new f.ComponentMesh(mesh));
        this.addComponent(new f.ComponentMaterial(material));
        this.addComponent(new f.ComponentTransform());

        this.name =_name;
        this.distance = _distance;
        this.rotationspeed = _rotationspeed
        

        celestials.push(this)

        this.mtxLocal.translateX(_distance)

     }

        public update(): void {
        const rotSpeed: number = 360 / this.rotationspeed;
        const angle: number = rotSpeed * f.Loop.timeFrameGame / 1000

            this.getComponent(f.ComponentTransform).mtxLocal.rotateY(angle,true);
        this.getComponent(f.ComponentMesh).mtxPivot.rotateY(angle);


    }

}





}