//###  Module  ###//
import { _mock } from "./_Mock.js";
//####################################################################################################################//
//##>  Exports.Public.Function                                                                                      ##//
//####################################################################################################################//
export function Mock() {
    const proxy = new Proxy(_mock, {
        get: ((target, propertyKey) => ((propertyKey in target)
            ? target[propertyKey]
            : proxy)),
    });
    return proxy;
}
//# sourceMappingURL=__Main__.js.map
