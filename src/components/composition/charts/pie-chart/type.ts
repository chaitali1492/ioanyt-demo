import HighchartsReact from "highcharts-react-official";
import * as Highcharts from "highcharts";

export interface PrimitiveType {}

export interface ComplexType {
    chartProps?: HighchartsReact.Props
    chartOptions: Highcharts.Options
}

export interface EventType {}

export type Props = PrimitiveType & ComplexType & EventType;

export default Props;
