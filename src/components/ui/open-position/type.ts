import { InstrumentItemType } from "../../../page/index/type";

export interface PrimitiveType {}

export interface ComplexType {
    items: InstrumentItemType[]
}

export interface EventType {}

export type Props = PrimitiveType & ComplexType & EventType;

export default Props;
