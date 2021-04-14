/**
 * Created by gzg on 2020/10/21.
 */
var msg = '不支持低版本IE 11以下浏览器，请在IE 11、谷歌、火狐、360极速模式等浏览器打开！'
var oState = {
    userInfo: true,
    topDw: "3304",
    topDwmc: "",
    kjnd: 2020,
    qsyf: 1,
    zzyf: 12,
    jbqk:[{"dwdm":"3304","dwmc":"嘉兴市","dws":714,"minkjnd":2011,"maxkjnd":2020,"zzc":2844,"zfz":2126,"jzc":718,"sr":117,"zc":130}],
    ldzc:[{"kmdm":"101+102","kmmc":"货币资金","je":341.23},{"kmdm":"111","kmmc":"短期投资","je":574.57},{"kmdm":"112","kmmc":"应收款项","je":102.08},{"kmdm":"121","kmmc":"存货","je":0}],
    fldzc:[{"kmdm":"131+132","kmmc":"农业资产","je":0},{"kmdm":"141","kmmc":"长期资产","je":0},{"kmdm":"151-152","kmmc":"固定资产净值","je":840.64},{"kmdm":"153","kmmc":"固定资产清理","je":-0.5},{"kmdm":"154","kmmc":"在建工程","je":986.11},{"kmdm":"161","kmmc":"无形资产","je":0}],
    fzzk:[{"kmdm":"201","kmmc":"短期借款","je":1.3},{"kmdm":"202","kmmc":"应付款项","je":486.39},{"kmdm":"211","kmmc":"应付工资","je":0},{"kmdm":"212","kmmc":"应付福利费","je":-25.82},{"kmdm":"221","kmmc":"长期借款及应付款","je":0},{"kmdm":"231","kmmc":"一事一议资金","je":253.45},{"kmdm":"241","kmmc":"专项应付款","je":1410.83}],
    j5nqk:[{"nf":0,"zzc":0,"zfz":0,"jzc":0,"sr":0,"zc":0}],
    pmqk:[{"nd":2020,"qskjqj":1,"zjkjqj":6,"qj":"2020年上半年","dwdm":"33042401001","zhen":"海盐县沈荡镇","cun":"永庆村","df":99,"pm":null,"xj":"五星"},{"nd":2020,"qskjqj":1,"zjkjqj":6,"qj":"2020年上半年","dwdm":"33042401002","zhen":"海盐县沈荡镇","cun":"测试村","df":97,"pm":null,"xj":"五星"}],
    zzt1:[{"dwdm":"330401","dwmc":"南湖区","d1fa9205_1":110,"d1fa9205_2":20,"k_2":null,"k_3":null},{"dwdm":"330402","dwmc":"秀洲区","d1fa9205_1":0,"d1fa9205_2":0,"k_2":null,"k_3":null},{"dwdm":"330411","dwmc":"测试市","d1fa9205_1":14,"d1fa9205_2":4,"k_2":null,"k_3":null},{"dwdm":"330412","dwmc":"平湖市","d1fa9205_1":0,"d1fa9205_2":0,"k_2":null,"k_3":null},{"dwdm":"330421","dwmc":"嘉善县","d1fa9205_1":0,"d1fa9205_2":0,"k_2":null,"k_3":null},{"dwdm":"330424","dwmc":"海盐县","d1fa9205_1":58,"d1fa9205_2":1,"k_2":null,"k_3":null},{"dwdm":"330425","dwmc":"桐乡市","d1fa9205_1":0,"d1fa9205_2":0,"k_2":null,"k_3":null}],
    zzt1_hj:[{"sum_1":72,"sum_2":5}],
    zzt2:[{"dwdm":"330401","dwmc":"南湖区","d1fa9215_1":141,"d1fa9215_2":18,"k_2":null,"k_3":null},{"dwdm":"330402","dwmc":"秀洲区","d1fa9215_1":0,"d1fa9215_2":0,"k_2":null,"k_3":null},{"dwdm":"330411","dwmc":"测试市","d1fa9215_1":5,"d1fa9215_2":3,"k_2":null,"k_3":null},{"dwdm":"330412","dwmc":"平湖市","d1fa9215_1":0,"d1fa9215_2":0,"k_2":null,"k_3":null},{"dwdm":"330421","dwmc":"嘉善县","d1fa9215_1":0,"d1fa9215_2":0,"k_2":null,"k_3":null},{"dwdm":"330424","dwmc":"海盐县","d1fa9215_1":0,"d1fa9215_2":0,"k_2":null,"k_3":null},{"dwdm":"330425","dwmc":"桐乡市","d1fa9215_1":0,"d1fa9215_2":0,"k_2":null,"k_3":null}],
    zzt2_hj:[{"sum_1":146,"sum_2":21}],
    zzt3:[{"dwdm":"330401","dwmc":"南湖区","d1fa9175_1":125,"d1fa9175_2":31,"k_2":null,"k_3":null},{"dwdm":"330402","dwmc":"秀洲区","d1fa9175_1":null,"d1fa9175_2":0,"k_2":null,"k_3":null},{"dwdm":"330411","dwmc":"测试市","d1fa9175_1":22,"d1fa9175_2":5,"k_2":null,"k_3":null},{"dwdm":"330412","dwmc":"平湖市","d1fa9175_1":2,"d1fa9175_2":1,"k_2":null,"k_3":null},{"dwdm":"330421","dwmc":"嘉善县","d1fa9175_1":null,"d1fa9175_2":0,"k_2":null,"k_3":null},{"dwdm":"330424","dwmc":"海盐县","d1fa9175_1":null,"d1fa9175_2":0,"k_2":null,"k_3":null},{"dwdm":"330425","dwmc":"桐乡市","d1fa9175_1":null,"d1fa9175_2":0,"k_2":null,"k_3":null}],
    zzt3_hj:[{"sum_1":149,"sum_2":37}],
    zzt4:[{"dwdm":"330401","dwmc":"南湖区","d1fa9213_1":0,"d1fa9213_2":0,"k_2":null,"k_3":null},{"dwdm":"330402","dwmc":"秀洲区","d1fa9213_1":0,"d1fa9213_2":0,"k_2":null,"k_3":null},{"dwdm":"330411","dwmc":"测试市","d1fa9213_1":2,"d1fa9213_2":1,"k_2":null,"k_3":null},{"dwdm":"330412","dwmc":"平湖市","d1fa9213_1":0,"d1fa9213_2":0,"k_2":null,"k_3":null},{"dwdm":"330421","dwmc":"嘉善县","d1fa9213_1":0,"d1fa9213_2":0,"k_2":null,"k_3":null},{"dwdm":"330424","dwmc":"海盐县","d1fa9213_1":0,"d1fa9213_2":0,"k_2":null,"k_3":null},{"dwdm":"330425","dwmc":"桐乡市","d1fa9213_1":0,"d1fa9213_2":0,"k_2":null,"k_3":null}],
    zzt4_hj:[{"sum_1":2,"sum_2":1}],
    zzt5:[{"dwdm":"330401","dwmc":"南湖区","d1fa9165_2": 100,"k_1":null,"k_2":null,"k_3":null},{"dwdm":"330402","dwmc":"秀洲区","d1fa9165_2":0,"k_1":null,"k_2":null,"k_3":null},{"dwdm":"330411","dwmc":"测试市","d1fa9165_2":0,"k_1":null,"k_2":null,"k_3":null},{"dwdm":"330412","dwmc":"平湖市","d1fa9165_2":0,"k_1":null,"k_2":null,"k_3":null},{"dwdm":"330421","dwmc":"嘉善县","d1fa9165_2":0,"k_1":null,"k_2":null,"k_3":null},{"dwdm":"330424","dwmc":"海盐县","d1fa9165_2":1,"k_1":null,"k_2":null,"k_3":null},{"dwdm":"330425","dwmc":"桐乡市","d1fa9165_2":0,"k_1":null,"k_2":null,"k_3":null}],
    zzt5_hj:[{"sum_1":1}],
    zzt6:[{"dwdm":"330401","dwmc":"南湖区","d1fa9226_1": 200,"d1fa9226_2":30,"k_2":null,"k_3":null},{"dwdm":"330402","dwmc":"秀洲区","d1fa9226_1":0,"d1fa9226_2":0,"k_2":null,"k_3":null},{"dwdm":"330411","dwmc":"测试市","d1fa9226_1":0,"d1fa9226_2":0,"k_2":null,"k_3":null},{"dwdm":"330412","dwmc":"平湖市","d1fa9226_1":0,"d1fa9226_2":0,"k_2":null,"k_3":null},{"dwdm":"330421","dwmc":"嘉善县","d1fa9226_1":0,"d1fa9226_2":0,"k_2":null,"k_3":null},{"dwdm":"330424","dwmc":"海盐县","d1fa9226_1":0,"d1fa9226_2":0,"k_2":null,"k_3":null},{"dwdm":"330425","dwmc":"桐乡市","d1fa9226_1":0,"d1fa9226_2":0,"k_2":null,"k_3":null}],
    zzt6_hj:[{"sum_1":0,"sum_2":0}]
}
var color = ['#FF7F50', '#06b8f8', '#ff5c58', '#ffffb3', '#1afffd', '#fee581', '#1afffd', '#1ec7f1']
var colorbar = [
    '#FF7F50', // 月份数
    '#02bcbc', // 工程个数
    '#a4a7ab', // 合同份数 
    '#0ad5ff', // 凭证数
    '#2e7cff', // 收据本数
    '#005ea1' // 涉及账套数
]
// x轴 y轴线 颜色
var axisLine = {
    lineStyle: {
        color: '#4488BB',
        width: '2'
    }
}
// x轴
var axisLabelX = {
    show: true,
    // rotate: 20,  // 倾斜的程度
    textStyle: {
        color: '#a4a7ab',
        align: 'center'
    }
}
// Y轴
var axisLabelY = {
    show: true,
    textStyle: {
        color: '#a4a7ab',
        align: 'right'
    }
}

