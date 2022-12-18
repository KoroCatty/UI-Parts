'use strict'
// 先に定義する
const open= document.getElementById('open');// HTMLからidを取得してopenに格納
const overlay = document.querySelector('.overlay');// HTMLからclassを取得してopenに格納

const close = document.getElementById("close");




//id= openのタグがクリックされたら実行
open.addEventListener('click' , () =>{
overlay.classList.add("show"); //CSSでこのshowのクラスを作って,このクラスをクリックした時追加する

open.classList.add("hide"); //hideとういうクラスを追加する
});


//closeタグがクリックされたら実行
close.addEventListener('click' , () =>{
overlay.classList.remove("show"); //追加されたクラスを取り除く

open.classList.remove("hide"); ///追加されたクラスを取り除く
});