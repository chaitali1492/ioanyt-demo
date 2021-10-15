import { CircularProgress} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Props } from ".";

const Loader: React.FC<Props> = () => {
  return (
    <Box height={"100vh"} width={"100vw"} display="flex" justifyContent="center" alignItems="center">
        <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loader;
