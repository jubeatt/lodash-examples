import core from 'lodash'

export class FPDemo {
  constructor() {
    this._ = core
  }

  // .flow() 合併多個 function
  example1() {
    const add = (a, b) => a + b
    const square = (n) => n * n
    const newFunc = this._.flow([add, square])

    const result = newFunc(2, 3) // 等同 square(add(2, 3))
    console.log(result) // 25
  }

  // 👍 .memoize() 回傳會快取住結果的 function
  example2() {
    function theFunc(value) {
      console.log('calculating')
      return value
    }

    const memoizedFunc = this._.memoize(theFunc)

    console.log(memoizedFunc('hello')) // 沒有快取，會印出 calculating
    console.log(memoizedFunc('hello')) // 回傳快取的結果，不會印出 calculating
    console.log(memoizedFunc('hello')) // 回傳快取的結果，不會印出 calculating
    console.log(memoizedFunc('world')) // 沒有快取，會印出 calculating
  }

  // .curry() 回傳 curry 後的 function
  example3() {
    const add = (a, b, c) => {
      return a + b + c
    }

    const curriedAdd = this._.curry(add)
    console.log(curriedAdd(1)(2)(3)) // 6
    console.log(curriedAdd(1, 2)(3)) // 6
    console.log(curriedAdd(1)(2, 3)) // 6
  }
}
