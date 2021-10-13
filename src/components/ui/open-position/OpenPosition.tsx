import React from "react";
import { Props } from ".";
import { DataGrid, HeaderItemAlignment, ColumnRefs, Section } from "../..";


const OpenPosition:React.FC<Props> = ({items=[]})=>{
    
    const columnRefs:ColumnRefs[] = [{
        title:'INSTRUMENT',
        propertyRef:'instrument',
        width:"25%"
    },{
        title:'PRODUCT',
        propertyRef:'product',
        alignment:HeaderItemAlignment.RIGHT,
        width:"10%"
    },{
        title:'QUANTITY',
        propertyRef:'quantity',
        alignment:HeaderItemAlignment.RIGHT,
        width:"10%"
    },{
        title:'ENTRY',
        propertyRef:'entry',
        alignment:HeaderItemAlignment.RIGHT,
        width:"10%"
    },{
        title:'MARKET',
        propertyRef:'market',
        alignment:HeaderItemAlignment.RIGHT,
        width:"10%"
    },{
        title:'MARGIN',
        propertyRef:'margin',
        alignment:HeaderItemAlignment.RIGHT,
        width:"15%"
    },{
        title:'P&L',
        propertyRef:'pandl',
        alignment:HeaderItemAlignment.RIGHT,
        width:"10%"
    },{
        title:'VAR',
        propertyRef:'var',
        alignment:HeaderItemAlignment.RIGHT,
        width:"10%"
    }]


    return (
        <Section heading="Open Positions">
            <DataGrid columnRefs={columnRefs} items={items}/>
        </Section>
    )
}

export default OpenPosition;