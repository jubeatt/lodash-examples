import core from 'lodash'

export class CollectionDemo {
  constructor() {
    this._ = core
  }

  // 👍 .filter() 過濾元素（把要的留下）
  example1() {
    // 1. 篩出偶數
    const numbers = [1, 2, 3, 4, 5]
    const result1 = this._.filter(numbers, (num) => num % 2 === 0)
    console.log(result1) // [2, 4]

    // 2. 篩出年齡為 20 的人
    const users = [
      { name: 'Alice', age: 20 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 20 }
    ]

    const result2 = this._.filter(users, { age: 20 })
    console.log(result2) // [ { name: 'Alice', age: 20 }, { name: 'Charlie', age: 20 } ]
  }

  // 👍 .reject() 過濾元素（把不要的剔除）
  example2() {
    // 1. 剔除偶數
    const numbers = [1, 2, 3, 4, 5]
    const result1 = this._.reject(numbers, (num) => num % 2 === 0)
    console.log(result1) // [1, 3, 5]

    // 2. 剔除出年齡為 20 的人
    const users = [
      { name: 'Alice', age: 20 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 20 }
    ]

    const result2 = this._.reject(users, { age: 20 })
    console.log(result2) // [ { name: 'Bob', age: 30 } ]
  }

  // 👍 .partition() 把元素拆成兩組
  example3() {
    // 1. 拆成偶數 & 奇數
    const numbers = [1, 2, 3, 4, 5, 6]
    const result1 = this._.partition(numbers, (num) => num % 2 === 0)
    console.log(result1)
    // [
    //   [2, 4, 6], // 偶數
    //   [1, 3, 5]  // 奇數
    // ]

    // 2. 拆成年齡為 20 & 不為 20 的人
    const users = [
      { name: 'Alice', age: 20 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 20 }
    ]

    const result2 = this._.partition(users, { age: 20 })
    console.log(result2)
    // [
    //   [{ name: 'Alice', age: 20 }, { name: 'Charlie', age: 20 }], // 年齡為 20
    //   [{ name: 'Bob', age: 30 }] // 年齡不為 20
    // ]
  }

  // .union() 取交集，並去除重複項目
  example4() {
    const arr1 = [1, 2, 3]
    const arr2 = [2, 3, 4]
    const arr3 = [3, 4, 5]

    const result = this._.union(arr1, arr2, arr3)
    console.log(result) // 1, 2, 3, 4, 5]
  }

  // 👍 .groupBy() 把篩選結果分別存到對應的 key 底下
  example5() {
    const users = [
      { name: 'Alice', age: 20 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 20 },
      { name: 'Alice', age: 25 }
    ]

    // 回傳相同 key 值的會被組在一起
    const result = this._.groupBy(users, (user) => (user.name === 'Alice' ? 'Alice' : 'Others'))
    console.log(result)
    // {
    //   Alice: [ { name: 'Alice', age: 20 }, { name: 'Alice', age: 25 } ],
    //   Others: [ { name: 'Bob', age: 30 }, { name: 'Charlie', age: 20 } ]
    // }
  }
}
