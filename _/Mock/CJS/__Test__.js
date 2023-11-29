"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//###  Module  ###//
const __Main__1 = require("./__Main__.js");
const _Mock_1 = require("./_Mock.js");
//####################################################################################################################//
//##>  Tests                                                                                                        ##//
//####################################################################################################################//
test("Mock<any>()", () => {
    const mock = __Main__1.Mock();
    expect(mock).toBeInstanceOf(_Mock_1._Mock);
    expect(mock.a).toBeInstanceOf(_Mock_1._Mock);
    expect(mock.a.b).toBeInstanceOf(_Mock_1._Mock);
    expect(mock.a()).toBeInstanceOf(_Mock_1._Mock);
    expect(mock.a().b).toBeInstanceOf(_Mock_1._Mock);
    expect(mock.a().b()).toBeInstanceOf(_Mock_1._Mock);
    expect(mock.a.b()).toBeInstanceOf(_Mock_1._Mock);
});
test("Mock<T>()", () => {
    class SomeClass {
        constructor() {
            this.x = undefined;
        }
    }
    const mock = __Main__1.Mock();
    expect(mock).toBeInstanceOf(_Mock_1._Mock);
    expect(mock.x).toBeInstanceOf(_Mock_1._Mock);
    expect(mock.x.a).toBeInstanceOf(_Mock_1._Mock);
    expect(mock.x.a.b).toBeInstanceOf(_Mock_1._Mock);
    expect(mock.x.a.b.c).toBeInstanceOf(_Mock_1._Mock);
    //@ts-expect-error
    expect(mock.x.a()).toBeInstanceOf(_Mock_1._Mock);
    //@ts-expect-error
    expect(mock.x.a.b()).toBeInstanceOf(_Mock_1._Mock);
    //@ts-expect-error
    expect(mock.x.a.b.c()).toBeInstanceOf(_Mock_1._Mock);
});
test("destructure, spread", () => {
    const x = __Main__1.Mock();
    const { a, b, ...spread } = x;
    expect({ a, b, spread }).toMatchObject({
        a: _Mock_1._mock,
        b: _Mock_1._mock,
        spread: {},
    });
    const array = [1, 2, ...x];
    expect(array).toMatchObject([1, 2]);
});
test("casting", () => {
    const mock = __Main__1.Mock();
    expect(mock.toString()).toEqual(_Mock_1._stringValue);
    expect(`${mock}`).toEqual(_Mock_1._stringValue);
    expect((0 + mock)).toEqual(0);
});
//# sourceMappingURL=__Test__.js.map
