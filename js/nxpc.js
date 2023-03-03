// load完了時
$(window).on('load', function () {
	// ローディング画面を2.0秒（2000ms）待機してからフェードアウト
	// フェードアウト後に要素を削除
	$("#loading").delay(1000).fadeOut('slow', function () {
		this.remove();
	});
});

// スクロールイベント
// $(window).scroll(function () {
// 	$('#bgimg').css('filter', 'blur(40px)'); // 背景をブラー
// });

let isPlaying = false

// ナビゲーションクリック
$('nav a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;  //idの上部の距離を取得
	$('body,html').animate({ scrollTop: pos }, 200); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール

	// 音声再生と動画のロード
	if (isPlaying) {
		$('#bg-sound').get(0).pause();
	} else {
		$('#bg-sound').get(0).load();
		$('.bg-video').each((idx, el) => {
			el.load();
		});
	}
	isPlaying = !isPlaying;

	return false;
});
