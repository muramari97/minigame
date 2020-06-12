var button;             //ボタン
var song;               //音楽
var x,y;                //ノーツの位置変数
var y1;                 //判定位置の変数
var count,MAX_c,GOOD;   //コンボの変数
var score = [];         //スコアの変数


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  //ノーツの位置
  x = width/2;
  y = 0;

  //判定の位置
  y1 = 200;

  //変数の初期化
  count = 0;
  MAX_c = 0;
  GOOD = 0;
  for(var i = 0;i < 3;i++){
    score[i] = 0;
  }

  //音楽の読み込み
  song = loadSound('music/audio.mp3');

  //スタート画面の呼び出し
  start();
}
//スタート画面
function start(){
  //ゲームスタートボタン作成
  button = createButton('START');
  button.position(90, 80);
  //game画面呼び出し
  button.mousePressed(game);
  // ボタンサイズを変更
  button.style("width", "200px");
  button.style("height", "70px");
  // 角をまるく
  button.style("border-radius", "5px");

  //順位表示
  text('1位：' + score[0],80,200);
  text('2位：' + score[1],80,230);
  text('3位：' + score[2],80,260);
}
//ゲーム画面
function game() {
  //音楽再生
  song.play();
  //ノーツを流す　未完成
  /*stroke(50);
  fill(100);
  ellipse(x, y, 24, 24);
  y = y + 1;
  //MISSした時の判定
  if (判定位置より大きく外れているy座標) {
    y = 0;
    //マックスコンボの更新
    if(count > MAX_c){
      MAX_c = count;
    }
    //GOOD数を記録
    GOOD += count;
    //コンボ初期化
    count = 0;
  }*/

}
//修了画面
function end(){
  //スコア計算+表示
  score[3] = GOOD * 100;
  text('あなたのスコア：'+score[3],20,20);

  //スコアの整理
  if(score[3] >= score[0]){
    score[2] = score[1];
    score[1] = score[0];
    score[0] = score[3];
  }else if(score[3] >= score[1]){
    score[2] = score[1];
    score[1] = score[3];
  }else if(score[3] >= score[2]){
    score[2] = score[3];
  }

  //MAXコンボ表示
  text('最高コンボ：'+MAX_c,20,50);

  //ランキング表示
  for(var i = 0;i < 3;i++){
    text(i+1 + '位：' + score[i],20,70+20*i);
  }

  // リトライボタン作成
  button = createButton('RETRY');
  button.position(90, 200);
  //start画面呼び出し
  button.mousePressed(start);
  // ボタンサイズを変更
  button.style("width", "200px");
  button.style("height", "70px");
  // 角をまるく
  button.style("border-radius", "5px");

}
