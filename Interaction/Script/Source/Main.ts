namespace Script {
  import f = FudgeCore;
  export const leftclick:boolean = false;
  // export let mouseX:number = 0;
  f.Debug.info("Main Program Template running!");

  let viewport: f.Viewport;
  let cuba:f.Node;
  document.addEventListener("interactiveViewportStarted", <EventListener>start);
  

  function start(_event: CustomEvent): void {
    viewport = _event.detail;

    
  
    

    cuba =viewport.getBranch().getChildByName("Cuba")
    console.log(cuba);

      // cuba.getComponent(CubaControl).experiment();
    
    

    

   document.addEventListener("mousemove",hndlMovement);
    f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
     f.Loop.start();  // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
  }

  function update(_event: Event): void {
    // ƒ.Physics.simulate();  // if physics is included and used
    viewport.draw();
    f.AudioManager.default.update();
  }

  function hndlMovement(_event:MouseEvent):void{
    let angle:number = _event.movementX
    cuba.getComponent(CubaControl).experiment(-angle);

    // mouseX = window.innerWidth/2 - _event.clientX;
    // mouseX = _event.movementX;
    // console.log(_event.movementX);
    
    

  } 

  


}