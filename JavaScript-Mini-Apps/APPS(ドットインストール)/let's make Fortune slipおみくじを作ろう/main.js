// "use strct";

// // functionの使い方
// // functionの使う意味は簡単に言うと共通化したり、そのままベタがきすると長くなるのを防ぐことだったりがあります。
// // 以下のコードはinputタグに入力された、数字を足してconsoleへ吐き出します。
// // 適当な数字を入力して「計算するよ」ボタンを押してください。
// // consoleに計算結果が表示されます。
// // この処理をfunctionを使わずに書きます。
// // -------------------function使わないver-------------------
// const button = document.getElementById("button");

// // id="button"のタグをクリックすると以下の処理が実行される

// button.addEventListener("click", function () {
//   // inputタグの入力内容を取得
//                                            //id名
//   const sample1 = document.getElementById("sample1").value;
//   const sample2 = document.getElementById("sample2").value;
//   const sample3 = document.getElementById("sample3").value;
//   const sample4 = document.getElementById("sample4").value;
//   const sample5 = document.getElementById("sample5").value;
//   const sample6 = document.getElementById("sample6").value;
//   const sample7 = document.getElementById("sample7").value;
//   const sample8 = document.getElementById("sample8").value;

//   // 数字に直す
//   const num1 = Number(sample1);
//   const num2 = Number(sample2);
//   const num3 = Number(sample3);
//   const num4 = Number(sample4);
//   const num5 = Number(sample5);
//   const num6 = Number(sample6);
//   const num7 = Number(sample7);
//   const num8 = Number(sample8);

//   // 計算結果の表示
//   console.log(num1 + num2);
//   console.log(num3 + num4);
//   console.log(num5 + num6);
//   console.log(num7 + num8);
// });
// // めちゃくちゃ長いですよね・・・
// // では、同じような処理をfunctionを使って書きます



// // -------------------function使うver-------------------
// // functionの定義
// function calc(firstId, secondId) {
//   const sample1 = document.getElementById(firstId).value;
//   const sample2 = document.getElementById(secondId).value;
//   const num1 = Number(sample1);
//   const num2 = Number(sample2);
//   console.log(num1 + num2);
// }
// // これを作ってHTMLからadd-function-buttonというIDをとった。
// const functionButton = document.getElementById("add-function-button");
// // id="add-function-button"のタグをクリックすると以下の処理が実行される
// functionButton.addEventListener("click", function () {
//   // 定義したfunctionを使用する
//   calc("sample_01", "sample_02");
//   calc("sample_03", "sample_04");
//   calc("sample_05", "sample_06");
//   calc("sample_07", "sample_08");
// // });　　　これらsample_02などはHTMLからのサンプル名

// // functionを使用するとたったの数行で書くことができさらに、そのfunctionを再利用することができるんですね。
// // これがfunctionの主な使い方です。
