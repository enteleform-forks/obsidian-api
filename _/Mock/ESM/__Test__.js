//###  Module  ###//
import { Mock } from "./__Main__.js";
import { _Mock, _mock, _stringValue } from "./_Mock.js";
//####################################################################################################################//
//##>  Tests                                                                                                        ##//
//####################################################################################################################//
test("Mock<any>()", () => {
    const mock = Mock();
    expect(mock).toBeInstanceOf(_Mock);
    expect(mock.a).toBeInstanceOf(_Mock);
    expect(mock.a.b).toBeInstanceOf(_Mock);
    expect(mock.a()).toBeInstanceOf(_Mock);
    expect(mock.a().b).toBeInstanceOf(_Mock);
    expect(mock.a().b()).toBeInstanceOf(_Mock);
    expect(mock.a.b()).toBeInstanceOf(_Mock);
});
test("Mock<T>()", () => {
    class SomeClass {
        constructor() {
            this.x = undefined;
        }
    }
    const mock = Mock();
    expect(mock).toBeInstanceOf(_Mock);
    expect(mock.x).toBeInstanceOf(_Mock);
    expect(mock.x.a).toBeInstanceOf(_Mock);
    expect(mock.x.a.b).toBeInstanceOf(_Mock);
    expect(mock.x.a.b.c).toBeInstanceOf(_Mock);
    //@ts-expect-error
    expect(mock.x.a()).toBeInstanceOf(_Mock);
    //@ts-expect-error
    expect(mock.x.a.b()).toBeInstanceOf(_Mock);
    //@ts-expect-error
    expect(mock.x.a.b.c()).toBeInstanceOf(_Mock);
});
test("destructure, spread", () => {
    const x = Mock();
    const { a, b, ...spread } = x;
    expect({ a, b, spread }).toMatchObject({
        a: _mock,
        b: _mock,
        spread: {},
    });
    const array = [1, 2, ...x];
    expect(array).toMatchObject([1, 2]);
});
test("casting", () => {
    const mock = Mock();
    expect(mock.toString()).toEqual(_stringValue);
    expect(`${mock}`).toEqual(_stringValue);
    expect((0 + mock)).toEqual(0);
});
//# sourceMappingURL=__Test__.js.map
