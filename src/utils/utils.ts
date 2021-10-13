import { WidgetProps } from "../components";
import { InstrumentItemType } from "../page/index/type";

export const getWidgets = (items: InstrumentItemType[]): WidgetProps[] => {
  const widgets: WidgetProps[] = [];

  widgets.push({
    heading: "UNREALISED P&L",
    value: items.reduce((total, item) => {
      return total + item.pandl;
    }, 0),
  });

  widgets.push({
    heading: "Day P&L",
    value: items.length > 0 ? items[0].pandl : "-",
  });

  const totalVar = items.reduce((total, item) => {
    return total + item.var;
  }, 0);

  widgets.push({
    heading: "Var",
    value: totalVar,
  });

  const maxVar = items.reduce((prev, curr) => {
    return prev.var > curr.var ? prev : curr;
  });

  widgets.push({
    heading: "Max P&L",
    value: maxVar.var,
  });

  const maxDrawDown = items.reduce((prev, curr) => {
    return prev.margin > curr.margin ? prev : curr;
  });

  widgets.push({
    heading: "Max DrawDown",
    value: maxDrawDown.margin,
  });

  return widgets;
};
