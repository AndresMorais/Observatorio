/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

am4core.useTheme(am4themes_animated);

let chart = am4core.create("chartdiv", am4charts.SlicedChart);
chart.data = [{
  "name": "Categoria",
  "value1": 400,
  "value2": 400,
  "value3": 400
}, {
  "name": "Stage #2",
  "value1": 300,
  "value2": 400,
  "value3": 300
}, {
  "name": "Stage #3",
  "value1": 200,
  "value2": 290,
  "value3": 190
}, {
  "name": "Stage #4",
  "value1": 180,
  "value2": 100,
  "value3": 100
}, {
  "name": "Stage #5",
  "value1": 50,
  "value2": 50,
  "value3": 50
}, {
  "name": "Stage #6",
  "value1": 20,
  "value2": 20,
  "value3": 20
}, {
  "name": "Stage #7",
  "value1": 10,
  "value2": 10,
  "value3": 10
}];

// var series1 = chart.series.push(new am4charts.FunnelSeries());
// series1.dataFields.value = "value2";
// series1.dataFields.category = "name";
// series1.labels.template.disabled = true;

// var series2 = chart.series.push(new am4charts.PyramidSeries());
// series2.dataFields.value = "value2";
// series2.dataFields.category = "name";
// series2.labels.template.disabled = true;

var man = "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"

var series4 = chart.series.push(new am4charts.PictorialStackedSeries());
series4.dataFields.value = "value3";
series4.dataFields.category = "name";
series4.alignLabels = true;
series4.maskSprite.path = man;


var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value3";
series.dataFields.category = "name";
series.alignLabels = true;
series.maskSprite.path ="M190.4,148.6L161,252.9c-6.3,22.8,20.7,31.7,27.3,10.3l26.3-96.2h7.4l-45.2,169H219v127c0,23,32,23,32,0V336h10v127   c0,23,31,23,31,0V336h43.4l-46.2-169h8.4l26.3,96.2c6.5,21.9,33.3,12.5,27.3-10.2l-29.4-104.4c-4-11.8-18.2-32.6-42-33.6h-47.3   C207.9,116,193.8,136.6,190.4,148.6z M292.6,69.2c0-20.6-16.4-37.3-36.6-37.3c-20.2,0-36.6,16.7-36.6,37.3c0,20.6,16.4,37.3,36.6,37.3   C276.2,106.5,292.6,89.8,292.6,69.2z";
      

series.colors.list = [
  am4core.color("#009AEE"),
  am4core.color("#FF5733"),
  am4core.color("#FF6F91"),
  am4core.color("#009aae"),
  am4core.color("#009aae"),
  am4core.color("#009aee"),
];       

series4.colors.list = [
  am4core.color("#009AEE"),
  am4core.color("#FF5733"),
  am4core.color("#FF6F91"),
  am4core.color("#009aae"),
  am4core.color("#009aae"),
  am4core.color("#009aee"),
];       