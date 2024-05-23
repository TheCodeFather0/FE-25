import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary: {
            main:'#212121',
        },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    border:0,
                }
            }
        }
    }
})