import { React } from "react";
import useStyles from "../../../styles"
import {Typography} from '@mui/material'

const ProjectCard = ({projectName}) => {
    const classes = useStyles()
	return (
		<div className={classes.cardProject}>
            <div className={classes.cardProjectDetails}>
                <Typography className={classes.cardsTypo} variant="body1">{projectName}</Typography>
                {/* <div className={classes.projectStatus}></div> */}
            </div>
        </div>
	);
};

export default ProjectCard;
