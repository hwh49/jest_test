import {sum, subtract} from './index'
require('../jsdom-config')
test('sum: ', () => {
    expect(sum(1,2)).toBe(3)
})

test('subtract: ', () => {
    expect(subtract(1,2)).toBe(-1)
})

function renderHtml() {
    const div = document.createElement("div");
    div.innerHTML = "<h1>Hello World</h1>";
    document.body.appendChild(div);
}

test("DOM 测试：", () => {
    renderHtml();
    expect(document.querySelector("h1").innerHTML).toBe("Hello World");
});

test("Snapshot Test:", () => {
    expect(document.body).toMatchSnapshot(); // 首次执行会生成快照文件。
});