onLoad() // 加载数据

function onLoad() {
    //getDWXX();
    setCxyf(1);
    //loaddata()
    if(!IEVersion()) { // 判断IE 浏览器版本
        $('.data_bodey').hide()
        $('.version_tip').show().html(msg)
        return false
    }
    var choose = []
    $('.year_chose').val(oState.kjnd)
    $('input[type="radio"]').click(function() {
        choose = []
        $('input[type="checkbox"]:checked').each(function(index) { 
            choose.push($(this).val())
        })
    })
    $('input[type="checkbox"]').click(function() {
        $('input[type="checkbox"]:checked').each(function(index) { 
            choose.push($(this).val())
        })
    })
    
    yingXiao(oState) // left and right
    shouRu(oState) // center top and bottom 基本信息 and 评分
}

// 查询按钮
function onOk() {
    var qsyf = 0, zzyf = 0
    var bC = false;
    var iC = 0;
    var oCkb_zdyyf = document.getElementsByName("zdyyf");
    for (var i = 0; i < oCkb_zdyyf.length; i++) {
        var oZdyyf = oCkb_zdyyf[i];
        if (!oZdyyf.checked) continue;
        iC++;
        if (!bC && oZdyyf.value - qsyf > 0) {
            qsyf = oZdyyf.value
            bC = true
        }
        if (oZdyyf.value - zzyf > 0) {
            zzyf = oZdyyf.value
        }
    }

    if (qsyf == 0) {
        alert("请选择月份")
        return
    }
    if (cxyf_3.checked && (zzyf - qsyf + 1) > iC) {
        alert("请选择连续的自定义月份")
        return
    }

    oState.kjnd = parseInt($('select.year_chose').find('option:selected').text()) // 会计年度
    oState.qsyf = parseInt(qsyf) // 起始月份
    oState.zzyf = parseInt(zzyf) // 终止月份

    //topDw = oState.userInfo.UnitCode
    //topDwmc = oState.userInfo.UnitName
    //if(topDw)setDwjb(topDw)
    //if (!topDw) return
    
    console.log('oState', oState.kjnd)
    console.log('oState', oState.qsyf)
    console.log('oState', oState.zzyf)
    // for (var i = 0; i < oState.bjxs.length; i++) {
    //     get_alarm_html_config(oState.bjxs[i], oState.dwjb)
    //     loaddata(oState.bjxs[i], topDw, oState.dwjb)
    //     document.getElementById("mp_" + 'bjxs_' + i).style.display = "none"
    //     fillCharts('bjxs_' + i, "", topDwmc, topDw)
    //     oState['bjxs_' + i + "_level"] = 1
    // }

    // var data = {
    //     username:$("#username").val(),
    //     content:$("#content").val()
    // }
    // $.ajax({
    //     type: 'get',
    //     url: 'test.json',
    //     data: oState,
    //     dataType: 'json',
    //     success: function(json) {
    //         // yingXiao(oState) // left and right
    //         // shouRu(oState) // center top and bottom 基本信息 and 评分
    //     }
    // })
}

