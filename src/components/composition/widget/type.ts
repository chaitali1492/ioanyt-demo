export interface PrimitiveType {
    heading:string
    value:string |number
}

export interface ComplexType {
    
}

export interface EventType {}

export type Props = PrimitiveType & ComplexType & EventType;

export default Props;
