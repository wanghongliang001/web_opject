$(function() {
    load()
    $("#title").on('keydown', function(e) {
        if (e.keyCode === 13) {
            var local = getDate()
                // console.log(local);
            local.push({ title: $(this).val(), done: false })
            saveDate(local)
            load()
            $(this).val('')
        }
    })
    $('ol,li').on('click', 'a', function() {
        var data = getDate()
        var index = $(this).attr('id')
        console.log(index);
        data.splice(index, 1)
        saveDate(data)
        load()
    })
    $('ol,ul').on('click', 'input', function() {
        var date = getDate()
        var index = $(this).siblings('a').attr('id')
        console.log(index);

        date[index].done = $(this).prop('checked')
        console.log(date);
        saveDate(date)
        load()
    })

    function getDate() {
        var date = localStorage.getItem('todolist')
        if (date != null) {
            return JSON.parse(date)
        } else {
            return []
        }
    }

    function saveDate(date) {
        localStorage.setItem('todolist', JSON.stringify(date))
    }

    function load() {
        var date = getDate()
        $('ol,ul').empty()
        var todoCount = 0;
        var doneCount = 0;

        $.each(date, function(i, n) {
            // console.log(n);
            if (n.done) {
                $('ul').prepend('<li><input type="checkbox" checked><p>' + n.title + '</p><a href="script:;" id=' + i + '></a></li> ');
                doneCount++
            } else {
                $('ol').prepend('<li><input type="checkbox"><p>' + n.title + '</p><a href="script:;" id=' + i + '></a></li> ');
                todoCount++
            }


        })
        $('#todocount').text(todoCount)
        $('#donecount').text(doneCount)
    }
})