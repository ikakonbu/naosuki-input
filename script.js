window.onload = (event) => {
  const h1 = document.querySelectorAll(".inputbtn");
  const h2 = document.querySelector(".textarea-wrapper > textarea");
  const h3 = document.querySelector(".clearbtn");
  const textarea = document.querySelector("textarea");
  const share = document.querySelector(".sharebtn");

  const thissiteURL = 'https://example.com';/*https://ikakonbu.github.io/naosuki-input/*/
  //各入力ボタンを押したらテキストを追加
  h1.forEach((node) => {
    node.addEventListener('click', function(){
        h2.value += node.innerText;
        textareaset();
    });
  });

  //消去ボタン
  h3.addEventListener('click', function(){
    h2.value = '';
    textareaset();
  });

  //テキストエリアの自動サイズ調整
  textarea.addEventListener("input", textareaset);

  function textareaset(){
    console.log('テキストエリア感知');
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

    //消去ボタン
    share.addEventListener('click', function(){
        window.location.href = 'https://misskey.io/share?text=' + textarea.value + '%0A%0A' + 'なおすき日本語入力を使って文章を作りました！' + '&url=' + thissiteURL;
    });
};