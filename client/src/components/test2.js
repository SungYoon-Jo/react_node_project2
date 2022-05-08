import React, { Component } from 'react';
import Customer from './components/Customer'
import CustomerAdd from './components/CustomerAdd';
import './App.css';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
    Box,

    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Fade,

} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
// import createSpacing from '@material-ui/core/styles/createSpacing';

import MenuIcon from '@material-ui/icons';
import SearchIcon from '@material-ui/icons';



const styles = theme => ({
    root: {
        width: "100%",
        minWidth: 1080
    },
    menu: {
        marginTop: 15,
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'center'
    },
    paper: {
        marginLeft: 18,
        marginRight: 18
    },
    progress: {
        margin: theme.spacing.unit * 2
    },
    grow: {
        flexGrow: 1,
    },
    tableHead: {
        fontSize: '1.0rem'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: Fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: Fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    }
});

class App3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: '',
            completed: 0
        }
    }

    stateRefresh = () => {
        this.setState({
            customers: '',
            completed: 0
        });
        this.callApi()
            .then(res => this.setState({ customers: res }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.timer = setInterval(this.progress, 20);
        this.callApi()
            .then(res => this.setState({ customers: res }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/customers');
        const body = await response.json();
        return body;
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            고객 관리 시스템
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="검색하기"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
                <Paper>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>번호</TableCell>
                                <TableCell>이미지</TableCell>
                                <TableCell>이름</TableCell>
                                <TableCell>생년월일</TableCell>
                                <TableCell>성별</TableCell>
                                <TableCell>직업</TableCell>
                                <TableCell>설정</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.customers ? this.state.customers.map(c => {
                                return <Customer
                                    stateRefresh={this.stateRefresh}
                                    key={c.id}
                                    id={c.id}
                                    image={c.image}
                                    name={c.name}
                                    birthday={c.birthday}
                                    gender={c.gender}
                                    job={c.job} />
                            }) :
                                <TableRow>
                                    <TableCell colSpan="6" align="center">
                                        <Box sx={{ display: 'flex' }}>
                                            <CircularProgress />
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </Paper>
                <CustomerAdd stateRefresh={this.stateRefresh} />
            </div>
        );
    }
}

export default withStyles(styles)(App3);