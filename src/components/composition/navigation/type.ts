import React from "react-transition-group/node_modules/@types/react";

export interface TabType{
    heading:string
    id:string
}
export interface PrimitiveType {
    activeItemId?:number
}

export interface ComplexType {
    items:TabType[]
}

export interface EventType {
    changeActiveItem?:(index)=>void
}

export type Props = PrimitiveType & ComplexType & EventType;

export default Props;
