import {
	TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"& td": {
		border: "solid 1.5px #E20074",
		padding: "10px 30px",
		color: "#97004D",
		fontFamily: "var(--font-secondary-bold)",
		paddingLeft: "30px",
	},
	"&:first-of-type td": {
		borderTop: "none",
	},
	"&:last-child td": {
        border: 'none',
		borderTop: "solid 1.5px #E20074",
        // padding: '5px'
	},
}));

export default StyledTableRow;
