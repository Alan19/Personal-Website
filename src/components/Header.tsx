import {Typography} from "@mui/material";
import React from "react";
import {materialYouTheme} from "../App";

export function Header() {
    return (
        <>
            <Typography fontFamily={"Origin Tech"} color={materialYouTheme.sys.color.primary} variant={"h2"}>
                FaintAlcor
            </Typography>
            <Typography variant={"subtitle1"}>
                Cougar-dragon software engineer doing his best!
            </Typography>
        </>
    );
}