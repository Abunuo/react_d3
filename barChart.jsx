import React from 'react';
import ReactDOM from 'react-dom';
import Highcharts from 'react-highcharts';

var config = {
  chart: {
    type: 'column',   //图标显示样式
    width: 500,
    height: 350,
    borderColor: '#EBBA95',
    borderWidth: 1,
  },

  title: {
      text: '当月新增与留存信息费'
  },

  yAxis: {
    title: {
      text: 'Number'
    },
    labels: {   //函数返回 Y 轴坐标
      formatter: function() {
        return this.value;
      }
    },
    type: 'linear',
    stackLabels: {
        enabled: true,
        // style: {
        //     fontWeight: 'bold',
        //     color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
        // }
    }
  },

  xAxis: {
    // title: {
    //   text: '总计'
    // },
    // categories: ['总计']
    categories: []
  },

  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
  },

  plotOptions: {
      column: {
          stacking: 'normal',
          dataLabels: {
              enabled: true,   // 折现显示数值信息，默认不显示
              color: 'black'
          },
          enableMouseTracking: true   //鼠标滑过是否显示提示信息，默认显示
      }
  },

  series: [{
    name: '留存',
    color: '#f60',
    data: []
  }, {
    name: '新增',
    color: 'yellow',
    data: []
  }]
  // series: [{
  //   name: '留存',
  //   color: '#f60',
  //   data: [911520],
  //   // dashStyle: 'longdash'  //折现的样式
  // }, {
  //   name: "新增",
  //   color: 'yellow',
  //   data: [1352314]
  // }],
};

var data = [{
  name: 'Coolpay',
  remain: 9870,
  add: 23456
}, {
  name: '网易',
  remain: 10023,
  add: 4009
}, {
  name: 'Google',
  remain: 10002,
  add: 12943
}];

data.forEach(function(item) {
  config.xAxis.categories.push(item.name);
  config.series[0].data.push(item.remain);
  config.series[1].data.push(item.add);
})

ReactDOM.render(
  <div style={{margin: 20}}>
    <Highcharts config={config}/>
  </div>
    ,document.getElementById('bar-user')
  )