function getDWXX(){
    oCmd.service({ get_user_dwjs: { cmdID: "get_user_dwjs", userid: oState.userInfo.UserCode }}, {
        async:false,
        onSuccess: function () {
            oState.oDwjs = this.get_user_dwjs.oDwjs
            oState.oDwgs = this.get_user_dwjs.oDwgs
            if (oState.oDwgs.length > 1) {
                oState.dwjb = oState.oDwjs.dwjs - 1
                oState.topDw = oState.userInfo.UnitCode
                oState.topDwmc = oState.oDwgs[0].dwmc +"等"
            } else {
                oState.dwjb = oState.oDwjs.dwjs
                oState.topDw = oState.oDwgs[0].dwdm
                oState.topDwmc = oState.oDwgs[0].dwmc
            }
        }
    });           
}

function loaddata() {
    oCmd.service({
        dwdm:oState.topDw,
        kjnd:oState.kjnd,
        get_zcgs_zj_hy_hz: {cmdID: "get_zcgs_zj_hy_hz",dwdm: oState.topDw},
        get_alarm_data_1: {cmdID: "get_alarm_data", dwdm: oState.topDw,bjx:"D1FA9205_1,D1FA9205_2", qsyf: oState.qsyf, zzyf: oState.zzyf, hzbj: 2, ec: 0,userid:""},
        get_alarm_data_2: {cmdID: "get_alarm_data", dwdm: oState.topDw,bjx:"D1FA9215_1,D1FA9215_2", qsyf:1, zzyf:12, hzbj: 2, ec: 0,userid:"",dbname:"jtzc"},
        get_alarm_data_3: {cmdID: "get_alarm_data", dwdm: oState.topDw,bjx:"D1FA9175_1,D1FA9175_2", qsyf:1, zzyf:12, hzbj: 2, ec: 0,userid:"",dbname:"jtzc"},
        get_alarm_data_4: {cmdID: "get_alarm_data", dwdm: oState.topDw,bjx:"D1FA9213_1,D1FA9213_2", qsyf: oState.qsyf, zzyf: oState.zzyf, hzbj: 2, ec: 0,userid:""},
        get_alarm_data_5: {cmdID: "get_alarm_data", dwdm: oState.topDw,bjx:"D1FA9165_2", qsyf:1, zzyf:12, hzbj: 2, ec: 0,userid:""},
        get_alarm_data_6: {cmdID: "get_alarm_data", dwdm: oState.topDw,bjx:"D1FA9226_1,D1FA9226_2", qsyf:1, zzyf:12, hzbj: 2, ec: 0,userid:"",dbname:"jtzc"}
    }, {
        onSuccess: function () {
            var oData_yhhz=this.get_zcgs_zj_hy_hz.data||[];
            var oData_1=this.get_alarm_data_1.data||[];
            var oData_2=this.get_alarm_data_2.data||[];
            var oData_3=this.get_alarm_data_3.data||[];
            var oData_4=this.get_alarm_data_4.data||[];
            var oData_5=this.get_alarm_data_5.data||[];
            var oData_6=this.get_alarm_data_6.data||[];

            if (oData_yhhz.length == 6) {
                //基本信息：   DWS单位数   minKJND最小年度    maxKJND最大年度   ZZC总资产  ZFZ总负债  JZC净资产  SR集体收入  ZC集体支出
                oState.jbqk=oData_yhhz[0];
                //流动资产（饼图）   kmmc科目名称   je金额
                oState.ldzc=oData_yhhz[1];
                //非流动资产（饼图）   kmmc科目名称   je金额
                oState.fldzc=oData_yhhz[2];
                //负债状况（饼图）   kmmc科目名称   je金额
                oState.fzzk=oData_yhhz[3];
                //最近5年资产负债和收入支出情况（折线图） nf年度  zzc总资产  zfz总负债 jzc净资产  sr收入  zc支出      
                oState.j5nqk=oData_yhhz[4];
                //排名情况    qj期间   zhen镇名   cun村名    df得分   pm排名  xj星级
                oState.pmqk=oData_yhhz[5];                
            }
            if (oData_1.length == 2) {
                //资产与账务对账不平(柱状图)     dwmc单位名称     D1FA9205_1月份数   D1FA9205_2涉及账套数
                oState.zzt1=oData_1[0];
                //合计   sum_1月份数合计    sum_2涉及账套数合计    
                oState.zzt1_hj=oData_1[1];
            }
            if(oData_2.length == 2){
                //工程付款超支(柱状图)     dwmc单位名称     D1FA9215_1工程个数   D1FA9215_2涉及账套数
                oState.zzt2=oData_2[0];
                //合计   sum_1工程个数合计    sum_2涉及账套数合计    
                oState.zzt2_hj=oData_2[1];
            }
            if(oData_3.length == 2){
                //经营出租合同收款(柱状图)     dwmc单位名称     D1FA9175_1合同份数   D1FA9175_2涉及账套数
                oState.zzt3=oData_3[0];
                //合计   sum_1合同份数合计    sum_2涉及账套数合计    
                oState.zzt3_hj=oData_3[1];
            }
            if(oData_4.length == 2){
                //无现金审批通道监管(柱状图)     dwmc单位名称    D1FA9213_1凭证数   D1FA9213_2涉及账套数                
                oState.zzt4=oData_4[0];
                //合计   sum_1凭证数合计    sum_2涉及账套数合计    
                oState.zzt4_hj=oData_4[1];
            }
            if(oData_5.length == 2){
                //资产负债率超警戒线 (柱状图)     dwmc单位名称    D1FA9165_2账套数
                oState.zzt5=oData_5[0];
                //合计   sum_1账套数合计    
                oState.zzt5_hj=oData_5[1];
            }
            if(oData_6.length == 2){
                //收据领销上一本收据未核销  (柱状图)     dwmc单位名称   D1FA9226_1收据本数   D1FA9226_2涉及账套数
                oState.zzt6=oData_6[0];
                //合计   sum_1收据本数合计    sum_2涉及账套数合计 
                oState.zzt6_hj=oData_6[1];
            }
            shouRu(oState) // center top and bottom 基本信息 and 评分
            yingXiao(oState) // left and right
        }
    });
}

