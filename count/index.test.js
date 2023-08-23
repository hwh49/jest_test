import Counter from './index'

let counter = null;
beforeAll(() => {
    console.log('beforeAll')
})
afterAll(() => {
    console.log('afterAll');
})
beforeEach(() => {
    console.log('beforeEach')
    counter = new Counter();
})
afterEach(() => {
    console.log('afterEach')
})

describe('测试 add 相关代码', () => {
    beforeAll(() => {
        console.log('beforeAll add test')
    })
    afterAll(() => {
        console.log('afterAll add test');
    })
    beforeEach(() => {
        console.log('beforeEach add test')
    })
    afterEach(() => {
        console.log('afterEach add test')
    })
    // test.only('测试 Counter 中的 addOne 方法', () => {
    //     console.log('测试 Counter 中的 addOne 方法')
    //     counter.addOne();
    //     expect(counter.number).toBe(1);
    // })
    test('测试 Counter 中的 addTwo 方法', () => {
        console.log('测试 Counter 中的 addTwo 方法')
        counter.addTwo();
        expect(counter.number).toBe(2);
    })
})

describe('测试 minus 相关代码', () => {
    test('测试 Counter 中的 minusOne 方法', () => {
        console.log('测试 Counter 中的 minusOne 方法');
        counter.minusOne();
        expect(counter.number).toBe(-1);
    })
    test('测试 Counter 中的 minusTwo 方法', () => {
        console.log('测试 Counter 中的 minusTwo 方法');
        counter.minusTwo();
        expect(counter.number).toBe(-2);
    })
})
