"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports._mock = exports._stringValue = exports._Mock = void 0;
//###  Module  ###//
const __Main__1 = require("./__Main__.js");
//####################################################################################################################//
//##>  Utilities                                                                                                    ##//
//####################################################################################################################//
class _Mock extends Function {
    constructor() {
        super("...args", "return this._bound._call(...args)");
        this[_a] = "Mock";
        this._bound = this.bind(this);
        return this._bound;
    }
    _call(...args) { return __Main__1.Mock(); }
    toString() { return exports._stringValue; }
    ;
    [(_a = Symbol.toStringTag, Symbol.toPrimitive)](hint) {
        if (hint == "string") {
            return exports._stringValue;
        }
        else {
            return 0;
        }
    }
}
exports._Mock = _Mock;
exports._stringValue = "[object Mock]";
exports._mock = new _Mock;
//# sourceMappingURL=_Mock.js.map
