import React from 'react';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import useStyle from "../styles";
import './allProjects.css';
import ProjectCard from './ProjectCard';
import SelectStatus from './SelectStatusProject';

const AllProjects = () => {
  const classes = useStyle() 
  const history = useHistory()

  const handleClick = () => {
    history.push("/new")
  }

  return (
    <div className={classes.mainContainer}>
      <div className='projectContainer'>
        <SelectStatus />
        <div className='projectsGallery'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>

)}

export default AllProjects