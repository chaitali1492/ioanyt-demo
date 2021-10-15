import React from "react";
import Alert from '@mui/material/Alert';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { useTheme } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  BaseLayout,
  ClosePosition,
  EquityCurve,
  InstrumentPieChart,
  Loader,
  NavigationProps,
  OpenPosition,
  WidgetProps,
  Widgets,
} from "../../components";
import { fetchPositions, getWidgets } from "../../utils";
import axios from "axios";

import Props, { InstrumentItemType } from "./type";

const IndexPage: React.FC<Props> = () => {
  const  theme = useTheme();
  const [activeTab, setActiveTab] = React.useState(0);
  const [trades, setTrades] = React.useState<InstrumentItemType[]>([]);
  const [openTrades, setOpenTrades] = React.useState<InstrumentItemType[]>([]);
  const [closeTrades, setCloseTrades] = React.useState<InstrumentItemType[]>(
    []
  );
  const [widgets, setWidgets] = React.useState<WidgetProps[]>([]);
  const [isLoading, setLoading] = React.useState(true);

  const fetchData = (isRemote = false): Promise<InstrumentItemType[]> => {
    return new Promise((resolve, reject) => {
      if (isRemote) {
        axios
          .get("./data.json", {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
          .then((res) => {
            resolve(res.data as InstrumentItemType[]);
          })
          .catch((error) => {
            reject([]);
          });
      } else {
        const data = fetchPositions(200);
        resolve(data);
      }
    });
  };

  React.useEffect(() => {
    fetchData(true)
      .then((items) => {
        setOpenTrades(items.filter((item) => item.currentPosition === "Open"));
        setCloseTrades(
          items.filter((item) => item.currentPosition === "Close")
        );
        const widgetItems = getWidgets(items);
        setWidgets(widgetItems);
        setTrades(items);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const renderLive = ():React.ReactElement => {
    return (
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <OpenPosition items={openTrades} />
            </Grid>
            <Grid item xs={12}>
              <Widgets items={widgets} />
            </Grid>
            <Grid item xs={12}>
              <EquityCurve items={openTrades} />
            </Grid>
            <Grid item xs={12}>
              <ClosePosition items={closeTrades} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} spacing={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <InstrumentPieChart items={openTrades} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const navItems:NavigationProps = {
    items:[{
      heading:'Live',
      id:'live',
    },{
      heading:'Report',
      id:'report',
    }],
    changeActiveItem:setActiveTab
  }

  const renderNavItem = ():React.ReactElement| null =>{
    if(activeTab !== 0){
      return null
    }

    switch(activeTab){
      case 0:
        return renderLive();
      default:
        return null;
    }
  }

  if(isLoading){
    return <Loader/>
  }

  return (
    <React.Fragment>
      <Alert icon={<GitHubIcon/>} variant="filled" severity="success" sx={{borderRadius:0}}>
        <Button sx={{color:theme.palette.common.white, padding:0}} href="#text-buttons" >Click to view code</Button>
      </Alert>
      <BaseLayout navigation={navItems}>{renderNavItem()}</BaseLayout>
    </React.Fragment>
  );
};

export default IndexPage;
