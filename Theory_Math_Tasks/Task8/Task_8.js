"use strict";
var GuardiansGate;
(function (GuardiansGate) {
    const maxTry = Number(prompt("max Trys ?"));
    const successcount = Number(prompt("How much success did you need"));
    const successChance = Number(prompt("Successchance of each try")) / 100;
    let overAllChance = 0;
    checkValid();
    console.log(maxTry);
    console.log(successcount);
    calculateOverallChance();
    function checkValid() {
        if (maxTry < 0 || successcount > maxTry || successChance > 100) {
            alert("no Valid numbers");
            window.location.reload();
        }
        ;
    }
    ;
    function calculateOverallChance() {
        for (let i = successcount; i >= maxTry; i++) {
            overAllChance = overAllChance + Math.pow(successChance, successcount) * (Math.pow(1 - successChance, maxTry - successcount));
        }
        ;
    }
    ;
})(GuardiansGate || (GuardiansGate = {}));
//# sourceMappingURL=Task_8.js.map