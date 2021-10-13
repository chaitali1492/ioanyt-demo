import { Paper, Typography, useTheme } from "@mui/material";
import { Box} from "@mui/system";
import React from "react";
import { Props } from ".";

const Widget: React.FC<Props> = ({heading, value}) => {
  const {palette} = useTheme();
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Typography variant="body1" gutterBottom component="div" textAlign="center">{heading}</Typography>
      <Typography variant="h4" color={palette.warning.main} gutterBottom component="span" textAlign="center">{value}</Typography>
    </Box>
  );
};

export default Widget;
