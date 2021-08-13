(function() {
    $(".monitor .tabs").on("click", "a", function() {
        $(this).addClass("active").siblings('a').removeClass("active");
        // console.log($(this).index());
        $(".monitor .content").eq($(this).index()).show().siblings('.content').hide();

    })
    $.each($(".marquee-view .marquee"), function() {
        var row = $(this).children().clone();
        $(this).append(row)
    })
})();
(function() {
    var myChart = echarts.init(document.querySelector('.pie'));
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [

            {
                name: '面积模式',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 6,
                    length2: 8
                },
                itemStyle: {
                    borderRadius: 5
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 10, name: '湖北' }
                ]
            }

        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize()
    })
})();
(function() {
    var myChart = echarts.init(document.querySelector('.bar'));
    var item = {
        name: '',
        value: '1200',
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        tooltip: {
            extraCssText: 'opacity:0'
        }
    };
    var option = {
        // 修改线性渐变色方式 1
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1, [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' } // 1 结束颜色
            ]
        ),
        tooltip: {
            trigger: 'item',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [{
            type: 'category',
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            axisTick: {
                alignWithLabel: false,
                show: false,

            },
            axisLabel: {
                color: '#4c9bfd',
                interval: 0
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                alignWithLabel: false,
                show: false,

            },
            axisLabel: {
                color: '#4c9bfd',

            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [2100, 1900, 1700, 1560, 1400,
                // 中间省略的数据  准备三项
                item,
                item, item, 900, 750, 600, 480, 240
            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize()
    })

})();
//订单模块
(function() {
    $('.order .filter').on('click', 'a', function() {
        $(this).addClass('active').siblings('a').removeClass('active');
        index = $(this).index()
        if ($(this).index() == 0) {
            $('.order .item h4').eq(0).text('20,301,987')
            $('.order .item h4').eq(1).text('99834')
        } else if ($(this).index() == 1) {
            $('.order .item h4').eq(0).text('5,005,980')
            $('.order .item h4').eq(1).text('24,660')
        } else if ($(this).index() == 2) {
            $('.order .item h4').eq(0).text('1,668,660')
            $('.order .item h4').eq(1).text('8,206')
        } else {
            $('.order .item h4').eq(0).text('55,622')
            $('.order .item h4').eq(1).text('274')
        }
    });
    var index = 0
    console.log($('.order .filter a'));
    var timer = setInterval(function() {
        if (index >= 4) {
            index = 0
        }
        $('.order .filter a').eq(index).click()
        index++
    }, 1000);
    $('.order').hover(function() {
        clearInterval(timer)
    }, function() {
        clearInterval(timer)
        timer = setInterval(function() {
            if (index >= 4) {
                index = 0
            }
            $('.order .filter a').eq(index).click()
            index++
        }, 1000);

    })
})();

// 销售统计模块
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line"));
    // 2. 指定配置和数据
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };
    var option = {
        tooltip: {
            trigger: "axis"
        },
        legend: {
            // data: ["预计销售额", "实际销售额"],
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true, // 显示边框
            borderColor: '#012f4a', // 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd',
                interval: 0
            },
            axisLine: {
                show: false // 去除轴线
            }
        },
        yAxis: {
            type: "value",
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }

        },
        series: [{
                name: "预计销售额",
                type: "line",
                stack: "总量",
                smooth: true,
                data: data.year[0]
            },
            {
                name: "实际销售额",
                type: "line",
                stack: "总量",
                smooth: true,
                data: data.year[1]
            }
        ]
    };

    // 3. 把配置和数据给实例对象
    myChart.setOption(option);
    $(".sales .caption").on('click', 'a', function() {
        $(this).addClass('active').siblings('a').removeClass('active')
            // console.log($(this).attr('date-type')); //获得自定义属性
        index = $(this).index() - 1
        var currData = data[$(this).attr('date-type')]
        option.series[0].data = currData[0]
        option.series[1].data = currData[1]
        myChart.setOption(option);

    })
    var as = $('.sales .caption a')
    var index = 0
    var timer = setInterval(function() {
        if (index >= 4) {
            index = 0
        }
        as.eq(index).click()
        index++
    }, 1000);
    $(".sales").hover(function() {
        clearInterval(timer)
            // console.log(1);
    }, function() {
        clearInterval(timer);
        timer = setInterval(function() {
            if (index >= 4) {
                index = 0
            }
            as.eq(index).click()
            index++

        }, 1000);
        // console.log(2);
    })
    window.addEventListener('resize', function() {
        myChart.resize()
    })

})();

//渠道分布(channel)-雷达图
(function() {
    var myChart = echarts.init(document.querySelector('.radar'))
        // Schema:
        // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
    var dataBJ = [
        [90, 19, 56, 11, 34],
    ];

    var lineStyle = {
        normal: {
            width: 1,
            opacity: 0.5
        }
    };

    var option = {
        // backgroundColor: '#161627',
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ['60%', '10%'],
        },
        legend: {
            bottom: 5,
            // data: ['北京'],
            itemGap: 20,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            selectedMode: 'single'
        },
        // visualMap: {
        //     show: true,
        //     min: 0,
        //     max: 20,
        //     dimension: 6,
        //     inRange: {
        //         colorLightness: [0.5, 0.8]
        //     }
        // },
        radar: {
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            radius: '65%',
            shape: 'circle',
            splitNumber: 4,
            name: {
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                },
                normal: {
                    color: '#fff',
                    // width: 1
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        series: [{
            name: '北京',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
                color: '#fff'
            },
            label: {
                show: true,
                color: '#fff',
                fontSize: 10
            },
            areaStyle: {
                opacity: 0.1
            },
            areaStyle: {
                color: 'rgba(238, 197, 102, 0.6)',
            },
        }]
    };
    myChart.setOption(option);
})();
(function() {
    var myChart = echarts.init(document.querySelector('.gauge'));
    var option = {

        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['130%', '150%'],
            center: ['48%', '80%'],
            startAngle: 180,
            hoverOffset: 0,
            labelLine: {
                show: false
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        // 颜色渐变#00c9e0->#005fc1
                        color: new echarts.graphic.LinearGradient(
                            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                            0,
                            0,
                            0,
                            1, [
                                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                { offset: 1, color: "#005fc1" } // 1 结束颜色
                            ]
                        )
                    }
                },
                { value: 100, itemStyle: { color: '#12274d' } },
                { value: 200, itemStyle: { color: 'transparent' } },
            ]
        }]
    };
    myChart.setOption(option);
})();
(function() {
    var hotData = [{
            city: '北京', // 城市
            sales: '25, 179', // 销售额
            flag: true, //  上升还是下降
            brands: [ //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: '八喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: '八喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: '八喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
    ];
    var supHTML = "";
    $.each(hotData, function(index, item) {
        // console.log(item);
        supHTML += `<li><span>${item.city}</span><span> ${item.sales} <s class=
    ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
    });
    $(".sup").html(supHTML);
    var $lis = $('.province .sup li')
        // 第一个默认激活
    $lis.eq(0).mouseenter()
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index >= 5) index = 0;
        // lis.eq(index).mouseenter();
        render(lis.eq(index));
    }, 2000);

    $(".province .sup").hover(
        // 鼠标经过事件
        function() {
            clearInterval(timer);
        },
        // 鼠标离开事件
        function() {
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                if (index >= 5) index = 0;
                // lis.eq(index).mouseenter();
                render(lis.eq(index));
            }, 2000);
        }
    );
})()