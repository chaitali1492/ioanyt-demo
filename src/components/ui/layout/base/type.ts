import { NavigationProps } from "../../..";

export interface PrimitiveType {}

export interface ComplexType {
    navigation:NavigationProps
}

export interface EventType {}

export type Props = PrimitiveType & ComplexType & EventType;

export default Props;
