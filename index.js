function greeter(person) {
    return 'Hello, ' + person;
}
var user = 'Jane User';
document.body.innerHTML = greeter(user);
// TypeScript 代码示例
function fn(x) {
    if (typeof x === 'string') {
        // ...
    }
    else if (typeof x === 'number') {
        // ...
    }
    else {
        x; // never 类型
    }
}
