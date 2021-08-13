$(function() {
    //用全选按钮的状态改变下面的小选择框项目
    $('.checkall').change(function() {
        // console.log($(this).prop('checked'));
        $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'))
    })
    $('.j-checkbox').change(function() {
        // console.log($('.j-checkbox:checked'));
        if ($('.j-checkbox:checked').length == 3) {
            $('.checkall').prop('checked', true)
        } else {
            $('.checkall').prop('checked', false)

        }
    })
    $('.increment').click(function() {
        var n = $(this).siblings('.itxt').val()
            // console.log(n);
        n++
        $(this).siblings('.itxt').val(n)
        var p = $(this).parent().parent().siblings(".p-price").html()
        p = p.substr(1)
        var price = (n * p).toFixed(2)
        $(this).parent().parent().siblings(".p-sum").html('￥' + price)
        getSum()
    })
    $('.decrement').click(function() {
        var n = $(this).siblings('.itxt').val()
            // console.log(n);
        n--
        if ($(this).siblings('.itxt').val() <= 1) {
            return false
        } else {
            $(this).siblings('.itxt').val(n)
        }
        var p = $(this).parent().parent().siblings(".p-price").html()
        p = p.substr(1)
        var price = (n * p).toFixed(2)
        $(this).parent().parent().siblings(".p-sum").html('￥' + price)
        getSum()

    })
    $(".itxt").change(function() {
        var p = $(this).parent().parent().siblings(".p-price").html()
        p = p.substr(1)
        var n = $(this).val();
        // console.log(n);
        var price = (n * p).toFixed(2)
        $(this).parent().parent().siblings(".p-sum").html('￥' + price)
        getSum()
    })

    getSum()

    function getSum() {
        var money = 0
        var count = 0;
        $(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val())
        })
        $(".p-sum").each(function(i, ele) {
            money += parseFloat($(ele).text().substr(1))
        })
        $(".amount-sum em").text(count)
        $(".price-sum em").text('￥' + money.toFixed(2))
    }
    //删除元素
})