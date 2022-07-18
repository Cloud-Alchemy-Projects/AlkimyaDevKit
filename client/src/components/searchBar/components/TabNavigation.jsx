import React from "react";
import { useHistory } from "react-router-dom";
import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

const TabNavigation = (props) => {
    const NewTab = styled((props) => <Tab disableRipple {...props} />)(
        ({ theme }) => ({
            backgroundColor: "#000000",
            color: "white",
            fontFamily: "var(--font-secondary-medium)",
            borderRadius: "20px 0px 0px 20px",
            padding: "15px 70px 15px 40px",
            textTransform: "none",
            fontSize: "15px",
            alignItems: 'start',
            "&.Mui-selected": {
                color: "white",
                backgroundColor: "#E20874",
            },
            "&.Mui-focusVisible": {
                backgroundColor: "rgba(100, 95, 228, 0.32)",
            },
        })
    );
    const history = useHistory();
    return (
        <NewTab
        component="a"
        onClick={(event) => {
            event.preventDefault();
            history.push(props.href)
        }}
        {...props}
        />
    )
}

export default TabNavigation