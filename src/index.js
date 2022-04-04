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
