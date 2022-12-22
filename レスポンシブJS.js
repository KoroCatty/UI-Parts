
// ブラウザサイズによってJavaScriptを切り替える
window.addEventListener("DOMContentLoaded", init );
  function init() {
    let query = window.matchMedia( "(min-width: 481px)" );

    if (query.matches) {
      // if the page is wider than 481px
      alert("パソコンサイズ！");
    } else {
      // if the page is smaller than 481px
      alert("SP size!!");
    }
  }