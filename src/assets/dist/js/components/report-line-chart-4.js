(()=>{(function(){"use strict";let s=$(".report-line-chart-4");s.length&&s.each(function(){let r=$(this)[0].getContext("2d"),t=[[0,5,35,40,39,33,32,37,36,30,24,18,48,53,52,82,112,106,136,141,140,139,138,143,173,203,233,263,257,258,233,208,183,177,171,201,231,206,207,237,231,206,207,182,212,206,181,211,186,161,191,190,195,200,194,199,193,223,253,247,252,257,262,256,261,266,296,295,300,305,310,309,303,308,313],[0,30,35,65,70,64,94,99,104,98,92,122,116,121,115,109,103,108,138,132,126,120,150,180,210,211,186,161,155,130,160,135,110,140,115,145,139,133,108,109,84,85,60,35,36,11,5,-20,-26,-51,-21,-27,-33,-28,-23,-29,1,6,11,5,10,40,45,50,55,49,54,84,89,119,124,129,134,139,169]],o=()=>{let e=document.createElement("canvas").getContext("2d")?.createLinearGradient(0,0,0,90);return e?.addColorStop(0,getColor("success",.4)),e?.addColorStop(1,$("html").hasClass("dark")?"#28344e00":"#ffffff01"),e},a=new Chart(r,{type:"line",data:{labels:t[0],datasets:[{data:t[0],borderWidth:1.3,borderColor:getColor("success",.7),pointRadius:0,tension:.3,backgroundColor:o(),fill:!0},{data:t[1],borderWidth:1.2,borderColor:getColor("slate.500",.5),pointRadius:0,tension:.3,borderDash:[3,2],backgroundColor:"transparent",fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{ticks:{display:!1},grid:{display:!1},border:{display:!1}},y:{ticks:{display:!1},grid:{display:!1},border:{display:!1}}}}});helper.watchCssVariables("html",["color-success"],l=>{a.data.datasets[0].borderColor=getColor("success",.7),a.data.datasets[0].backgroundColor=o(),a.update()})})})();})();