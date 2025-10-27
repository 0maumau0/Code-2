"use strict";
var TrianglePie;
(function (TrianglePie) {
    window.addEventListener("load", hndlLoad);
    const pieces = 10;
    const radius = 30;
    const centralPoint = { x: 300, y: 300 };
    function hndlLoad() {
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        crc2.fillStyle = "blue";
        crc2.fillRect(0, 0, window.innerWidth, window.innerHeight);
        drawtrianglePie(crc2, pieces);
    }
    function drawtrianglePie(_crc2, _pieces) {
        const rotationAngle = (2 * Math.PI) / _pieces;
        for (let i = 0; i < _pieces; i++) {
        }
    }
    // christians code and finishe circle of triangles
})(TrianglePie || (TrianglePie = {}));
//# sourceMappingURL=TrianglePie.js.map