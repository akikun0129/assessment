'use strict';


/*この変数でhtmlタグを操作することができるようになる。*/
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');


/*htmlが持っているonclickというプロパティを使ってクリックしたときに
何か処理をしますか？しますか？とonclickが聞いてくるから
関数をそこに登録する感じ。（最初は空だから何も起きない。そのため関数（処理）を登録する。）

valueにuserNameinputの値が入っている。（入力エリアに入れた文字のこと）
それをuserName変数に入れておく。*/


 assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if (userName.length === 0){
   return;
  }


  

/*removeAllChildrenという関数を作って引数にelementをを入れる。
これによって全てのｈｔｍｌの子要素を取得し削除するということになる。*/

function removeAllChildren(element){
   while (element.firstChild) {
 　element.removeChild(element.firstChild);
 }
}
/*この前の行まででは関数を設定しただけなのでこれを使用するためのもの。
例やけどfunction logDate() {
  console.log(new Date());
}
ここまでで関数を設定して下のやつを打つことによって
logDate(); 
Thu Mar 07 2020 12:56:33 GMT+0900 (日本標準時)が表示されるようになる。
logDate();と打たないとエラーになり日付は表示されない。*/

//これは上の関数（例）と同じ考えなんかな？
/*(resultDividedというのは <div id="result-area"></div>の全て（divタグの中全て）を
getelemntidで取得しているから
それはこういうことだと思う
 <div id="result-area"><h3></h3><p></p></div>だろうから
 このdivタグの全てのｈｔｍｌ要素を取得しているということだから
 下のように書くのだと思う。*/

removeAllChildren(resultDivided);


 
 /*createElementでh3タグを作りinnerTextで診断結果と作る。
   この時点でheaderには’<h3>診断結果’</h3>が入っている。
   このままだと表示されないので表示されるように
   空のresultDividedに子要素処理を追加する処理。
   <h3>診断結果</h3>をresult-area（resultDivided）にappendChild関数を使って作る感じ。
   一言で言うと結果表示エリアに子要素こと<h3>診断結果</h3>こと変数headerを作るということ*/

  const header = document.createElement('h3');
  header.innerText = '診断結果';
  resultDivided.appendChild(header);

  const paragraph = document.createElement('p');
  const re= assessment(userName);/*変数assessment関数を使い得た結果を変数reに入れている。
  そしてreを paragraph.innerTextに入れてresultDivided.appendChildを使って仕上げる*/
  paragraph.innerText = re;
  resultDivided.appendChild(paragraph);
}






const answers = [
'{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
'{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
'{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
'{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
'{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
'{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
'{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
'{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
'{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
'{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
'{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
'{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
'{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
];


/*function assessment(username) {
  return '';
}*/

/*let a =7
let coad = '内田明治';
let charcodename = 0;
for (let i= 0; i <coad.length; i++) {
  charcodename = charcodename + coad.charCodeAt(i);
  char = charcodename % a;
}
document.write(char);　俺が書いたコードです*/





function assessment(userName) {     /*assessment関数は全文字のコード番号を取得してそれを足し合わせるものである。
  　　　　　　　　　　　　　　　　引数（user）に入力した文字の計算をする。
                               ここの(userNameはただの引数の名前。だがuserName.lengthのようにちゃんと認められている(変数みたいに使えるみたい)みたいだよ。*/

  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }
/*動きは｛うちだ｝と入力するとしてまずはi=0なのでsumOfCharCode +userNameうちだのうのcharCodeAt(iの0が入る)で
  ’う’は12358だからこの数値が sumOfCharCodeに入る．
  次の動きはiが1増えるからi=1で sumOfCharCode12358）+userName'ち'のcharCodeAt(i＝1)で
  ’ち’は12385だからこの数値が sumOfCharCode（計24743）に入る．
  次の動きはiが1増えるからi=2で sumOfCharCode24743）+userName'だ'のcharCodeAt(i＝2)で
  ’だ’は12384だからこの数値が sumOfCharCode計37127）に入る．
  ループの条件としてiがuserName.length未満（3未満）の時だから今iが3になりループの条件が終了となり処理が終わる。
  現在 sumOfCharCode（計37127）が入っている。*/





  // 文字のコード番号の合計を回答の数で割って添字の数値をindexに入れている
  const index = sumOfCharCode % answers.length;

　//indexに入っている数値を使いanswersの配列から診断結果を取得しresultに入れる　
  let result = answers[index];　
  
  //resultに入っている診断結果の文字を入力された文字（user）に変換する処理。　　
      result = result.replaceAll('{userName}',userName);

  /*関数の結果のことを、戻り値（もどりち）といいます。
JavaScript では、戻り値を記述するために return（リターン）文を用います。
ここで変換された文字がresult変数に再代入される*/
  return result;
}




