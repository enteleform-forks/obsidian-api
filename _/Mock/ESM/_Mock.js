var _a;
//###  Module  ###//
import { Mock } from "./__Main__.js";
//####################################################################################################################//
//##>  Utilities                                                                                                    ##//
//####################################################################################################################//
export class _Mock extends Function {
    constructor() {
        super("...args", "return this._bound._call(...args)");
        this[_a] = "Mock";
        this._bound = this.bind(this);
        return this._bound;
    }
    _call(...args) { return Mock(); }
    toString() { return _stringValue; }
    ;
    [(_a = Symbol.toStringTag, Symbol.toPrimitive)](hint) {
        if (hint == "string") {
            return _stringValue;
        }
        else {
            return 0;
        }
    }
}
export const _stringValue = "[object Mock]";
export const _mock = new _Mock;
//# sourceMappingURL=_Mock.js.map
