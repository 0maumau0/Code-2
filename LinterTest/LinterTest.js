"use strict";
var linterTest;
(function (linterTest) {
    let KEY;
    (function (KEY) {
        KEY[KEY["POS"] = 1] = "POS";
        KEY[KEY["NEG"] = -1] = "NEG";
    })(KEY || (KEY = {}));
    const info = { text: "G`udetmvhsgBncd1 ", key: KEY.POS };
    console.log(DeCrypt(info.text, info.key));
    function DeCrypt(text, _Key) {
        let result = "";
        for (let i = 0; i < text.length; i++)
            result += String.fromCharCode(text.charCodeAt(i) + _Key);
        return result;
        //text length isnt rigth!
    }
})(linterTest || (linterTest = {}));
//# sourceMappingURL=LinterTest.js.map