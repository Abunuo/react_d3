
import React from 'react';
import ReactDOM from 'react-dom';
// import { Chart } from 'react-d3-core';
import { BarChart } from 'react-d3-components';


var chartData = [{
  label: '新增',
  values: [
    {name: '小明', count: 23},
    {name: '小红', count: 30},
    {name: '小李', count: 16},
    {name: '小刘', count: 10},
  ]
}, {
  label: '留存',
  values: [
    {name: '小明', count: 12},
    {name: '小红', count: 20},
    {name: '小李', count: 15},
    {name: '小刘', count: 30},
  ]
}];

var tooltip = function(label, data) {
  return label + data;
}

var x = function(data) {
  return data.name;
},
y = function(data) {
  return data.count;
};

ReactDOM.render(
<BarChart
   data={chartData}
   width={400}
   height={400}
   margin={{top: 10, bottom: 50, left: 50, right: 10}}
   tooltipHtml={tooltip}
   tooltipMode={'element'}
   x={x}
   y={y}
   />,
document.getElementById('line-user')
);
