import React from "react";
import { Props } from ".";
import { DataGrid, HeaderItemAlignment, ColumnRefs, Section } from "../..";


const ClosePosition:React.FC<Props> = ({items=[]})=>{
    
    const columnRefs:ColumnRefs[] = [{
        title:'INSTRUMENT',
        propertyRef:'instrument',
        width:"25%"
    },{
        title:'ACCOUNT',
        propertyRef:'accountId',
        alignment:HeaderItemAlignment.RIGHT,
        width:"10%"
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
        title:'TIME',
        propertyRef:'time',
        alignment:HeaderItemAlignment.RIGHT,
        width:"15%"
    },{
        title:'PRICE',
        propertyRef:'market',
        alignment:HeaderItemAlignment.RIGHT,
        width:"10%"
    },{
        title:'VALUE',
        propertyRef:'margin',
        alignment:HeaderItemAlignment.RIGHT,
        width:"10%"
    },{
        title:'VAR',
        propertyRef:'var',
        alignment:HeaderItemAlignment.RIGHT,
        width:"10%"
    }]


    return (
        <Section heading="Close Positions">
            <DataGrid columnRefs={columnRefs} items={items}/>
        </Section>
    )
}

export default ClosePosition;