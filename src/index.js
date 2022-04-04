// "use strict";

// エスケープシーケンス
console.log("Hello, I'm Mikiya Fujiki");
// \tはタブ、\nは改行
console.log('¥\tAAA\nBBB');
console.log('こんにちは！"俺です。"');

// JS上ではシングルクォーテーションとダブルクォーテーションのどちらでも問題ない。
console.log('Hello');

/*　変数展開 
  変数：何かしらの値を入れておくための箱のようなもの
    ⇒メモリを消耗する為無駄な変数宣言をしない
    ⇒値を廃棄するなどを行う
    https://zenn.dev/antez/books/568dd4d86562a1/viewer/09848c
  定数：基本的に値が変わらないもの
*/
// 変数
let color = 'Red';
console.log(color);
color = 'Green';
console.log(color);
/* 
 複数単語をつなげた変数宣言の場合は、キャメルケースやスネークケースなどを利用する。
 キャメル：myColor
 スネーク：my_color
*/

/* 
  varも宣言可能
  だが、最新のJSではletを使う。
  理由など：https://zenn.dev/yuji6523/articles/8501743a7e1d31
*/
// 定数再代入不可
const PI = 3.14;
console.log(PI);
// 定数はスネークで宣言することが多い。
const TAX_RATE = 0.1;
console.log(TAX_RATE);

// ■演習問題
// Aさんは、
// ・体重が60kg
// ・身長が1.7m
// BMIを計算して、consoleへ出力してください。

// 補足：
// BMI = 体重kg / (身長m * 身長m)
// BMI・・・肥満度を表す体格指数。
// 演算子の優先順位：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

let weight = 60;
let height = 1.7;
const BMI = weight / (height * height);
console.log(BMI);
