function getCommentListget() {
    $.ajax({
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        success: function(res) {
            if (res.status != 200) return alert('获取评论失败')
            var data = res.data
            var nows = []
            $.each(data, function(i, ele) {
                var str = `<li class="list-group-item">
                <span class="badge" style="background-color: #F0AD4E;">评论时间：${ele.time}</span>
                <span class="badge" style="background-color: #5BC0DE;">评论人：${ele.username}</span> ${ele.content}
            </li>`
                nows.push(str)
            })
            $('#cmt-list').empty().append(nows.join(''))
        }
    })
}
getCommentListget()

$(function() {
    $('#formAddCmt').submit(function(e) {
        e.preventDefault()
        var data = $(this).serialize()
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function(res) {
            if (res.status !== 201) {
                return alert('发表评论失败！')
            }
            getCommentListget()
            $('#formAddCmt')[0].reset()
        })
    })
})