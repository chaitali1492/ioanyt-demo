import { WidgetProps } from "../..";

export interface PrimitiveType {}

export interface ComplexType {
    items: WidgetProps[]
}

export interface EventType {}

export type Props = PrimitiveType & ComplexType & EventType;

export default Props;
