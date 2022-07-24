import React from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import {useHistory} from 'react-router-dom'

const DialogInfo = ({open, handleClose, tittle, message, create}) => {
    const history = useHistory()

	return (
		<>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{tittle}
				</DialogTitle>
				<DialogContent>
					<DialogContentText sx={{fontFamily: "var(--font-secondary-medium)"}} id="alert-dialog-description">
						{message}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
                        sx={{fontFamily: "var(--font-secondary-medium)"}} 
						onClick={handleClose}
					>
						Don't Create
					</Button>
					<Button
                        variant="contained"
                        sx={{fontFamily: "var(--font-secondary-medium)"}} 
						onClick={() => {
                            create()
							history.push("/");
						}}
						autoFocus
					>
						Create
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default DialogInfo;
