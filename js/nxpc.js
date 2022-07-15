//logoの表示
$(window).on('load', function () {
	$("#loading").delay(2000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
	// $("#nxpc_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト

	// コンテンツを非表示に
	$('.content_wrap').hide();
});

// スクロールイベント
$(window).scroll(function () {
	$('#bgimg').css('filter', 'blur(40px)'); // 背景をブラー
});

// ナビゲーションクリック
$('nav a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	$('.content_wrap').fadeIn();

	var pos = $(elmHash).offset().top;  //idの上部の距離を取得
	$('body,html').animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール

	return false;
});