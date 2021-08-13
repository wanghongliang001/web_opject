class Tab {
    constructor() {
        //获取元素
        this.ul = document.querySelector('.firstnav').querySelector('ul')
        this.lis = this.ul.querySelectorAll('li')
            //绑定事件
        this.bindLi()
        this.bindAdd()




    }
    bindLi() {
        for (i = 0; i < this.lis.length; i++) {
            lis[i].addEventListener('click', function() {
                toggle()
            })
        }
    }
    bindAdd() {
        document.querySelector('.tabadd').addEventListener('click', function() {

        })
    }




    toggle(index) {
        for (i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
        }
        this.lis[index].className = 'liactive'
    }

    add() {
        //给tab添加li
        var li = document.createElement('li')
        li.innerHTML = '选项卡'
        this.ul.appendChild(li)
            // 给conten添加section
        var section = document.createElement('section')
        section.innerHTML = '添加了一个新的选项卡'
    }
}

new Tab()