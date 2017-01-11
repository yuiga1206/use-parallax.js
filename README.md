# use-parallax.js
parallax.jsを使用してパララックスの実装テスト

## 参考サイト
* http://pixelcog.github.io/parallax.js/
* http://qiita.com/maru_katy/items/124ef557b6245bf0e76d

## 使い方
1. parallax.jsを読み込む。  
2. `<div class="parallax-window" data-parallax="scroll" data-image-src="img/wp/001.png"></div>`  
   data-image-srcに使いたい画像のパスを記入。  
3. `$('.parallax-window').parallax({imageSrc: '../img/wp/001.png'});`  
   上記を1.の下で記述（このリポジトリではcommon.js内に記述している。画像のパスは都度変更する。）。  

注：画面がスクロールしないとパララックスにならない。
