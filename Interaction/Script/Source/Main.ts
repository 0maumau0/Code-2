namespace Script {
  import f = FudgeCore;
  export const leftclick: boolean = false;
  // export let mouseX:number = 0;
  f.Debug.info("Main Program Template running!");

  let viewport: f.Viewport; 
  let cuba: f.Node;
  let activeCar :f.Node = cuba;
  const speed: number = 0.01
  let speede: number = 0
  const cubaCars: f.Node[] = []; // you can create instead an array out of the CUba graph and his childs



  // const cubox:f.GraphInstance = new f.GraphInstance(graphCuba);
  // cubaCars.push(cubox);
  // const cubert:f.GraphInstance = new f.GraphInstance(graphCuba);
  // cubaCars.push(cubert);

  document.addEventListener("interactiveViewportStarted", <EventListener><unknown>start);


  async function start(_event: CustomEvent): Promise<void> {
    viewport = _event.detail;


    // const graphCuba:f.Graph = f.Project.getResource("Graph|2025-11-10T09:20:52.686Z|17517")
    const graphCuba: f.Graph = <f.Graph>f.Project.getResourcesByName("Cuba")[0]




    cuba = viewport.getBranch().getChildByName("Cuba")
    cubaCars.push(cuba)
    await spawnCars(graphCuba);
    console.log(cuba);

    // cuba.getComponent(CubaControl).experiment();




    document.addEventListener("mousedown", hndlClick);
    document.addEventListener("mousemove", hndlMovement);
    f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
    f.Loop.start();  // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
  }

  function update(_event: Event): void {
    // ƒ.Physics.simulate();  // if physics is included and used
    viewport.draw();
    f.AudioManager.default.update();
    if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W, f.KEYBOARD_CODE.S]) == true) {

      if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W])) {
        speede += speed
        console.log(speede+"forward");
        
        activeCar.getComponent(CubaControl).drive(speede);
        
      } else{
        speede -= speed
        console.log(speede +"backwards");        
        activeCar.getComponent(CubaControl).drive(speede);
      }
      
    } else speede = 0

  }

  function hndlMovement(_event: MouseEvent): void {
    const angle: number = _event.movementX
    activeCar.getComponent(CubaControl).experiment(-angle);

    // mouseX = window.innerWidth/2 - _event.clientX;
    // mouseX = _event.movementX;
    // console.log(_event.movementX);
  }

  function hndlClick(_event: MouseEvent): void {
    const vecScreen: f.Vector2 = new f.Vector2(_event.offsetX, _event.offsetY)
    const ray: f.Ray = viewport.getRayFromClient(vecScreen)
    console.log("now the ray");
    console.log(ray);

    for (let i: number = 0; i < cubaCars.length; i++) {
      const distance: f.Vector3 = ray.getDistance(cubaCars[i].mtxWorld.translation)
      const minDistance: f.Vector3 = new f.Vector3(-0.5, -0.5, -0.5)
      const maxDistance: f.Vector3 = new f.Vector3(0.5, 0.5, 0.5)
      console.log(distance);
      if (minDistance > distance && distance < maxDistance) {
        console.log("car is hittet");
        activeCar = cubaCars[i];
      }

    }

  }

  async function spawnCars(_graph: f.Graph): Promise<void> {

    for (let i: number = 0; i < 10; i++) {
      const cubaInstance: f.GraphInstance = await f.Project.createGraphInstance(_graph)
      cubaInstance.getComponent(f.ComponentTransform).mtxLocal.translateX(f.random.getRangeFloored(-15, 15))
      cubaInstance.getComponent(f.ComponentTransform).mtxLocal.translateZ(f.random.getRangeFloored(-15, 15))
      // console.log(cubaInstance)
      cuba.getParent().addChild(cubaInstance);
      cubaCars.push(cubaInstance)
    }

  }




}