"use strict";
(function () {
    var _a, _b;
    const doX = function () {
        const inputElem = document.querySelector(".foo");
        const inputText = inputElem.value;
        console.log(inputText);
        inputElem.value = "";
    };
    (_a = document.getElementById("btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", doX);
    (_b = document.querySelector(".foo")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", function (event) {
        const inputElem = event.target;
        console.log(inputElem.value);
    });
})();
