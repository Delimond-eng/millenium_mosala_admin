(()=>{(function(){"use strict";let a=$(".stacked-bar-chart");a.length&&a.each(function(){let r=$(this)[0].getContext("2d"),e=new Chart(r,{type:"bar",data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Html Template",barPercentage:.5,barThickness:6,maxBarThickness:8,minBarLength:2,backgroundColor:getColor("primary"),data:helper.randomNumbers(-100,100,12)},{label:"VueJs Template",barPercentage:.5,barThickness:6,maxBarThickness:8,minBarLength:2,backgroundColor:getColor("slate.300"),data:helper.randomNumbers(-100,100,12)}]},options:{maintainAspectRatio:!1,plugins:{legend:{labels:{color:getColor("slate.500",.8)}}},scales:{x:{stacked:!0,ticks:{font:{size:12},color:getColor("slate.500",.8)},grid:{display:!1},border:{display:!1}},y:{stacked:!0,ticks:{font:{size:12},color:getColor("slate.500",.8),callback:function(t){return"$"+t}},grid:{color:getColor("slate.300"),borderDash:[2,2]},border:{display:!1}}}}});helper.watchCssVariables("html",["color-primary"],t=>{e.data.datasets[0].backgroundColor=getColor("primary"),e.update()})})})();})();
