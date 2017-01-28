var chart1 = AmCharts.makeChart("trend_drama",
{
    "type": "serial",
    "theme": "light",
    "fontFamily": "PT Mono",
    "dataProvider": [{
        "name": "Producer",
        "points": 107,
        "color": "#7F8DA9",
        "bullet": "web/images/drama_1.png"
    }, {
        "name": "My Love From Star",
        "points": 91,
        "color": "#FEC514",
        "bullet": "web/images/drama_2.png"
    }, {
        "name": "Miss You",
        "points": 88,
        "color": "#DB4C3C",
        "bullet": "web/images/drama_3.png"
    }, {
        "name": "She Was Pretty",
        "points": 69,
        "color": "#DAF0FD",
        "bullet": "web/images/drama_4.png"
    }, {
        "name": "Descendants of Sun",
        "points": 64,
        "color": "#cd82ad",
        "bullet": "web/images/drama_5.png"
    }],
    "valueAxes": [{
        "maximum": 140,
        "minimum": 0,
        "axisAlpha": 0,
        "dashLength": 4,
        "position": "left"
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
        "bulletOffset": 0,
        "bulletSize": 160,
        "colorField": "color",
        "cornerRadiusTop": 8,
        "customBulletField": "bullet",
        "fillAlphas": 0.8,
        "lineAlpha": 0,
        "type": "column",
        "valueField": "points"
    }],
    "marginTop": 0,
    "marginRight": 0,
    "marginLeft": 0,
    "marginBottom": 0,
    "autoMargins": false,
    "categoryField": "name",
    "categoryAxis": {
        "axisAlpha": 0,
        "gridAlpha": 0,
        "inside": true,
        "tickLength": 0
    },
    "export": {
    	"enabled": true
     }
});