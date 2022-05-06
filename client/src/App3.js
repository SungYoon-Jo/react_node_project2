import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
  } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import createSpacing from '@material-ui/core/styles/createSpacing';

const styles = {
    root: {
        width: "100%",
        marginTop: createSpacing.unit * 3,
        overflowX: "auto"
    },
    table: {
        minWidth: 1080
    }
};

const customers = [
    {
        'id': 1,
        'image': 'https://placeimg.com/48/48/1',
        'name': '조성윤',
        'birthday': '990112',
        'gender': '남자',
        'job': '대학생'
    },
    {
        'id': 2,
        'image': 'https://placeimg.com/48/48/2',
        'name': '생활코딩',
        'birthday': '999999',
        'gender': '남자',
        'job': '프로그래머'
    },
    {
        'id': 3,
        'image': 'https://placeimg.com/48/48/3',
        'name': '나동빈',
        'birthday': '961127',
        'gender': '남자',
        'job': '공대생'
    }
]

class App3 extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>생년월일</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map(c => {
                            return <Customer key={c.id}
                             id={c.id} 
                             image={c.image} 
                             name={c.name} 
                             birthday={c.birthday} 
                             gender={c.gender} 
                             job={c.job} />
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(styles)(App3);