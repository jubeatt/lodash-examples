import core from 'lodash'

export class MathDemo {
  constructor() {
    this._ = core
  }

  // 👍 加總結果
  example1() {
    const arr = [1, 2, 3, 4, 5]
    const result = this._.sum(arr)
    console.log(result) // 15
  }

  // 👍 產生亂數
  example2() {
    for (let i = 0; i < 20; i++) {
      const result = this._.random(1, 10) // 產生數字 1 ~ 10（頭尾都有包含）
      console.log(result)
    }
  }
}
