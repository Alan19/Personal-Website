import {Typography} from "@mui/material";
import React from "react";

export function Header() {
    return (
        <>
            <Typography fontWeight={"bold"} color={"primary"} variant={"h2"}>
                FaintAlcor
            </Typography>
            <Typography variant={"subtitle1"}>
                Coding dragon-cougar hybrid doing his best!
            </Typography>
        </>
    );
}