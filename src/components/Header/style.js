import theme from "../../Theme"

export const styles = () => {
    return {
        title:{
            flexGrow:1,
            //man hinh duoi 1280px
            [theme.breakpoints.down("md")]:{
                //...style
                fontSize: theme.typography.h2.fontSize
            },
        },
        navLink: {
            color:"#ffffff",
            marginLeft:20,
            fontSize:18,
            opacity:0.8,
            textDecoration:"none",
        },
        activeNavLink: {
            opacity:1,
        },
        btnDetail:{
            backgroundColor:theme.palette.c1.main
        },
        btn:{
            display:"inherit",
            float:"btn!important",
        }
    }
}