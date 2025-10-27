namespace TrianglePie{

window.addEventListener("load", hndlLoad);

type Vector2 ={
    x:number,
    y:number
}

const pieces:number = 10;
const radius:number = 30;
const centralPoint: Vector2 ={x:300,y:300};



function hndlLoad():void {
    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    crc2.fillStyle = "blue"
    crc2.fillRect(0,0,window.innerWidth,window.innerHeight)
    drawtrianglePie(crc2,pieces);

}

function drawtrianglePie(_crc2:CanvasRenderingContext2D,_pieces:number):void{

    const rotationAngle:number = (2*Math.PI) / _pieces;

    for ( let i :number =0; i < _pieces; i++  ){

       


    }



}
// christians code and finishe circle of triangles


}