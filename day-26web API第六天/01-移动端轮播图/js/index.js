window.addEventListener('load', function() {
    //获取元素
    var focus = document.querySelector('.focus')
    var ul = focus.querySelector('ul')
    var ol = focus.querySelector('ol')
    var w = focus.offsetWidth
    var index = 0
    var timer = setInterval(function() {
        index++
        var translatex = -index * w
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translatex + 'px)'
    }, 2000)
    ul.addEventListener('transitionend', function() {
        if (index >= 3) {
            index = 0
            ul.style.transition = 'none'
            var translatex = -index * w
            ul.style.transform = 'translateX(' + translatex + 'px)'
        } else if (index < 0) {
            index = 2
            ul.style.transition = 'none'
            var translatex = -index * w
            ul.style.transform = 'translateX(' + translatex + 'px)'
        }
        ol.querySelector('.current').classList.remove('current')
        ol.children[index].classList.add('current')
    })
    var startX = 0
    var moveX = 0
    ul.addEventListener('touchstart', function(e) {
        var startX = e.targetTouches[0].pageX
        clearInterval(timer)
    })
    ul.addEventListener('touchmove', function(e) {
        // 手指移动的距离=手指开始在屏幕的距离-当前
        var moveX = e.targetTouches[0].pageX - startX
            //盒子原来的位置+手指移动的距离
        var translatex = -index * w + moveX
        ul.style.transition = 'none'
        ul.style.transform = 'translateX(' + translatex + 'px)'

    })
    ul.addEventListener('touchend', function(e) {
        if (Math.abs(moveX) > 50) {
            //如果右滑就播放下一章图片，就是移动后的坐标-开始坐标为正
            if (moveX > 0) {
                index--
                //如果左滑就播放下一章图片，就是移动后的坐标-开始坐标为负
            } else {
                index++
            }
            var translatex = -index * w
            ul.style.transition = 'all .3s'
            ul.style.transform = 'translateX(' + translatex + 'px)'

        } else {
            var translatex = -index * w
            ul.style.transition = 'all .3s'
            ul.style.transform = 'translateX(' + translatex + 'px)'
        }
    })
    var goBack = document.querySelector('.goBack')
    var nav = document.querySelector('nav')

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block'
        } else {
            goBack.style.display = 'none'

        }
    })
    goBack.addEventListener('click', function() {
        window.scroll(0, 0)
    })
})