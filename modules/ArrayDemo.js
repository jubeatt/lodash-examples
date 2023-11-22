import core from 'lodash'

export class ArrayDemo {
  constructor() {
    this._ = core
  }

  // .chunk() 把 Array 分割成 n 個 n 個一組
  example1() {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f']
    const result = this._.chunk(arr, 2)
    console.log(result) // [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ] ]
  }

  // 👍 .compact() 把 Array 中的 falsy 值去掉
  example2() {
    const arr = ['a', 0, '', null, undefined, NaN, 'b']
    const result = this._.compact(arr)
    console.log(result) // [ 'a', 'b' ]
  }

  // .concat() 把多個元素併再一起變成 Array
  example3() {
    const arr1 = ['a', 'b']
    const arr2 = ['c', 'd']
    const arr3 = [['e']]
    const num = 3
    const result = this._.concat(arr1, arr2, arr3, num)
    console.log(result) // [ 'a', 'b', 'c', 'd', [ 'e' ], 3 ]
  }

  // .difference() 比較兩個 Array 的差異
  example4() {
    const arr1 = [1, 2, 3]
    const arr2 = [2, 3, 4]
    const result = this._.difference(arr1, arr2)
    console.log(result) // 1
  }

  // 👍 .drop() 刪除前面的 n 個元素（immutable way）
  example5() {
    const arr = [1, 2, 3, 4, 5]
    const result = this._.drop(arr, 3)
    console.log(result) // [ 4, 5 ]
  }

  // 👍 .dropRight() 刪除後面的 n 個元素（immutable way）
  example6() {
    const arr = [1, 2, 3, 4, 5]
    const result = this._.dropRight(arr, 2)
    console.log(result) // [ 1, 2, 3 ]
  }

  // .fill() 填充 n1 ~ n2 範圍的內容（不包含 n2）
  example7() {
    const arr = [1, 2, 3, 4, 5]
    const result = this._.fill(arr, '*', 0, 3)
    console.log(result) // [ '*', '*', '*', 4, 5 ]
  }

  // 👍 .findIndex() 找出對應元素的 index（.find() 也同理）
  example8() {
    const arr = [
      { name: 'Alice', age: 18 },
      { name: 'Bob', age: 20 },
      { name: 'Charlie', age: 22 }
    ]
    const result = this._.findIndex(arr, { name: 'Bob' })
    console.log(result) // 1
  }

  // .intersection() 找出多個 Array 的交集
  example9() {
    const arr1 = ['a', 'b']
    const arr2 = ['b', 'c']
    const arr3 = ['b', 'd']
    const result = this._.intersection(arr1, arr2, arr3)
    console.log(result) // [ 'b' ]
  }
}
