export enum HeaderItemAlignment{
    CENTER="center",
    LEFT="left",
    RIGHT="right"
}

export interface ColumnRefs{
    title:string
    alignment?: HeaderItemAlignment
    propertyRef:string
    width:string
}

export interface PrimitiveType {
}

export interface ComplexType {
    columnRefs:ColumnRefs[]
    items:any[]
}

export interface EventType {}

export type Props = PrimitiveType & ComplexType & EventType;

export default Props;
