import { createTheme } from "@mui/material/styles";

const theme =  createTheme({
    typography: {
        fontFamily: "Poppins"
    },
	palette: {
		type: "light",
		primary: {
			main: "#E20074",
		},
		secondary: {
			main: "#000000",
		},
		error: {
			main: "#ff1100",
			light: "#fd3e32",
			dark: "#b70e03",
		},
		warning: {
			main: "#e48b0b",
			light: "#eaa43d",
			dark: "#9e6007",
		},
		success: {
			main: "#4caf50",
			light: "#6ebd72",
			dark: "#327735",
		},
		info: {
			main: "#2095f3",
			light: "#4aa8f3",
			dark: "#186caf",
		},
		text: {
			primary: "rgba(0,0,0,0.87)",
		},
	},
});

export default theme;
