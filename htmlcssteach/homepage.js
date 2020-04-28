// 参考：hexo博客next主题的饭回顶部动画、百分比+菜鸟教程js返回顶部实例（https://www.runoob.com/w3cnote/js-to-top.html）+自行结合魔改
// 当网页向下滑动时，出现"返回顶部" 按钮，按钮上显示下滑的百分比
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("myBtn").style.display = "block";
        var docHeight = document.body.scrollHeight;
        var winHeight = window.innerHeight;
        var contentVisibilityHeight = docHeight > winHeight ? docHeight - winHeight : document.body.scrollHeight - winHeight;
        var scrollPercent = Math.min(100 * window.scrollY / contentVisibilityHeight, 100);
        document.getElementById("myBtn").innerHTML = Math.round(scrollPercent) + "%";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
 
// 点击按钮，返回顶部，使用动画
function topFunction() {
      window.anime({
        targets  : document.scrollingElement,
        duration : 200,
        easing   : 'linear',
        scrollTop: 0
      });
}