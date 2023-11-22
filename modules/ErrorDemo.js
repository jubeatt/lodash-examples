import core from 'lodash'

export class ErrorDemo {
  constructor() {
    this._ = core
  }

  // 👍 .attempt() 用安全的方式來執行 function，並回傳結果 or 錯誤（避免直接 crash）
  example1() {
    const divide = (a, b) => {
      if (b === 0) {
        throw new Error('除數不能為 0')
      }
      return a / b
    }

    const error_result = this._.attempt(divide, 6, 0)
    const result = this._.attempt(divide, 6, 2)
    console.log(error_result.message) // 除數不能為 0
    console.log(result) // 3
  }

  // 👍 .isError() 檢查一個值是否為 Error 物件
  example2() {
    const error = new Error('錯誤')
    console.log(this._.isError(error)) // true
    console.log(this._.isError('hello')) // false
  }
}
