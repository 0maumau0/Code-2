"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", hndlload);
    //misssion draw triangle 
    function hndlload() {
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#2f2ff7ff";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        const point1 = { x: 50, y: 50 };
        const point2 = { x: 100, y: 250 };
        const point3 = { x: 200, y: 300 };
        drawTriangle(crc2);
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
    function drawTriangle(_crc2, _point1) {
        _crc2.beginPath();
        _crc2.moveTo(_point1, _point2);
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map