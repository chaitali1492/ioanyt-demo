import { Paper, Stack } from "@mui/material";
import React from "react";
import { Props } from ".";
import { Widget } from "../..";

const Widgets:React.FC<Props> = ({items=[]})=>{
    
    return (
        <Paper elevation={0} >
            <Stack direction="row" spacing={2} justifyContent={"space-between"}>
                {
                    items.map((item)=>{
                        return <Widget {...item}/>
                    })
                }
            </Stack>
        </Paper>
    )
}

export default Widgets;