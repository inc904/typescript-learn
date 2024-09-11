function greeter(person: string) {
  return 'Hello, ' + person
}

let user = 'Jane User'

document.body.innerHTML = greeter(user)

// TypeScript 代码示例
function fn(x: string | number) {
  if (typeof x === 'string') {
    // ...
  } else if (typeof x === 'number') {
    // ...
  } else {
    x // never 类型
  }
}
