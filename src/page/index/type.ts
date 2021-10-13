export interface InstrumentItemType {
    instrument:string,
    product:string
    quantity:number
    entry:number
    market:number,
    type:string,
    margin:number,
    pandl:number,
    var:number,
    accountId:string,
    currentPosition:string,
    time:string
}

export interface PrimitiveType {}

export interface ComplexType {}

export interface EventType {}

export type Props = PrimitiveType & ComplexType & EventType;

export default Props;
