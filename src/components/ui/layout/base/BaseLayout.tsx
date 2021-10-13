import { Grid, useTheme } from "@mui/material";
import React from "react";
import { Props } from ".";
import { Header, Navigation } from "../../..";


const BaseLayout:React.FC<Props> = ({children, navigation})=>{
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={2}>
                <Navigation {...navigation}/>
            </Grid>
            <Grid item xs={12} sm={12} md={10}>
                <Header/>
                {children}
            </Grid>
        </Grid>
    )
}

export default BaseLayout;