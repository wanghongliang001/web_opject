window.addEventListener('load', function() {
    var tel = document.querySelector('#tel')
    var qq = document.querySelector('#qq')
    var nc = document.querySelector('#nc')
    var msg = document.querySelector('#msg')
    var pwd = document.querySelector('#pwd')
    var surepwd = document.querySelector('#surepwd')

    var reg = /^1[3|4|5|7|8]\d{9}$/ //手机号码
    var qqreg = /^[^0]\d{4,}$/ //QQ号
    var ncreg = /^[\u4e00-\u9fa5]{2,7}$/; //昵称
    var msgreg = /^\d{6}$/
    var pwdreg = /^[0-9a-zA-z]{6,16}$/

    regexp(tel, reg) //手机号
    regexp(qq, qqreg)
    regexp(nc, ncreg)
    regexp(msg, msgreg)
    regexp(pwd, pwdreg)


    function regexp(ele, reg) {
        ele.addEventListener('blur', function() {
            if (reg.test(this.value)) {
                this.nextSibling.className = 'success'
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
            } else {
                this.nextSibling.className = 'error'
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入 ';
            }
        })
    };

    surepwd.onblur = function() {
        if (surepwd.value == pwd.value) {
            this.nextSibling.className = 'success'
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';

        } else {
            this.nextSibling.className = 'error'
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>密码不一致，请从新输入 ';

        }
    }
})