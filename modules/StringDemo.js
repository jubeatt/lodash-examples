import core from 'lodash'

export class StringDemo {
  constructor() {
    this._ = core
  }

  // .capitalize() 把字首轉大寫，其餘變小寫
  example1() {
    const str = 'lodasH'
    const result = this._.capitalize(str)
    console.log(result) // Lodash
  }

  // .repeat() 重複字串 n 次
  example2() {
    const str = '*'
    const result = this._.repeat(str, 5)
    console.log(result) // *****
  }

  // .startCase() 每個單字的字首轉大寫
  example3() {
    const str = 'hello world'
    const result = this._.startCase(str, 5)
    console.log(result) // Hello World
  }

  // .trim() 去掉頭尾的空格
  example4() {
    const str = '     lodash     '
    const result = this._.trim(str)
    console.log(result) // lodash
  }
}
