namespace TrianglePie{

window.addEventListener("load", hndlLoad);

type Vector2 ={
    x:number,
    y:number
}

const trianglePieces:number = 50;
const radius:number = 30;
const central: Vector2 ={x:100,y:100};
const rotationAngle:number = 2*Math.PI / trianglePieces;
const angle:number = 0;

function hndlLoad():void {
    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    crc2.fillStyle = "blue"
    crc2.fillRect(0,0,window.innerWidth,window.innerHeight)
    trianglePie(trianglePieces);
}

function trianglePie(_trianglePieces:number):void{

    for ( let i :number =0; i < trianglePieces; i++  )


}


}