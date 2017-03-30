
import React from 'react';
import ReactDOM from 'react-dom';
import Highcharts from 'react-highcharts';

var config = {

    chart: {
      type: 'line',   //图标显示样式
      width: 500,
      height: 350,
      borderColor: '#EBBA95',
      borderWidth: 1, //图标外边框
    },
    title: {
        text: '近7日信息费与用户数'
    },

    // subtitle: {
    //     text: 'Source: thesolarfoundation.com'
    // },

    yAxis: [{  //主轴
        title: {
            text: 'Number'
        },
        labels: {   //函数返回 Y 轴坐标
          formatter: function() {
            return this.value;
          }
        },
        type: 'linear', // linear、 logarithmic、 datetime
        // gridLineWidth: 1,   //用来显示横轴，默认显示
        // plotLines: [{value:10, width: 1, color: 'red'},{}]   //特定横轴样式
    }, {   //次轴
      // title: {
      //     text: '次轴'
      // },
      // opposite: true
    }],
    xAxis: {
        title: {
            text: 'aaa BMI'
        },
        // tickInterval: 1,  //x轴间隔显示，默认为1
        // gridLineWidth: 1,   //用来显示纵轴，默认隐藏
        // categories: ['2007/01/01', '2007/01/02', '2007/01/03', '2007/01/04', '2007/01/05', '2007/01/06', '2007/01/07'], //X 轴坐标
        categories: []
    },
    legend: {   // 备注信息
        //title: {text: '备注:'},  //备注标题
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        // floating: true
    },

    tooltip: {
        headerFormat: '<b>{point.x}</b>',
        pointFormat: '<br /><span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',   //鼠标滑过提示信息
        //shared: true, //显示信息数
    },

    plotOptions: {
        line: {
            dataLabels: {
                enabled: true   // 折现显示数值信息，默认不显示
                //color: 'black'   //显示字体颜色
            },
            enableMouseTracking: true   //鼠标滑过是否显示提示信息，默认显示
        }
    },

    series: [{
      name: '当日信息费',
      color: 'red',
      data:[]
    }, {
      name: '用户数',
      color: '#7cb5ec',
      data: []
    }],
    // series: [{
    //   name: '当日信息费',
    //   color: 'red',
    //   data: [23, 34, 44, 12, 34, 22, 18],
    //   // dashStyle: 'longdash'  //折现的样式
    // }, {
    //   name: "用户数",
    //   color: '#7cb5ec',
    //   data: [12, 50, 34, 22, 56, 44, 66]
    // }],
};

var data = [{
  day: '2017/01/01',
  price: 23,
  people: 12
}, {
  day: '2017/01/02',
  price: 34,
  people: 50
}, {
  day: '2017/01/03',
  price: 44,
  people: 34
}, {
  day: '2017/01/04',
  price: 12,
  people: 22
}, {
  day: '2017/01/05',
  price: 34,
  people: 56
}, {
  day: '2017/01/06',
  price: 22,
  people: 44
}, {
  day: '2017/01/07',
  price: 18,
  people: 66
}];

data.forEach(function(item) {
  config.xAxis.categories.push(item.day);
  config.series[0].data.push(item.price);
  config.series[1].data.push(item.people);
});

ReactDOM.render(
  <div style={{margin: 20}}>
    <Highcharts config={config} />
  </div>
    ,document.getElementById('line-user')
  )
