import React from "react";
import { Props } from ".";
import * as Highcharts from "highcharts";
import { PieChart, Section } from "../..";
import { InstrumentItemType } from "../../../page/index/type";
import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

const getSeries = (items:InstrumentItemType[]):{name:string, y:number}[] =>{

    const data = items.reduce((obj, item)=>{
        if(!obj[item.type]){
            obj[item.type] = {name:item.type, y: item.margin}
        }else{
            obj[item.type].y += item.margin
        }

        return obj;
    },{})
    console.log(Object.values(data));
    return Object.values(data);
}


const InstrumentPieChart:React.FC<Props> = ({items=[]})=>{
    const {palette} = useTheme();
    const dataset = getSeries(items);
    const total = dataset.reduce((total, data)=>{
        total+=data.y;
        return total;
     },0);
    const options:Highcharts.Options = {
        // :Highcharts.Options
        series:[{
            name:'types',
            type:'pie',
            data:dataset,
        }]
    }
    return (
        <Section>
            <PieChart  chartOptions={options} />    
            <Box width="100%" textAlign="center">
                <Typography variant="h4" color={palette.grey[600]} gutterBottom component="span" >{total}</Typography>
            </Box>
        </Section>
    )
}

export default InstrumentPieChart;