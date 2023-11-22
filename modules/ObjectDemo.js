import core from 'lodash'

export class ObjectDemo {
  constructor() {
    this._ = core
  }

  // .assign() 跟原生的 assign 用法差不多（需注意淺拷貝問題）
  example1() {
    const obj1 = { a: 1 }
    const obj2 = { a: 2, b: 2, c: 3, d: { e: 4 } }
    const result = this._.assign(obj1, obj2)
    console.log(result.d === obj2.d) // true
    console.log(result) // { a: 2, b: 2, c: 3, d: { e: 4 } }
  }

  // 👍 .clone() 複製 object（淺拷貝）
  example2() {
    const obj = { name: 'Tom', age: 18, family: { brother: 'Jack' } }
    const result = this._.clone(obj)
    console.log(result === obj) // false
    console.log(result.family === obj.family) // true
    console.log(result) // { name: 'Tom', age: 18, family: { brother: 'Jack' } }
  }

  // 👍 .cloneDeep() 複製 object（深拷貝）
  example3() {
    const obj = { name: 'Tom', age: 18, family: { brother: 'Jack' } }
    const result = this._.cloneDeep(obj)
    console.log(result === obj)
    console.log(result.family === obj.family)
    console.log(result)
  }

  // 👍 .has() 檢查 object 中有沒有對應的屬性
  example4() {
    const obj = {
      a: {
        b: {
          c: 1
        }
      }
    }
    const result1 = this._.has(obj, 'a')
    const result2 = this._.has(obj, 'a.b')
    const result3 = this._.has(obj, 'a.b.c')
    const result4 = this._.has(obj, 'a.b.d')
    console.log(result1) // true
    console.log(result2) // true
    console.log(result3) // true
    console.log(result4) // false
  }

  // 👍 .keys() 取得 object 的所有 key
  example5() {
    const obj = { name: 'Tom', age: 18 }
    const result = this._.keys(obj)
    console.log(result)
  }

  // 👍 .values() 取得 object 的所有 value
  example6() {
    const obj = { name: 'Tom', age: 18 }
    const result = this._.values(obj)
    console.log(result)
  }

  // .mapKeys() 修改 key 的值（mutable way）
  example7() {
    const obj = { name: 'Tom', age: 18 }
    const result = this._.mapKeys(obj, (value, key) => {
      return key.toUpperCase()
    })
    console.log(result) // { NAME: 'Tom', AGE: 18 }
  }

  // 👍 .omit() 刪除指定屬性（回傳新的 object）
  example8() {
    const obj = { name: 'Tom', age: 18 }
    const result = this._.omit(obj, 'name')
    console.log(result) // { age: 18 }
  }

  // 👍 .pick() 取出指定屬性（回傳新的 object）
  example9() {
    const obj = { name: 'Tom', age: 18, sex: 'man' }
    const result = this._.pick(obj, 'age', 'sex')
    console.log(result) // { age: 18, sex: 'man' }
  }

  // 👍 .defaults() 合併多個 object（若有相同屬性的話"不會覆蓋"）
  example10() {
    const object = { a: 1 }
    const result = this._.defaults(object, { a: 2, b: 2 }, { b: 3, c: 3 })
    console.log(result) // { a: 1, b: 2, c: 3 }
  }

  // 👍 .merge() 合併多個 object（若有相同屬性的話"會覆蓋"）
  example11() {
    const object = { a: 1 }
    const result = this._.merge(object, { a: 2, b: 2 }, { b: 3, c: 3 })
    console.log(result) // { a: 2, b: 3, c: 3 }
  }

  // 👍 .pickBy() 挑出符合條件的屬性
  example12() {
    const object = { a: 1, b: 'hello', c: true }
    const result = this._.pickBy(object, (value, key) => {
      console.log(`${key}: ${value}`)
      return this._.isNumber(value)
    })
    console.log(result) // { a: 1 }
  }
}
