import { Tab, Tabs, useMediaQuery, useTheme, Box, makeStyles, Theme, createStyles, tabClasses } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
import { Props } from ".";

const StyledTab = styled(Tab)(({ theme }) => ({
  [`&.${tabClasses.textColorPrimary}`]: {
    color: theme.palette.common.white,
    fontWeight:"bold",
    fontSize:"1.4rem",
    fontWeghit:"bold"
  }
}));

const Navigation: React.FC<Props> = ({items, activeItemId=0, changeActiveItem}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [activeItem, setActiveItem] = React.useState(activeItemId);

  const handleChange = (event, newActiveItem) => {
    setActiveItem(newActiveItem);
    if(changeActiveItem){
      changeActiveItem(newActiveItem)
    }
    
  };


  return (
    <Box component='nav' height={"100%"} minHeight={"100vh"} sx={{
      backgroundColor:theme.palette.primary.main
    }}>
       <Tabs
        orientation={matches?'vertical':'horizontal'}
        variant="scrollable"
        value={activeItem}
        onChange={handleChange}
        centered
        sx={{color:theme.palette.common.white}}
      >
        {
          items.map((item)=>{
             return <StyledTab label={item.heading} key={item.id}  id= {`vertical-tab-${item.id}`} />
          })
        }
      </Tabs>
      
    </Box>
  );
};

export default Navigation;
