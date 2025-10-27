namespace TrianglePie {

    // very close on chriss code but i understand it :D

    window.addEventListener("load", hndlLoad);

    type Vector2 = {
        x: number,
        y: number
    }


    const pieces:number = Number(prompt("how much pieces"));
    const radius: number = Number(prompt("which radius"));
    const centralPoint: Vector2 = { x: 300, y: 300 };
    const point2: Vector2 = {x:0,y:0};
    const point3: Vector2 = {x:0,y:0};



    function hndlLoad(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        crc2.fillStyle = "blue"
        crc2.fillRect(0, 0, window.innerWidth, window.innerHeight)
        drawtrianglePie(crc2, pieces,radius);

    }

    function drawtrianglePie(_crc2: CanvasRenderingContext2D, _pieces: number, _radius: number): void {

        const rotationAngle: number = (2 * Math.PI) / _pieces;

        for (let i: number = 0; i < _pieces; i++) {

            const startPoint2: Vector2 = { x: 0, y: 0 - _radius };
            const startPoint3: Vector2 = { x: 0, y: 0 - _radius };
            const rotatedPoint2: Vector2 = rotatePoint(rotationAngle * i, startPoint2);
            const rotatedPoint3: Vector2 = rotatePoint(rotationAngle + rotationAngle * i, startPoint3);


            point2.x = rotatedPoint2.x + centralPoint.x;
            point2.y = rotatedPoint2.y + centralPoint.y;    
            
            point3.x = rotatedPoint3.x + centralPoint.x;
            point3.y = rotatedPoint3.y + centralPoint.y;
            
            drawtriangle(_crc2,centralPoint,point2,point3,);
        }

        function rotatePoint(_angle: number, _point: Vector2,): Vector2 {
            let rotated: Vector2 = { x: 0, y: 0 }

            rotated.x = (Math.cos(_angle) * _point.x) - (Math.sin(_angle) * _point.y);
            rotated.y = (Math.sin(_angle) * _point.x) + (Math.cos(_angle) * _point.y);


            return rotated;
        }

    }

    function drawtriangle(_crc2:CanvasRenderingContext2D,_centralpoint:Vector2,_point2:Vector2,_point3:Vector2):void{

        _crc2.beginPath();
        _crc2.moveTo(_centralpoint.x,_centralpoint.y);
        _crc2.lineTo(_point2.x,_point2.y);
        _crc2.lineTo(_point3.x,_point3.y);
        _crc2.closePath()
        _crc2.stroke();


    }
    


}