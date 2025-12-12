"use strict";
var GuardiansGate;
(function (GuardiansGate) {
    const maxTry = Number(prompt("max Trys ?"));
    const minSuccesses = Number(prompt("How much success did you need"));
    const successChance = Number(prompt("Successchance of each try"));
    checkValid();
    console.log(maxTry);
    console.log(minSuccesses);
    function checkValid() {
        if (maxTry < 0 || minSuccesses > maxTry || successChance > 100) {
            alert("no Valid numbers");
            window.location.reload();
        }
        ;
    }
    ;
})(GuardiansGate || (GuardiansGate = {}));
//# sourceMappingURL=Task_8.js.map