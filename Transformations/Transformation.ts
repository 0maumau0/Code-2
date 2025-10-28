
namespace Transformations {

    type Vector2 = { x: number, y: number };

     const colors:string [] = ["lightyellow","violet","green", "red","blue"]


    window.addEventListener("load", hndlLoad)

    function hndlLoad(): void {

        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

        

        canvas.height = 600;
        canvas.width = 600;
        crc2.fillStyle = colors[0]
        crc2.fillRect(0, 0, canvas.height, canvas.width);

        
        drawCoordinateSystem(crc2,colors[1]);
       

        crc2.save();
        crc2.rotate((60*Math.PI)/180);
        drawCoordinateSystem(crc2,colors[2]);
        //crc2.restore();

        crc2.save();
        crc2.scale(3,1.7);
        drawCoordinateSystem(crc2,colors[3]);
        //  crc2.restore();

        crc2.save();
        crc2.translate(70, -100);
        drawCoordinateSystem(crc2,colors[4]);
        //  crc2.restore();
        
    }

    function drawCoordinateSystem(_crc2: CanvasRenderingContext2D,_color:string): void {
        _crc2.beginPath();
        _crc2.moveTo(0, 0);
        _crc2.lineTo(0, 200);
        _crc2.strokeStyle = _color;
        _crc2.stroke();

        _crc2.beginPath();
        _crc2.moveTo(0, 0);
        _crc2.lineTo(200, 0);
         _crc2.strokeStyle = _color;
        _crc2.stroke();

        for (let i: number = 0; i <= 200; i += 10) {
            _crc2.beginPath();
            
            _crc2.moveTo(i, -10);
            _crc2.lineTo(i, +10);

            _crc2.moveTo(-10, i);
            _crc2.lineTo(10, i)
             _crc2.strokeStyle = _color;
            _crc2.stroke();
        }
    }
}