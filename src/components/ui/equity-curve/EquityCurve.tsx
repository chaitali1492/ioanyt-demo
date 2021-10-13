import React from "react";
import { Props } from ".";
import * as Highcharts from "highcharts";
import { LineChart, Section } from "../..";
import { InstrumentItemType } from "../../../page/index/type";
import moment from "moment";

const getSeries = (items:InstrumentItemType[]) =>{


    const category:Date[]=[]
    const seriese:{[key:string]: Array<number>} = {
        var:[],
        entry:[],
        market:[]
    }

    items.forEach(item=>{
        const date = moment(item.time,"MM-DD-YYYY HH:MM");
        category.push(date.toDate());
        seriese.var.push(item.var);
        seriese.entry.push(item.entry);
        seriese.market.push(item.market);
        
    })

    return {
        seriese,
        category
    }
}


const EquityCurve:React.FC<Props> = ({items=[]})=>{
    const chartSeriese = getSeries(items);
    const options:Highcharts.Options = {
        // :Highcharts.Options
        series:[{
                name:'Var',
                type:'spline',
                data:chartSeriese.seriese.var
            },{
                name:'Market',
                type:'spline',
                data:chartSeriese.seriese.market
            },{
                name:'Entry',
                type:'spline',
                data:chartSeriese.seriese.entry
        }]
    }
    return (
        <Section heading="Equity Curve">
            <LineChart  chartOptions={options} />        
        </Section>
    )
}

export default EquityCurve;