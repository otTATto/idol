import { getWindowSize } from './windowSize.js';

// あとで使う変数を用意
var windowWidth;
var windowHeight;
var setOfTopValue_center;
var setOfTop_title;

// あとで使う関数を用意
const sleep = (second) => new Promise(resolve => setTimeout(resolve, second * 1000));

// ページが読み込まれたときに実行
window.onload = async function () {
    setContent();
    if ( navigator.userAgent.indexOf('Android') > 0 ){
        $('#nowebfont').removeClass('d-none');
    }

    setInterval(async () => {
        // ボタンの内容を周期的に変化させる
        $('#mainButtonText').removeClass('fadeIn').addClass('fadeOut');
        await sleep(3);
        $('#commingSoonText').removeClass('f-Montserrat-eb-i').addClass('f-LineSeedJp-Eb');
        let mainButtonText = document.getElementById('mainButtonText');
        mainButtonText.innerHTML = '詳細は<br>こちら！';
        $('#mainButtonText').removeClass('fadeOut').addClass('fadeIn');
        await sleep(5);
        $('#mainButtonText').removeClass('fadeIn').addClass('fadeOut');
        await sleep(3);
        $('#commingSoonText').removeClass('f-LineSeedJp-Eb').addClass('f-Montserrat-eb-i');
        mainButtonText.innerHTML = 'Comming<br>soon...';
        $('#mainButtonText').removeClass('fadeOut').addClass('fadeIn');
        await sleep(5);
    }, 16000);
}

// 画面サイズが変更されたときに実行
$(window).resize(function () {
    setContent();
});

function setContent() {
    // 表示領域のサイズを取得
    var windowSize = getWindowSize();
    windowWidth = windowSize[0];
    windowHeight = windowSize[1];

    setLogo();
    setCenter();
    setTitle();
    setText();
    setTap();
    setMargin();
    setPointArea();
}

function setLogo() {
    // ロゴマークの高さを決める
    if (windowWidth < 768) {
        // スモールサイズ以下の処理（スマホだと仮定する）
        var setOfContentHeight = '80px';

    } else if (windowWidth >= 768 && windowWidth < 992) {
        // ミディアムサイズの処理（タブレット端末だと仮定する）
        var setOfContentHeight = '100px';

    } else {
        // ラージサイズ以上の処理（PC画面であると仮定する）
        var setOfContentHeight = '125px';
    }
    $('#logo').css('height', setOfContentHeight);

    // ロゴマークの場所を決める
    var logoWidth = document.getElementById('logo').clientWidth;
    console.log("logo width: " + logoWidth);
    var setOfLeftValue_logo = (windowWidth / 2) - (logoWidth / 2);
    $('#logo').css('left', setOfLeftValue_logo);

}

function setCenter() {
    // 中央のコンテンツのサイズと場所を決める
    if (windowWidth < 768) {
        // スモールサイズ以下の処理（スマホだと仮定する）
        var setOfContentWidth = windowWidth * 0.9;

    } else if (windowWidth >= 768 && windowWidth < 992) {
        // ミディアムサイズの処理（タブレット端末だと仮定する）
        var setOfContentWidth = windowWidth * 0.8;

    } else {
        // ラージサイズ以上の処理（PC画面であると仮定する）
        var setOfContentWidth = windowWidth / 2;
    }

    var setOfContentHeight = windowHeight / 2;
    setOfTopValue_center = (windowHeight / 2) - (setOfContentHeight / 4);
    var setOfLeftValue = (windowWidth - setOfContentWidth) / 2;

    $('#contentOfCenter').css('top', setOfTopValue_center);
    $('#contentOfCenter').css('left', setOfLeftValue);
    $('#contentOfCenter').css('width', setOfContentWidth);
    $('#contentOfCenter').css('height', setOfContentHeight);
}

function setTitle() {
    // タイトルの場所を決める
    setOfTop_title = windowHeight / 5;
    $('#titleOfProject').css('margin-top', setOfTop_title);

    // タイトルのフォントサイズを決める
    if (windowWidth < 768) {
        // スモールサイズ以下の処理（スマホだと仮定する）
        var fontSizeOfCenter = '25px';

    } else if (windowWidth >= 768 && windowWidth < 992) {
        // ミディアムサイズの処理（タブレット端末だと仮定する）
        var fontSizeOfCenter = '30px';

    } else {
        // ラージサイズ以上の処理（PC画面であると仮定する）
        var fontSizeOfCenter = '40px';

    }
    $('#titleOfProject').css('font-size', fontSizeOfCenter);
}

function setTap() {
    // タップやクリックを促すテキストの場所を決める
    var setOfTop_tap = (setOfTopValue_center - setOfTop_title) / 3;

    $('#forTapText').css('margin-top', setOfTop_tap);

    // タップやクリックを促すテキストの内容を決める
    if (windowWidth < 992) {
        // スモールサイズ以下の処理（スマホだと仮定する）
        // ミディアムサイズの処理（タブレット端末だと仮定する）
        var contentOfText = 'TAP';

    } else {
        // ラージサイズ以上の処理（PC画面であると仮定する）
        var contentOfText = 'CLICK';

    }
    $('#contentOfTapText').text(contentOfText);

}

function setText() {
    // テキストのフォントサイズを決める
    if (windowWidth < 768) {
        // スモールサイズ以下の処理（スマホだと仮定する）
        var fontSizeOfCenter = '35px';
        var padding = "40px 20px";
        var marginRightValue = '-10px';

    } else if (windowWidth >= 768 && windowWidth < 992) {
        // ミディアムサイズの処理（タブレット端末だと仮定する）
        var fontSizeOfCenter = '50px';
        var padding = "20px 40px";
        var marginRightValue = '-15px';

    } else {
        // ラージサイズ以上の処理（PC画面であると仮定する）
        var fontSizeOfCenter = windowWidth / 20;
        var padding = "50px 100px";
        var marginRightValue = '-20px';

    }
    console.log("padding: " + padding);

    for (let i = 0; i < 15; i++) {
        if (i == 8) continue;

        var target = '#t-' + i.toString().padStart(2, "0");
        $(target).css('margin-right', marginRightValue);
    }

    $('#commingSoonText').css('padding', padding);
    $('#commingSoonText').css('font-size', fontSizeOfCenter);
}

// 空白の調整
function setMargin() {
    var setOfTop_margin = windowHeight * (3 / 4);

    $('#margin01').css('margin-top', setOfTop_margin);
}

// 募集要項やポイントを表示する領域
function setPointArea() {
    if (windowWidth < 768) {
        // スモールサイズ以下の処理（スマホだと仮定する）
        $('#pointArea').removeClass('col-8').addClass('col-12');

    } else {
        // ラージサイズ以上の処理（PC画面であると仮定する）
        $('#pointArea').removeClass('col-12').addClass('col-8');

    }
    
}

// ボタンが押されたらジャンプする
function jump(num) {
    var pos = $('#applyForm').offset().top;	//idの上部の距離を取得
    $('body,html').animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
}
window.jump = jump;
export { jump }