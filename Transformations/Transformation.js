"use strict";
var Transformations;
(function (Transformations) {
    window.addEventListener("load", hndlLoad);
    function hndlLoad() {
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        canvas.height = 600;
        canvas.width = 600;
        crc2.fillStyle = "lightyellow";
        crc2.fillRect(0, 0, canvas.height, canvas.width);
        drawCoordinateSystem(crc2);
    }
    function drawCoordinateSystem(_crc2) {
        _crc2.beginPath();
        _crc2.moveTo(0, 0);
        _crc2.lineTo(0, 200);
        _crc2.closePath();
        _crc2.stroke();
        _crc2.beginPath();
        _crc2.moveTo(0, 0);
        _crc2.lineTo(200, 0);
        _crc2.closePath();
        _crc2.stroke();
        for (let i = 0; i <= 200; i++) {
            if (i % 10 == 0) {
                _crc2.beginPath();
                _crc2.moveTo(0, 0);
                _crc2.lineTo(i, -10);
                _crc2.lineTo(i, +10);
                _crc2.stroke();
                _crc2.beginPath();
                _crc2.moveTo(0, 0);
                _crc2.lineTo(-10, i);
                _crc2.lineTo(10, i);
                _crc2.stroke();
            }
        }
    }
})(Transformations || (Transformations = {}));
//# sourceMappingURL=Transformation.js.map