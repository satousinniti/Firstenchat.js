enchant(); //…①
var picNumber = 12; //…②
window.onload = function() { //…③
	var game = new Game(320, 480); //…④
	game.preload('http://enchantjs.com/assets/images/chara3.gif'); //…⑤
	game.onload = function() { //…⑥
		var bear = new Sprite(32, 32); //…⑦
        bear.scale(2,2);
		bear.image = //…⑧
			game.assets['http://enchantjs.com/assets/images/chara3.gif'];
		bear.frame = 12; //…⑨
		bear.addEventListener(Event.ENTER_FRAME, function() { //…⑩
			picNumber++; //…⑪
			if (picNumber > 14) { //…⑫
				picNumber = 12;	
			}
			bear.frame = picNumber; //…⑬
			bear.x += 2; //…⑭
			});
        bear.addEventListener(Event.TOUCH_START, function(event){
           bear.x=0; 
        });
		game.rootScene.addChild(bear); //…⑮
        
        var bear2 = new Sprite(32, 32); //…⑦
        bear2.scale(2,2);
        bear2.y=32;
		bear2.image = //…⑧
			game.assets['http://enchantjs.com/assets/images/chara3.gif'];
		bear2.frame = 12; //…⑨
		bear2.addEventListener(Event.ENTER_FRAME, function() { //…⑩
			picNumber++; //…⑪
			if (picNumber > 14) { //…⑫
				picNumber = 12;	
			}
			bear2.frame = picNumber; //…⑬
			bear2.x += 2; //…⑭
			});
        bear2.addEventListener(Event.TOUCH_START, function(event){
           bear2.x=0; 
        });
        game.rootScene.addChild(bear2);
        };
	game.start(); //…⑯

};
/*

enchant();
window.onload = function() {
var game = new Game(320, 480);
game.onload = function() {
	var bgSprite = new Sprite(320, 480); //背景画像となるスプライト
	var bgSurface = new Surface(320, 480); //スプライトの画像データ
    bgSurface.context.strokeStyle = 'red'; //線の色を赤にする
    bgSurface.context.beginPath(); //描画開始
    bgSurface.context.rect(100, 100, 150, 150); // 四角形
    bgSurface.context.moveTo(200, 200); //直線の始点
    bgSurface.context.lineTo(300, 300); //直線の終点
    bgSurface.context.stroke(); //描画指示
    bgSprite.image = bgSurface; //image 属性として指定
	game.rootScene.addChild(bgSprite); //子として追加
	};
game.start(); // ゲームスタート
};
*/