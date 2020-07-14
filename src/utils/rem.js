// 设置 rem 函数
function setRem() {

    // 获取视窗宽度
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

    //得到html的Dom元素
    let htmlDom = document.getElementsByTagName('html')[0];

    //设置根元素字体大小
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';

    // 设置 1vh 的精确值
    let _vh = window.innerHeight * 0.01
    document.body.style.setProperty('--vh', `${_vh}px`)
}

// 初始化
setRem();

// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}