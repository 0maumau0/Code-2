"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", hndlload);
    let colorLetters = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let colorCode;
    //misssion draw triangle 
    function hndlload() {
        setUp();
    }
    function setUp() {
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        canvas.width = 500;
        canvas.height = 500;
        crc2.fillStyle = "#2222e0ff";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let i = 0; i < 30; i++) {
            let point1 = { x: Math.floor(Math.random() * canvas.width), y: Math.floor(Math.random() * canvas.height) };
            let point2 = { x: Math.floor(Math.random() * canvas.width), y: Math.floor(Math.random() * canvas.height) };
            let point3 = { x: Math.floor(Math.random() * canvas.width), y: Math.floor(Math.random() * canvas.height) };
            drawTriangle(crc2, point1, point2, point3);
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
    function randomColorCode(_colorCode) {
        colorCode = "#";
        for (let i = 0; i <= 5; i++) {
            colorCode = colorCode + colorLetters[Math.floor(Math.random() * colorLetters.length)];
        }
        return colorCode;
    }
    function drawTriangle(_crc2, _point1, _point2, _point3) {
        _crc2.beginPath();
        _crc2.moveTo(_point1.x, _point1.y);
        _crc2.lineTo(_point2.x, _point2.y);
        _crc2.lineTo(_point3.x, _point3.y);
        randomColorCode(colorCode);
        _crc2.fillStyle = colorCode;
        randomColorCode(colorCode);
        _crc2.strokeStyle = colorCode;
        _crc2.fill();
        _crc2.closePath();
        _crc2.stroke();
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map