import { React, useState } from "react";
import { FormControl, Select, MenuItem, Grid, Typography } from "@mui/material";
import useStyles from "../../../styles";
import { useSelector, useDispatch } from "react-redux";
import ProjectCard from "./ProjectCard";

const SelectStatusProject = ({ status, projects }) => {
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const classes = useStyles();

	const [option, setOption] = useState(1);
	
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			},
		},
	};

    let filterProjects = []
    projects&& (filterProjects = projects.filter((project)=>project.Estatus === option))
    
	return (
        <div className={classes.projectContainer}>
            <div className={classes.selectContainer}>
                <FormControl fullWidth>
                    <Select
                        MenuProps={MenuProps}
                        value={option}
                        className={classes.selectAllProjects}
                        inputProps={{style: {
                            color: 'white'
                        }}}
                        onChange={(e) => {
                            setOption(e.target.value);
                        }}
                    >
                        {status.map((item, index) => {
                            const { IdEstatusProy, estatus } = item;
                            return (
                                <MenuItem
                                    key={index}
                                    sx={{
                                        fontFamily: "var(--font-secondary-medium)",
                                    }}
                                    value={IdEstatusProy}
                                >
                                    {estatus}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </div>
            <div className={classes.projectCardContainer}>
                {
                (filterProjects.length !== 0) ?
                    <Grid
                        container
                        spacing={5}
                    >
                    {filterProjects.map((item, index)=> {
                        const {NombreProyecto} = item
                        return (
                            
                            <Grid sx={{flexGrow: 'inherit !important'}} key={index} item xs>
                                <ProjectCard projectName={NombreProyecto}/>
                            </Grid>
                            )
                        })
                    
                    }
                
                </Grid>
                :
                    <div className={classes.circularContainer}>
                        <Typography className={classes.formsTypo} variant="body1">No projects with that status</Typography>
                    </div>
                }
            </div>
        </div>
	);
};

export default SelectStatusProject;
