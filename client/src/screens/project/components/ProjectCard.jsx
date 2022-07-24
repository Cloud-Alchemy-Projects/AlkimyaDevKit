import { React, useState } from "react";
import "./allProjects.css";

const projectCard = () => {

	return (
		<div className="cardProject">
            <div className="cardProjectDetails">
                <h1>Project name</h1>
                <div className="projectStatus"></div>
            </div>
        </div>
	);
};

export default projectCard;
