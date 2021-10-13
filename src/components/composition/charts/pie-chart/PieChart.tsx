import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import { Props } from ".";

const PieChart: React.FC<Props> = ({ chartProps = {}, chartOptions }) => {
  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
    },
    legend: {
      align: "right",
      layout: "vertical",
      verticalAlign: "top",
      itemMarginBottom: 5,
      symbolWidth: 5,
      symbolHeight: 8,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        innerSize: '75%',
        // borderWidth: 6,
        // borderColor: null,
        showInLegend: true,
        slicedOffset: 20,
        dataLabels: {
            enabled:false
        }
      },
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    ...chartOptions,
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      {...chartProps}
    />
  );
};

export default PieChart;
