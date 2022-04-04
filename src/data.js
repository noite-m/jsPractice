// "use strict";
/* データ型
  JSではデータ型を文字列と数値型で代入する際に区別する。
  ※浮動小数点数であることは考慮しない。
*/
let myName = 'Fujiki';
let num = 123;
let dec = 123.456;

console.log(myName);
console.log(num);
console.log(dec);

/* 変数が何型か調べる 
  typeof演算子を使う
*/
console.log(typeof myName); // string
console.log(typeof num); // num
console.log(typeof dec); // num

/* 動的型付け＆静的型付け
  ①動的：代入時型が決まるもの
    ⇒JSなど
  ②静的：変数宣言の際、データ型を宣言する
    ⇒Javaなど（int num = 1;)
*/
