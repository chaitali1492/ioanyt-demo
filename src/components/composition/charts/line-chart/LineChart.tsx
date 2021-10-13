import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import { Props } from ".";

const LineChart: React.FC<Props> = ({ chartProps={}, chartOptions }) => {
  const options: Highcharts.Options = {
    ...chartOptions,
    chart:{
      type: 'line',
      backgroundColor:'transparent'
    },
    legend: {
      align: "right",
      layout: 'vertical',
      verticalAlign: "top",
      itemMarginBottom: 5,
      symbolWidth: 5,
      symbolHeight: 8,
    },
    plotOptions:{
      series:{
        marker:{
          enabled:false
        }
      }
    },
    tooltip: {
      shared: true,
    },
    title:{
      text:''
    },
    credits: {
      enabled: false,
    },
    xAxis:{
      lineWidth: 0,
      lineColor: 'transparent',
    },
    yAxis:{
      gridLineWidth: 0,
    }
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      {...chartProps}
    />
  );
};

export default LineChart;
