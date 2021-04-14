// JavaScript Document
$(function() {
    $('#table').bootstrapTable({
        method:"post",
        url: "json/data.json",
        dataType: "json",
        pagination: true, //分页
        singleSelect: false,
        pageList:[10,20,50],
        locale:"zh-US", //表格汉化
        search: false, //显示搜索框
        columns: [
            {
                field: '排名',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '单位',
                field: 'status',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '得分',
                field: 'participationCounts',
                align: 'center'
            },
            {
                title: '星级',
                field: 'totalCounts',
                align: 'center'
            }
        ]
    });
})
    