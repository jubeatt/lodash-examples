import core from 'lodash'
import readline from 'readline'

export class UtilityDemo {
  constructor() {
    this._ = core
    this.readline = readline
  }

  // 👍 .debounce()
  example1() {
    const rl = this.readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    const handleInput = (input) => {
      console.log('your input:', input)
    }

    const debouncedHandleInput = this._.debounce(handleInput, 1000)

    rl.on('line', debouncedHandleInput)
  }

  // 👍 .throttle()
  example2() {
    const rl = this.readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    const handleInput = (input) => {
      console.log('your input:', input)
    }

    const throttledHandleInput = this._.throttle(handleInput, 1000)

    rl.on('line', throttledHandleInput)
  }

  // .delay() 跟 setTimeout 是一樣的東西
  example3() {
    const print = () => {
      console.log('hello world')
    }
    this._.delay(print, 1000)
  }

  // 👍 .forEach() 遍歷任何 iterable 的東西
  example4() {
    const str = 'ABC'
    const arr = [1, 2, 3]
    const obj = { name: 'Tom', age: 18 }

    console.log('loop through string')
    this._.forEach(str, (value, index) => {
      console.log(`${index} - ${value}`)
    })

    console.log('loop through array')
    this._.forEach(arr, (value, index) => {
      console.log(`${index} - ${value}`)
    })

    console.log('loop through object')
    this._.forEach(obj, (value, key) => {
      console.log(`${key} - ${value}`)
    })
  }

  // 👍 .sortBy() 排序（immutable way）
  example5() {
    const numbers = [8, 7, 2, 3, 1]
    const arr = [
      { name: 'Tom', age: 18 },
      { name: 'Bob', age: 20 },
      { name: 'Charlie', age: 22 }
    ]

    const result1 = this._.sortBy(numbers)
    const result2 = this._.sortBy(arr, ['name'])

    console.log(result1)
    console.log(result2)
  }
}
