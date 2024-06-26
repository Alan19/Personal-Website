import {Button} from "@mui/material-next";
import {Typography} from "@mui/material";
import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

export function NavigationRailLink(props: { button: React.ReactNode, label: string, path: string }) {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const topLevelPath = (location.match(/^\/[^\/]*/) ?? [''])[0];
    const {path, button, label} = props;
    return <div className={`navigation-rail-item ${topLevelPath === path && "selected-rail-item"}`} onClick={() => navigate(path)} style={{display: 'grid', alignItems: 'center'}}>
        <Button color={"secondary"} variant={topLevelPath === path ? "filledTonal" : "text"}>{button}</Button>
        <Typography style={{textAlign: "center"}} variant={"subtitle2"} className={'navigation-rail-text'}>{label}</Typography>
    </div>;
}