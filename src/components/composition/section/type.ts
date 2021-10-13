export interface PrimitiveType {
    heading?:string
}

export interface ComplexType {
    
}

export interface EventType {}

export type Props = PrimitiveType & ComplexType & EventType;

export default Props;
