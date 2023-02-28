import React from "react";
import { MyHeader, MyLogo } from "./style";
import logo from "../../assets/img/logo.png"
export default function Header(){
    return(
        <MyHeader>
            <MyLogo src={logo} />
        </MyHeader>
    )
}