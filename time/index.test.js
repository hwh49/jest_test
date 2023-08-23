import {getData} from './index'
jest.useFakeTimers();

test('测试getData', () => {
    const fn = jest.fn()
    getData(fn)
    jest.runOnlyPendingTimers()
    expect(fn).toHaveBeenCalledTimes(1)
})

test.only('测试mock函数', () => {
    const func = jest.fn();
    func(123);
    console.log(func.mock);
    // 断言：函数是否被调用
    expect(func).toBeCalled();
    // 断言：函数被调用次数
    expect(func.mock.calls.length).toBe(1);
    // 断言：函数参数
    expect(func.mock.calls[0]).toEqual([123])
})