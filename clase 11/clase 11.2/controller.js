var ConfirmBox = /** @class */ (function () {
    function ConfirmBox() {
    }
    ConfirmBox.prototype.clickMethod = function (name) {
        confirm(name);
    };
    return ConfirmBox;
}());
