import React from "react";
import useStyles from "../../../styles";
import ColumnStatus from "./ColumnStatus"

const SelectProject = ({ filterStories }) => {
	const classes = useStyles();
    let backlog = []
    filterStories&& (backlog = filterStories.filter((o)=>o.Estatus===1));
    let deck = []
    filterStories&& (deck = filterStories.filter((o)=>o.Estatus===2));
    let active = []
    filterStories&& (active = filterStories.filter((o)=>o.Estatus===3));
    let complete = []
    filterStories&& (complete = filterStories.filter((o)=>o.Estatus===4));
	
    return (
		<>
			<div className={classes.formsContainer_2}>
				<div className={classes.columnWrapper}>
					<ColumnStatus statusType="Backlog" data={backlog}/>
					<ColumnStatus statusType="On Deck" data={deck}/>
					<ColumnStatus statusType="Active" data={active}/>
					<ColumnStatus statusType="Complete" data={complete}/>
				</div>
			</div>
		</>
	);
};

export default SelectProject;
