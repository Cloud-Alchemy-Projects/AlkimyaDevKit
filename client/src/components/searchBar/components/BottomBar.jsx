import React, { useState, useEffect } from "react";
import useStyle from "../styles";
import { useHistory } from "react-router-dom";
import { Button, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import TabNavigation from "./TabNavigation";

const BottomBar = () => {
	const classes = useStyle();
	const [value, setValue] = useState(0);
    const history = useHistory()

    useEffect(() => {
        const pathname = history.location.pathname;
        switch (pathname) {
            case "/clients":
            case "/clients/new":
                setValue(0);
                break;
            case "/projects":
            case "/projects/new":
                setValue(1);
                break;
            case "/story":
            case "/story/new":
                setValue(2);
                break;
            default:
                setValue(0);
                break;
        }
    }, [history.location.pathname]);

	return (
		<div className={classes.bottomBarContainer}>
			<div className={classes.buttonsWrapper}>
				<Tabs
					orientation="vertical"
					value={value}
				>
					<TabNavigation 
                        label="Clients" 
                        href="/clients"
                    />
					<TabNavigation
						sx={{ margin: "20px 0px" }}
						href="/projects"
						label="Project"
					/>
					<TabNavigation
						label="User Stories"
                        href="/story"
					/>
				</Tabs>
			</div>
		</div>
	);
};

export default BottomBar;
