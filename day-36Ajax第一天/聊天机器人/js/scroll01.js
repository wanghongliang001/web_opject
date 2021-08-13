$(function() {
    $('.input_sub').on('click', function() {
        var text = $('.input_txt').val().trim()
        if (text.length > 0) {
            $('.talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>')
        }
        $('.input_txt').val('')
        getMsg(text)
            // getVoice(text)
        resetui();
    });

    function getMsg(text) {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },
            success: function(res) {
                // console.log(res);
                if (res.message == "success") {
                    var msg = res.data.info.text
                        // console.log(msg);
                    $('.talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')

                }
                getVoice(msg)
            },
        })

    };

    function getVoice(text) {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text
            },
            success: function(res) {
                if (res.status = 200) {
                    $('#voice').attr('src', res.voiceUrl)
                }
            }

        })
    }
})