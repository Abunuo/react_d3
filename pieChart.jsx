import React from 'react';
import ReactDOM from 'react-dom';
import Highcharts from 'react-highcharts';

var config = {
  chart: {
    type: 'pie',
    width: 500,
    height: 350,
    borderColor: '#EBBA95',
    borderWidth: 1,
  },

  title: {
    text: '当月信息费'
  },

  plotOptions: {
      pie: {
          // allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: <br />{point.value}',
          },
          showInLegend: true
      }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
  },

  tooltip: {
    pointFormat: 'Value:<b>{point.value}</b><br/>Percentage:<b>{point.percentage:.1f}%</b>'
  },

  series: [{
    // innerSize: 50%,   //空心圆饼图
    data: []
  }]
  // series: [{
  //   data: [{
  //     name: 'Coolpad',
  //     value: 23004,
  //     y: 30,
  //     // color: 'red'
  //   }, {
  //     name: '百益',
  //     value: 32901,
  //     y: 60
  //   }, {
  //     name: 'Google',
  //     value: 7801,
  //     y: 10
  //   }]
  // }]
}

var data = [{
  name: 'Coolpad',
  value: 23004,
}, {
  name: '百益',
  value: 32901,
}, {
  name: 'Google',
  value: 7801,
}];

var all= 0;
data.forEach(function(item) {
  all += item.value;
});
data.forEach(function(item, index) {
  config.series[0].data.push(item);
  config.series[0].data[index].y = item.value/all*100;
});


ReactDOM.render(
  <div style={{margin: 20}}>
    <Highcharts config={config}/>
  </div>
    ,document.getElementById('pie-user')
  )
