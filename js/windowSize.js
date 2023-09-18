// ウィンドウサイズを取得
function getWindowSize(){
    var windowWidth_ofContents = Math.min(window.innerWidth, window.parent.screen.width);
    var windowHeight_ofContents = Math.min(window.innerHeight, window.parent.screen.height);

    console.log("window size (width, height): ( " + windowWidth_ofContents + ", " + windowHeight_ofContents + " )");

    let windowSize = [windowWidth_ofContents, windowHeight_ofContents];
    return windowSize;
}

// 画面サイズが変わったときに実行
$(window).resize(function() {
    getWindowSize();
});

export { getWindowSize }