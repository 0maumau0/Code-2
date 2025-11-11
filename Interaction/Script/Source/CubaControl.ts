namespace Script {
  import f = FudgeCore;
  f.Project.registerScriptNamespace(Script);  // Register the namespace to FUDGE for serialization

  export class CubaControl extends f.ComponentScript {
    // Register the script as component for use in the editor via drag&drop
    public static readonly iSubclass: number = f.Component.registerSubclass(CubaControl);
    // Properties may be mutated by users in the editor via the automatically created user interface
    public message: string = "CustomComponentScript added to ";
    public rotateSpeed: number


    public constructor() {
      super();

      // Don't start when running in editor
      if (f.Project.mode == f.MODE.EDITOR)
        return;

      // Listen to this component being added to or removed from a node
      this.addEventListener(f.EVENT.COMPONENT_ADD, this.hndEvent);
      this.addEventListener(f.EVENT.COMPONENT_REMOVE, this.hndEvent);
      this.addEventListener(f.EVENT.NODE_DESERIALIZED, this.hndEvent);
    }

    // Activate the functions of this component as response to events
    public hndEvent = (_event: Event): void => {
      switch (_event.type) {
        case f.EVENT.COMPONENT_ADD:
          //f.Debug.log(this.message, this.node);
          break;
        case f.EVENT.COMPONENT_REMOVE:
          this.removeEventListener(f.EVENT.COMPONENT_ADD, this.hndEvent);
          this.removeEventListener(f.EVENT.COMPONENT_REMOVE, this.hndEvent);
          break;
        case f.EVENT.NODE_DESERIALIZED:
          f.Loop.addEventListener(f.EVENT.LOOP_FRAME, this.update);
          break;
      }
    }

    public update = (): void => {
      // let node:f.Node = this.node;
      // let cmpTransform:f.ComponentTransform = node.getComponent(f.ComponentTransform);
      // cmpTransform.mtxLocal.rotateY(mouseX /100);
    }

    public experiment = (_angle: number): void => {
      // console.log("Experiment is a success");

       this.node.getComponent(f.ComponentTransform).mtxLocal.rotateY(_angle)


    }

    public drive(_speed:number):void{

      this.node.getComponent(f.ComponentTransform).mtxLocal.translateZ(_speed)
    }



  }





  // protected reduceMutator(_mutator: ƒ.Mutator): void {
  //   // delete properties that should not be mutated
  //   // undefined properties and private fields (#) will not be included by default
  // }
}
