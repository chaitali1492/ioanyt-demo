export interface PrimitiveType {}

export interface ComplexType {}

export interface EventType {}

export type Props = PrimitiveType & ComplexType & EventType;

export default Props;