// 营销分析 综合分析一
function yingXiao(data) {
    // 左一 left top 资产与账务对账不平(柱状图) 
    $(function(){
        var myChart = echarts.init($("#bookAret")[0])
        var zzt1 = data.zzt1 || [] // 资产与账务对账不平(柱状图)     dwmc单位名称     D1FA9205_1月份数   D1FA9205_2涉及账套数
        var zzt1_hj = data.zzt1_hj //合计   sum_1月份数合计    sum_2涉及账套数合计
        var xdata = []
        var series0 = []
        var series1 = []
        for (var index = 0, len = zzt1.length; index < len; index++) {
            xdata.push(zzt1[index].dwmc)
            series0.push(zzt1[index].d1fa9205_1)
            series1.push(zzt1[index].d1fa9205_2)
        }
        option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y: 30,
                x2: 30,
                y2: 40,
                borderWidth: 0
            },
            legend: {
                data: ['月份数', '涉及账套数'],
                textStyle: {
                    color: "#e9ebee"
                }
            },
            calculable: false,
            xAxis: [
                {
                    type: 'category',
                    data: xdata,
                    axisLabel: axisLabelX,
                    axisLine: axisLine,
                    splitLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: axisLabelY,
                    axisLine: axisLine,
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '月份数',
                    type: 'bar',
                    data: series0,
                    itemStyle: {
                        normal: {
                            color: colorbar[0]
                        }
                    }
                },
                {
                    name: '涉及账套数',
                    type: 'bar',
                    data: series1,
                    itemStyle: {
                        normal: {
                            color: colorbar[colorbar.length - 1]
                        }
                    }
                }
            ]
        }
        myChart.setOption(option)
    })
    // 左二 left middle 工程付款超支(柱状图)
    $(function(){
        var myChart = echarts.init($("#bookBmonth")[0])
        var zzt2 = data.zzt2 || [] // 工程付款超支(柱状图)     dwmc单位名称     D1FA9215_1工程个数   D1FA9215_2涉及账套数
        var zzt2_hj = data.zzt2_hj // 合计   sum_1工程个数合计    sum_2涉及账套数合计
        var xdata = []
        var series0 = []
        var series1 = []
        for (var index = 0, len = zzt2.length; index < len; index++) {
            xdata.push(zzt2[index].dwmc)
            series0.push(zzt2[index].d1fa9215_1)
            series1.push(zzt2[index].d1fa9215_2)
        }
        var option = {
            tooltip: {   //提示框，鼠标悬浮交互时的信息提示
                show: true,
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y: 30,
                x2: 30,
                y2: 40,
                borderWidth: 0
            },
            legend: {
                data: ['工程个数', '涉及账套数'],
                textStyle: {  color: '#e9ebee' }
            },
            calculable: false,
            xAxis: [
                {
                    type: 'category',
                    data: xdata,
                    splitLine: {
                        show: false
                    },
                    axisLabel: axisLabelX,
                    axisLine: axisLine
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: axisLabelY,
                    axisLine: axisLine
                }
            ],
            series: [
                {
                    name: '工程个数',
                    type: 'bar',
                    data: series0,
                    itemStyle: {
                        normal: {
                            color: colorbar[1]
                        }
                    }
                },
                {
                    name: '涉及账套数',
                    type: 'bar',
                    data: series1,
                    itemStyle: {
                        normal: {
                            color: colorbar[colorbar.length - 1]
                        }
                    }
                }
            ]
        }
        myChart.setOption(option)
    })
    // 左三 left bottom 经营出租合同收款(柱状图)
    $(function(){
        var myChart = echarts.init($("#whearAbook")[0])
        var zzt3 = data.zzt3 || [] // 经营出租合同收款(柱状图)     dwmc单位名称     D1FA9175_1合同份数   D1FA9175_2涉及账套数
        var zzt3_hj = data.zzt3_hj // 合计   sum_1合同份数合计    sum_2涉及账套数合计
        var xdata = []
        var series0 = []
        var series1 = []
        for (var index = 0, len = zzt3.length; index < len; index++) {
            xdata.push(zzt3[index].dwmc)
            series0.push(zzt3[index].d1fa9175_1)
            series1.push(zzt3[index].d1fa9175_2)
        }
        option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y: 30,
                x2: 30,
                y2: 40,
                borderWidth: 0
            },
            calculable: false,
            legend: {
                data: ['合同份数', '涉及账套数'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: xdata,
                    splitLine: {
                        show: false
                    },
                    axisLabel: axisLabelX,
                    axisLine: axisLine
                }
            ],
            yAxis: [
                {
                    type : 'value',
                    name : '数量',
                    axisLabel : axisLabelY,
                    axisLine: axisLine,
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '合同份数',
                    type: 'bar',
                    data: series0,
                    itemStyle: {
                        normal: {
                            color: color[2]
                        }
                    }
                },
                {
                    name: '涉及账套数',
                    type: 'bar',
                    data: series1,
                    itemStyle: {
                        normal: {
                            color: colorbar[colorbar.length - 1]
                        }
                    }
                }                
            ]
        }
        myChart.setOption(option)
    })
    // 右一 right top 无现金审批通道监管(柱状图)
    $(function(){
        var myChart = echarts.init($("#seaAbook01")[0])
        var zzt4 = data.zzt4 || [] // 无现金审批通道监管(柱状图)     dwmc单位名称    D1FA9213_1凭证数   D1FA9213_2涉及账套数
        var zzt4_hj = data.zzt4_hj // 合计   sum_1凭证数合计    sum_2涉及账套数合计
        var xdata = []
        var series0 = []
        var series1 = []
        for (var index = 0, len = zzt4.length; index < len; index++) {
            xdata.push(zzt4[index].dwmc)
            series0.push(zzt4[index].d1fa9213_1)
            series1.push(zzt4[index].d1fa9213_1)
        }
        option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y: 30,
                x2: 30,
                y2: 40,
                borderWidth: 0
            },
            calculable: false,
            legend: {
                data: ['凭证数', '涉及账套数'],
                textStyle: {
                    color:"#e9ebee"
                }
            },
            xAxis: [
                {
                    type : 'category',
                    data : xdata,
                    splitLine: {
                        show: false
                    },
                    axisLine: axisLine,
                    axisLabel: axisLabelX
                }
            ],
            yAxis: [
                {
                    type : 'value',
                    name : '数量',
                    axisLabel : axisLabelY,
                    axisLine: axisLine,
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '凭证数',
                    type: 'bar',
                    data: series0,
                    itemStyle: {
                        normal: {
                            color: colorbar[3]
                        }
                    }
                },
                {
                    name: '涉及账套数',
                    type: 'bar',
                    data: series1,
                    itemStyle: {
                        normal: {
                            color: colorbar[colorbar.length - 1]
                        }
                    }
                }
            ]
        }
        myChart.setOption(option)
    })
    // 右二 right middle 资产负债率超警戒线(柱状图)
    $(function(){
        var myChart = echarts.init($("#actionBook")[0])
        var zzt5 = data.zzt5 || []// 资产负债率超警戒线 (柱状图)     dwmc单位名称    D1FA9165_2账套数
        var zzt5_hj = data.zzt5_hj // 合计   sum_1账套数合计
        var xdata = []
        var series0 = []
        for (var index = 0, len = zzt5.length; index < len; index++) {
            xdata.push(zzt5[index].dwmc)
            series0.push(zzt5[index].d1fa9165_2)
        }
        option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y: 30,
                x2: 30,
                y2: 40,
                borderWidth: 0
            },
            calculable: false,
            legend: {
                data:['账套数'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            xAxis: [
                {
                    type : 'category',
                    splitLine : {show : false},
                    data: xdata,
                    axisLine: axisLine,
                    axisLabel: axisLabelX
                }
            ],
            yAxis: [
                {
                    type : 'value',
                    splitLine : {show : false},
                    axisLine: axisLine,
                    axisLabel: axisLabelY
                }
            ],
            series: [
                {
                    name: '账套数',
                    type: 'bar',
                    data: series0,
                    itemStyle: {
                        normal: {
                            color: colorbar[colorbar.length - 1]
                        }
                    }
                }
            ]
        }
        myChart.setOption(option)
    })
    // 右三 right bottom 收据领销上一本收据未核销(柱状图)
    $(function(){
        var myChart = echarts.init($("#sperceBook01")[0])
        var zzt6 = data.zzt6 || [] // 收据领销上一本收据未核销(柱状图)     dwmc单位名称   D1FA9226_1收据本数   D1FA9226_2涉及账套数
        var zzt6_hj = data.zzt6_hj // 合计   sum_1收据本数合计    sum_2涉及账套数合计
        var xdata = []
        var series0 = []
        var series1 = []
        for (var index = 0, len = zzt6.length; index < len; index++) {
            xdata.push(zzt6[index].dwmc)
            series0.push(zzt6[index].d1fa9226_1)
            series1.push(zzt6[index].d1fa9226_2)
        }
        option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y: 30,
                x2: 30,
                y2: 40,
                borderWidth: 0
            },
            legend: {
                data:['收据本数', '涉及账套数'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            calculable: false,
            xAxis: [
                {
                    type : 'category',
                    data : xdata,
                    axisLabel: axisLabelX,
                    axisLine: axisLine,
                    splitLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: axisLabelY,
                    axisLine: axisLine,
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '收据本数',
                    type: 'bar',
                    data: series0,
                    itemStyle: {
                        normal: {
                            color: colorbar[4]
                        }
                    }
                },
                {
                    name: '涉及账套数',
                    type: 'bar',
                    data: series1,
                    itemStyle: {
                        normal: {
                            color: colorbar[colorbar.length - 1]
                        }
                    }                 
                }
            ]
        }
        myChart.setOption(option)
    })
}
// 收入支出分析 综合分析二
function shouRu(data) {
    // 基本信息
    if (data && data.jbqk.length) {
        var jbxx = data.jbqk[0]
        $('.data-jgdw').text(jbxx.dws || 0) // 监管单位
        $('.data-zzc').text(jbxx.zzc || 0) // 总资产
        $('.data-zfz').text(jbxx.zfz || 0) // 总负债
        $('.data-jzc').text(jbxx.jzc || 0) // 净资产
        $('.data-jtsr').text(jbxx.sr || 0) // 集体收入
        $('.data-jtzc').text(jbxx.zc || 0) // 集体支出
    }
    
    // center top left
    $(function(){
        var myChart = echarts.init($("#allAly01")[0])
        var ldzc = data.ldzc || []
        var xdata = []
        var series0 = []
        for (var index = 0, len = ldzc.length; index < len; index++) {
            xdata.push(ldzc[index].kmmc)
            series0.push({
                value: ldzc[index].je,
                name: ldzc[index].kmmc,
                itemStyle: {
                    normal: {
                        color: color[index]
                    }
                }
            })
        }
        option = {
            title : {
                text: '流动资产状况',
                textStyle:{
                    color: "#e9ebee"
                },
                x: 'right'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
                position: [10, 150]
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: xdata,
                textStyle: {
                    color:"#e9ebee"
                }
            },
            calculable: false,
            series: [
                {
                    name: '流动资产状况',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    label: { show: false },
                    data: series0
                }
            ]
        }
        myChart.setOption(option)
    })
    // center top center
    $(function(){
        var myChart = echarts.init($("#allAly02")[0])
        var color = ['#06b8f8', '#ff5c58', '#ffffb3', '#1afffd', '#fee581', '#1afffd', '#1ec7f1']      
        var fldzc = data.fldzc || []
        var xdata = []
        var series0 = []
        for (var index = 0, len = fldzc.length; index < len; index++) {
            xdata.push(fldzc[index].kmmc)
            series0.push({
                value: fldzc[index].je,
                name: fldzc[index].kmmc,
                itemStyle: {
                    normal: {
                        color: color[index]
                    }
                }
            })
        }
        option = {
            title: {
                text: '非流动资产状况',
                textStyle:{
                    color: "#e9ebee"
                },
                x: 'right'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
                position: [10, 150]
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: xdata,
                textStyle:{
                    color:"#e9ebee"
                }
            },
            calculable : false,
            series: [
                {
                    name:'非流动资产状况',
                    type:'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    label: {show: false},
                    data: series0
                }
            ]
        }
        myChart.setOption(option)
    })
    // center top right
    $(function(){
        var myChart = echarts.init($("#allAly03")[0])
        var color = ['#06b8f8', '#ff5c58', '#ffffb3', '#1afffd', '#fee581', '#1afffd', '#1ec7f1']      
        var fzzk = data.fzzk || []
        var xdata = []
        var series0 = []
        for (var index = 0, len = fzzk.length; index < len; index++) {
            xdata.push(fzzk[index].kmmc)
            series0.push({
                value: fzzk[index].je,
                name: fzzk[index].kmmc,
                itemStyle: {
                    normal: {
                        color: color[index]
                    }
                }
            })
        }
        option = {
            title : {
                text: '负债状况',
                textStyle:{
                    color:"#e9ebee"
                },
                x: 'right'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
                position: [10, 150]
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: xdata,
                textStyle:{
                    color:"#e9ebee"
                }
            },
            calculable: false,
            series: [
                {
                    name: '负债状况',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    label: {show: false},
                    data: series0
                }
            ]
        }
        myChart.setOption(option)
    })
    // 评分等级数据 排名情况    qj期间   zhen镇名   cun村名    df得分   pm排名  xj星级
    var pmqk = data.pmqk
    var html = ''
    if (pmqk.length) {
        for (var index = 0, len = pmqk.length; index < len; index++) {
            html = html + '<div class="message_scroll swiper-slide">' +
                '<div class="scroll_top">' +
                    '<span class="scroll_title">'+ (pmqk[index].pm || '')+'</span>' +
                    '<span class="scroll_level scroll_level01">'+ (pmqk[index].zhen + pmqk[index].cun || '') +'</span>' +
                    '<span class="scroll_timer">'+ (pmqk[index].xj || '') +'</span>' +
                    '<span class="scroll_timer">'+ (pmqk[index].df || 0) +'</span>' +                    
                '</div>' +
            '</div>'
        }
    } else {
        html = '<div style="color: #FFF; text-align: center">暂无数据</div>'
    }
    $('.message_scroll_box.swiper-wrapper').html(html)
}

