"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mock = void 0;
//###  Module  ###//
const _Mock_1 = require("./_Mock.js");
//####################################################################################################################//
//##>  Exports.Public.Function                                                                                      ##//
//####################################################################################################################//
function Mock() {
    const proxy = new Proxy(_Mock_1._mock, {
        get: ((target, propertyKey) => ((propertyKey in target)
            ? target[propertyKey]
            : proxy)),
    });
    return proxy;
}
exports.Mock = Mock;
//# sourceMappingURL=__Main__.js.map
