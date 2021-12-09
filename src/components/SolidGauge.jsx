import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import UseSolidGaugeCharts from "highcharts/modules/solid-gauge";
import UseHighchartsMore from "highcharts/highcharts-more";

UseHighchartsMore(Highcharts);
UseSolidGaugeCharts(Highcharts);

// Gauge Options
const gaugeOptions = {
  chart: {
    type: "solidgauge",
  },

  title: null,

  pane: {
    center: ["50%", "85%"],
    size: "140%",
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#EEE",
      innerRadius: "60%",
      outerRadius: "100%",
      shape: "arc",
    },
  },

  exporting: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },

  // the value axis
  yAxis: {
    stops: [
      [0.1, "#55BF3B"], // green
      [0.5, "#DDDF0D"], // yellow
      [0.9, "#DF5353"], // red
    ],
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: {
      y: -70,
    },
    labels: {
      y: 16,
    },
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true,
      },
    },
  },
};

// RPM gauge
const chartRpmOptions = Highcharts.merge(gaugeOptions, {
  yAxis: {
    min: 0,
    max: 5,
    title: {
      text: "RPM",
    },
  },

  series: [
    {
      name: "RPM",
      data: [1],
      dataLabels: {
        format:
          '<div style="text-align:center">' +
          '<span style="font-size:25px">{y:.1f}</span><br/>' +
          '<span style="font-size:12px;opacity:0.4">' +
          "* 1000 / min" +
          "</span>" +
          "</div>",
      },
      tooltip: {
        valueSuffix: " revolutions/min",
      },
      points: [{ y: 0, x: 0 }],
    },
  ],
});

// Speed Gauge
const chartSpeedOptions = Highcharts.merge(gaugeOptions, {
  yAxis: {
      min: 0,
      max: 200,
      title: {
          text: 'Speed'
      }
  },

  credits: {
      enabled: false
  },

  series: [{
      name: 'Speed',
      data: [80],
      dataLabels: {
          format:
              '<div style="text-align:center">' +
              '<span style="font-size:25px">{y}</span><br/>' +
              '<span style="font-size:12px;opacity:0.4">km/h</span>' +
              '</div>'
      },
      tooltip: {
          valueSuffix: ' km/h'
      },
      points: [{ y: 0, x: 0 }]
  }]

});


const SolidGauge = (props) => {
  const chartRPMRef = useRef(null);
  const [chartRpmOptionsState] = useState(chartRpmOptions);
  const chartSpeedRef = useRef(null);
  const [chartSpeedOptionsState] = useState(chartSpeedOptions);

  useEffect(() => {
    const RPMchart = chartRPMRef.current.chart;
    const Speedchart = chartSpeedRef.current.chart;

      // Bring life to the dials
      setInterval(function () {
        // Speed
        var point, newVal, inc;

        // chart speed

        point = Speedchart.series[0].points[0];
        inc = Math.round((Math.random() - 0.5) * 100);
        newVal = point.y + inc;

        if (newVal < 0 || newVal > 200) {
          newVal = point.y - inc;
        }

        point.update(newVal);
        // chart RPM

        console.log(chartRpmOptions);

        point = RPMchart.series[0].points[0];
        inc = Math.random() - 0.5;
        newVal = point.y + inc;

        if (newVal < 0 || newVal > 5) {
          newVal = point.y - inc;
        }

        point.update(newVal);
      }, 2000);

  }, []);

  return (
    <div>
      <h1>SolidGauge</h1>
      <HighchartsReact
        highcharts  = {Highcharts}
        options     = {chartRpmOptionsState}
        ref         = {chartRPMRef}
      />
      <HighchartsReact
        highcharts  = {Highcharts}
        options     = {chartSpeedOptionsState}
        ref         = {chartSpeedRef}
      />
    </div>
  );
};

export default SolidGauge;