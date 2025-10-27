namespace Canvas {

    window.addEventListener("load", hndlload);


    type Vector2 = {
            x: number,
            y: number,
    }

    type Triangle = {
        point1: Vector2,
        point2: Vector2,
        point4: Vector2,
        linecolor: string,
        fillcolor: string,
    }
    
    const colorLetters:string[]= ["a","b","c","d","e","f","1","2","3","4","5","6","7","8","9"]
    let colorCode:string
    //misssion draw triangle 
    function hndlload(): void {

        setUp();
    }


    function setUp():void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
        canvas.width = 500;
        canvas.height =  500;
        crc2.fillStyle = "#2222e0ff";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        

        for (let i:number = 0; i < 30 ; i++) {

        const point1: Vector2 = { x: Math.floor(Math.random()* canvas.width), y: Math.floor(Math.random()*canvas.height) };
        const point2: Vector2 = { x: Math.floor(Math.random()* canvas.width), y: Math.floor(Math.random()*canvas.height) };
        const point3: Vector2 = { x: Math.floor(Math.random()* canvas.width), y: Math.floor(Math.random()*canvas.height) };
        


        drawTriangle(crc2,point1,point2,point3);
        }
    }
    // crc2.beginPath();
    // crc2.arc(100, 100, 80, 0, 1.8 * Math.PI);
    // crc2.closePath();
    // crc2.stroke();

    // crc2.beginPath();
    // crc2.ellipse(150, 150, 50, 50, 0, 180, 0);
    // crc2.stroke();
    // crc2.closePath();


    //crc2.font ="100px serif";
    // crc2.strokeText("Hallo Welt", 150, 150,);

    // const triangle: Path2D = new Path2D();
    // triangle.moveTo(200, 150);
    // triangle.lineTo(60, 85);
    // triangle.lineTo(170, 10)
    // triangle.closePath();
    // crc2.stroke(triangle);
    function randomColorCode():string{

        colorCode = "#"

        for ( let i :number =0; i <=5; i++){

            colorCode = colorCode + colorLetters[Math.floor(Math.random()*colorLetters.length)];
        }
        
        return colorCode;
    }


    function drawTriangle(_crc2: CanvasRenderingContext2D, _point1:Vector2, _point2: Vector2, _point3: Vector2): void {
        _crc2.beginPath();
        _crc2.moveTo(_point1.x, _point1.y);
        _crc2.lineTo(_point2.x,_point2.y);
        _crc2.lineTo(_point3.x,_point3.y);
        randomColorCode();
        _crc2.fillStyle = colorCode;
        randomColorCode();
        _crc2.strokeStyle = colorCode;
        _crc2.fill();
        _crc2.closePath();
        _crc2.stroke();
    }
   

}

