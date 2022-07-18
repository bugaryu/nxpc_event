// load完了時
$(window).on('load', function () {
	// ローディング画面を2.0秒（2000ms）待機してからフェードアウト
	// フェードアウト後に要素を削除
	// $("#loading").delay(2000).fadeOut('slow', function() {
	// 	this.remove();
	// });
	// サーバの場合、読み込み後に呼ばれるため、delayをなしにする
	$("#loading").fadeOut('slow', function() {
		this.remove();
	});
});

// スクロールイベント
// $(window).scroll(function () {
// 	$('#bgimg').css('filter', 'blur(40px)'); // 背景をブラー
// });

// ナビゲーションクリック
$('nav a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;  //idの上部の距離を取得
	$('body,html').animate({ scrollTop: pos }, 100); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール

	return false;
});