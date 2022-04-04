// "use strict";
let lastName = 'Mikiya';
let firstName = 'Fujiki';
let message = 'Hello! ' + lastName + ' ' + firstName + 'さん';

console.log(message);

/*　テンプレートリテラル
  文字列のなかで変数展開が可能
  テンプレートリテラルの中では、改行も反映される
*/

let message2 = `こんにちは${lastName}${firstName}さん
javascriptの学習を始めよう`;
console.log(message2);
