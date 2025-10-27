"use strict";
var TrianglePie;
(function (TrianglePie) {
    window.addEventListener("load", hndlLoad);
    const trianglePieces = 50;
    const radius = 30;
    const central = { x: 100, y: 100 };
    const rotationAngle = 2 * Math.PI / trianglePieces;
    const angle = 0;
    function hndlLoad() {
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        crc2.fillStyle = "blue";
        crc2.fillRect(0, 0, window.innerWidth, window.innerHeight);
        trianglePie(trianglePieces);
    }
    function trianglePie(_trianglePieces) {
        for (let i = 0; i < trianglePieces; i++)
            ;
    }
})(TrianglePie || (TrianglePie = {}));
//# sourceMappingURL=TrianglePie.js.map