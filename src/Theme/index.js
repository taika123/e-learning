// import {createMuiTheme} from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
const theme = createTheme ({
    breakpoints:{
        values:{
            xs:0,
            sm:576,
            md:768,
            lg:992,
            xl:1200
        }
    },
    palette:{
        commom:{
            black:'#000',
            white:'#fff',
        },
        primary:{
            light:'#e04646',
            main:'#d91a21',
            dark:'#7a2020',
            contrastText:'#fff'
        },
        secondary:{
            light:'#ffef8c',
            main:'#ffdd01',
            dark:'#fbb512',
            contrastText:'#000'
        },
        text:{
            primary:'#000',
            secondary:'#0000ff'
        },
        c1:{
            light:'#ee92ff',
            main:'#b930d1',
            dark:'#6a037d',
        },
        //c2:{},
        //c3:{}
    },
});

export default theme