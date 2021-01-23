import { Children } from "react";
import HeaderLink from "../HeaderLink";

export default function UI ({children}){
    return (
        <>
        <HeaderLink/>
        {children}
        </>
    );
}