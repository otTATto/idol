// ウィンドウサイズを取得
function getWindowSize(){
    var windowWidth_ofContents = window.innerWidth;
    var windowHeight_ofContents = window.innerHeight;

    console.log("window size (width, height): ( " + windowWidth_ofContents + ", " + windowHeight_ofContents + " )");

    let windowSize = [windowWidth_ofContents, windowHeight_ofContents];
    return windowSize;
}

// 画面サイズが変わったときに実行
$(window).resize(function() {
    getWindowSize();
});

export { getWindowSize }