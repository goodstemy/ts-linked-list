"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return Node;
}());
exports["default"] = Node;
