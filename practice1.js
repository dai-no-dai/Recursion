x = 1;
 // データ方を調べるメソッド
console.log(typeof(x))
console.log(typeof('Hi'))

// typeofメソッドではnullやオブジェクトを詳しく判別できない
console.log(typeof(null))
console.log(typeof(new Date()));
console.log(typeof(new Array()));

// 詳しく判別するメソッド
console.log(toString.call(new Date()));
console.log(toString.call(new Array()));
