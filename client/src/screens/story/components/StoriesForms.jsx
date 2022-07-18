import { React, useState } from "react";
import useStyles from "../styles";
import { Typography, TextField, Button, Grid, Select, MenuItem, FormControl } from "@mui/material";
import {useHistory} from "react-router-dom";

const Stories = () => {
	const classes = useStyles();
    const history = useHistory();

	const [story, setStory] = useState({
        projectId: "",
		epic: "",
		rolPrimario: "",
		quiero: "",
		rolSecundario: "",
		pueda: "",
		nota: "",
		story: "",
	});

    // const [allStory, setAllStory] = useState("");

    const handleChange = (event) => {
        setStory( { ...story, projectId: event.target.value});
    };

    const allStory = `Como ${story.rolPrimario}, yo quiero ${story.quiero}, para que ${story.pueda} y entregarsela a ${story.rolSecundario}.`

	const submit = (e) => {
		e.preventDefault();
		console.log(story);
		console.log(allStory);
        history.push("/")
	};
    
    const projectNames = [{id: 1, projectName: "Alkimya DevKit"}, {id: 2, projectName: "Vinculación de prácticas"}]

	return (
		<div className={classes.mainContainer}>

				<div className={classes.typoContainer}>
					<Typography className={classes.projectsTypo} variant="h4">
						New User Story
					</Typography>
				</div>

				<form className={classes.formsContainer} onSubmit={submit}>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					>
                        <Grid item xs={6}>
							<Typography
								align="left"
								variant="subtitle2"
								className={classes.formsTypo}
							>
								Project Name
							</Typography>
                            <FormControl fullWidth>
                                <Select
                                    sx={{fontFamily: 'var(--font-secondary-medium)'}}
                                    // hiddenLabel
                                    // autoWidth
                                    value={story.projectId}
                                    className={classes.selectProjectId}
                                    onChange={handleChange}
                                >
                                    {/* <MenuItem sx={{fontFamily: 'var(--font-secondary-medium)'}} value={"10"}></MenuItem>
                                    <MenuItem sx={{fontFamily: 'var(--font-secondary-medium)'}} value={"20"}>Twenty</MenuItem>
                                    <MenuItem sx={{fontFamily: 'var(--font-secondary-medium)'}} value={"30"}>Thirty</MenuItem> */}
                                    {projectNames.map((item, index) => {
                                        const { id, projectName } = item;
                                        return (
                                            <MenuItem key={id} sx={{fontFamily: 'var(--font-secondary-medium)'}} value={id}>{projectName}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
						</Grid>
						<Grid item xs={12}>
							<Typography
								align="left"
								variant="subtitle2"
								className={classes.formsTypo}
							>
								Epic
							</Typography>
							<TextField
                                required
								hiddenLabel
                                size="small"
								className={classes.textField_Epic}
								variant="outlined"
								focused
								InputProps={{
									spellCheck: "false",
                                    style: {fontFamily: 'var(--font-secondary-medium)'}
								}}
								onChange={(e) =>
									setStory({ ...story, epic: e.target.value, story: allStory })
								}
							/>
						</Grid>

						<Grid item xs={6}>
							<Typography
								align="left"
								variant="subtitle2"
								className={classes.formsTypo}
							>
								AS A… (PRIMARY ROLL){" "}
							</Typography>
							<TextField
                                required
								hiddenLabel
                                size="small"
								className={classes.textField}
								variant="outlined"
								focused
								InputProps={{
									spellCheck: "false",
                                    style: {fontFamily: 'var(--font-secondary-medium)'}
								}}
								onChange={(e) =>
									setStory({
										...story,
										rolPrimario: e.target.value,
                                        story: allStory
									})
								}
							/>
						</Grid>

						<Grid item xs={6}>
							<Typography
								align="left"
								variant="subtitle2"
								className={classes.formsTypo}
							>
								I WANT…
							</Typography>
							<TextField
                                required
								hiddenLabel
                                multiline
                                rows={3}
                                size="small"
								className={classes.textField}
								variant="outlined"
								focused
								InputProps={{
									spellCheck: "false",
                                    style: {fontFamily: 'var(--font-secondary-medium)'}
								}}
								onChange={(e) =>
									setStory({
										...story,
										quiero: e.target.value,
                                        story: allStory
									})
								}
							/>
						</Grid>

						<Grid item xs={6}>
							<Typography
								align="left"
								variant="subtitle2"
								className={classes.formsTypo}
							>
								So that...
							</Typography>
							<TextField
                                required
								hiddenLabel
                                size="small"
								className={classes.textField}
								variant="outlined"
								focused
								InputProps={{
									spellCheck: "false",
                                    style: {fontFamily: 'var(--font-secondary-medium)'}
								}}
								onChange={(e) =>
									setStory({
										...story,
										pueda: e.target.value,
                                        story: allStory
									})
								}
							/>
						</Grid>

						<Grid item xs={6}>
							<Typography
								align="left"
								variant="subtitle2"
								className={classes.formsTypo}
							>
								Deliver to…(SECONDARY ROLL){""}
							</Typography>
							<TextField
                                required
								hiddenLabel
                                size="small"
								className={classes.textField}
								variant="outlined"
								focused
								InputProps={{
									spellCheck: "false",
                                    style: {fontFamily: 'var(--font-secondary-medium)'}
								}}
								onChange={(e) =>
									setStory({
										...story,
										rolSecundario: e.target.value,
                                        story: allStory
									})
								}
							/>
						</Grid>

						<Grid item xs={6}>
							<Typography
								align="left"
								variant="subtitle2"
								className={classes.formsTypo}
							>
								Story
							</Typography>
							<TextField
                                required
                                value={allStory}
								hiddenLabel
                                multiline
                                rows={4}
								className={classes.textField}
								variant="outlined"
								focused
								InputProps={{
                                    readOnly: true,
									spellCheck: "false",
                                    style: {fontFamily: 'var(--font-secondary-medium)'}
								}}
								// onChange={(e) =>
								// 	setStory({
								// 		...story,
								// 		story: e.target.value,
								// 	})
								// }
							/>
						</Grid>
                        <Grid item xs={6}>

                        <div className={classes.lastGrid}>
							<Typography
								align="left"
								variant="subtitle2"
								className={classes.formsTypo}
							>
								ACCEPTANCE CRITERIA
							</Typography>
                        
							<TextField
                                required
								hiddenLabel
                                size="small"
								className={classes.textField}
								variant="outlined"
								focused
								InputProps={{
									spellCheck: "false",
                                    style: {fontFamily: 'var(--font-secondary-medium)'}
								}}
								onChange={(e) =>
									setStory({ ...story, nota: e.target.value})
								}
							/>
                            <div className={classes.buttonContainer}>

                                <Button
                                    className={classes.createStoryButton}
                                    type="submit"
                                    variant="contained"
                                >
                                    CREATE
                                </Button>
                            </div>
                            </div>
						</Grid>
						{/* <Grid item xs={6}>
							
						</Grid> */}
					</Grid>
				</form>

		</div>
	);
};

export default Stories;
