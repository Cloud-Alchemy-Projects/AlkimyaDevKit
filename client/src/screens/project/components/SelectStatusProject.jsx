import { React, useState } from "react";
import "./allProjects.css";

const selectStatusProject = () => {

	return (
		<div className="selectStatusButton">
            <select>
                <option value="0">In Progress</option>
                <option value="1">Waiting</option>
                <option value="2">Completed</option>
            </select>
        </div>
	);
};

export default selectStatusProject;