// 查询条件控制
function setCxyf(val) {
    var oCkb_zdyyf = document.getElementsByName("zdyyf")
    // var curKjqj = oState.userInfo.CurKJSJ.getMonth() + 1
    var curKjqj = new Date().getMonth() + 1
    for (var i = 0; i < oCkb_zdyyf.length; i++) {
        var oZdyyf = oCkb_zdyyf[i]
        if (val == 1) {
            oZdyyf.disabled = true
            if (oZdyyf.value <= curKjqj && oZdyyf.value >= curKjqj - 2) {
                oZdyyf.checked = true
            } else {
                oZdyyf.checked = false
            }
        } else if (val == 2) {
            oZdyyf.checked = true
            oZdyyf.disabled = true
        } else {
            oZdyyf.disabled = false
        }
    }
}

// 判断IE 浏览器版本
function IEVersion() {
    // 取得浏览器的userAgent字符串
    var userAgent = navigator.userAgent;
    // 判断是否为小于IE11的浏览器
    var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
    // 判断是否为IE的Edge浏览器
    var isEdge = userAgent.indexOf('Edge') > -1 && !isLessIE11;
    // 判断是否为IE11浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
    if (isLessIE11) {
        var IEReg = new RegExp('MSIE (\\d+\\.\\d+);');
        // 正则表达式匹配浏览器的userAgent字符串中MSIE后的数字部分，，这一步不可省略！！！
        IEReg.test(userAgent);
        // 取正则表达式中第一个小括号里匹配到的值
        var IEVersionNum = parseFloat(RegExp['$1']);
        if (IEVersionNum === 7) {
            // IE7
            // alert(msg)
            return false
        } else if (IEVersionNum === 8) {
            // IE8
            // alert(msg)
            return false
        } else if (IEVersionNum === 9) {
            // IE9
            // alert(msg)
            return false
        } else if (IEVersionNum === 10) {
            // IE10
            // alert(msg)
            return false
        } else {
            // IE版本<7
            // alert(msg)
            return false
        }
    } else if (isEdge) {
        // edge
        // alert(msg)
        return false
    } else if (isIE11) {
        // IE11
        return 11
    } else {
        // 不是ie浏览器
        return -1
    }
}
