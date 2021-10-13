import { Paper, Typography } from "@mui/material";
import React from "react";
import { Props } from ".";

const Section: React.FC<Props> = ({heading, children}) => {
  return (
    <React.Fragment>
      {heading && (<Typography variant="h4" gutterBottom component="div">{heading}</Typography>)}
      <Paper elevation={0} >
        {children}
      </Paper>
    </React.Fragment>
  );
};

export default Section;
