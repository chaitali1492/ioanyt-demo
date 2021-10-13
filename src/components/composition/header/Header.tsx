import React from "react";
import classes from "./Header.module.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { Props } from ".";

const style = {
  marginTop: "10px",
};

const Header: React.FC<Props> = () => {
  return (
    <div className={classes.header}>
      <Stack direction="row" spacing={1} justifyContent="end">
        <Avatar src="/broken-image.jpg" />
        <KeyboardArrowDownSharpIcon />
      </Stack>
      <Divider sx={style} />
    </div>
  );
};

export default Header;
