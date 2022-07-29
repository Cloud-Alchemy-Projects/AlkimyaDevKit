import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	Paper,
    TableRow,
} from "@mui/material";
import StyledTableRow from "./StyledTableRow";

import useStyles from "../../../styles";

const ClientsTable = ({ clients }) => {
	const classes = useStyles();

	return (
		<>
			<Paper className={classes.tableContainer}>
				<TableContainer
					sx={{
						maxWidth: 800,
                        // border: "solid 1.5px #E20074 !important",
                        // borderRadius: '20px',
						maxHeight: 500,
					}}
				>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								<TableCell
									align="center"
									className={classes.tableCell}
								>
									COMPANY’S NAME
								</TableCell>
								<TableCell className={classes.tableCell}>
									CLIENT’S NAME
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{clients.map((row) => (
								<StyledTableRow hover key={row.idCliente}>
									<TableCell
										size="medium"
									>
										{row.nombreCompania}
									</TableCell>
									<TableCell
										size="medium"
										sx={{
											fontFamily:
												"var(--font-secondary-regular) !important",
										}}
									>
										{row.NombreCliente}{" "}
										{row.ApellidoPaterno}{" "}
										{row.ApellidoMaterno}
									</TableCell>
								</StyledTableRow>
							))}
                            <StyledTableRow>
									<TableCell
										size="small"
									>
									</TableCell>
									<TableCell>
									</TableCell>
								</StyledTableRow>
							
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</>
	);
};

export default ClientsTable;
