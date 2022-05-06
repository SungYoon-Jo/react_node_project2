// import React, { Component } from 'react';
// import Customer from './components/Customer'
// import './App.css';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableRow,
//     Paper,
//   } from "@material-ui/core";
// import { withStyles } from '@material-ui/core/styles';
// import createSpacing from '@material-ui/core/styles/createSpacing';

// const styles = {
//     root: {
//         width: "100%",
//         marginTop: createSpacing.unit * 3,
//         overflowX: "auto"
//     },
//     table: {
//         minWidth: 1080
//     }
// };

// const customers = [
//     {
//         'id': 1,
//         'image': 'https://placeimg.com/48/48/1',
//         'name': '홍길동',
//         'birthday': '961222',
//         'gender': '남자',
//         'job': '대학생'
//     },
//     {
//         'id': 2,
//         'image': 'https://placeimg.com/48/48/2',
//         'name': '나동빈',
//         'birthday': '960508',
//         'gender': '남자',
//         'job': '프로그래머'
//     },
//     {
//         'id': 3,
//         'image': 'https://placeimg.com/48/48/3',
//         'name': '이순신',
//         'birthday': '961127',
//         'gender': '남자',
//         'job': '디자이너'
//     }
// ]

// class App3 extends Component {
//     render() {
//         const { classes } = this.props;
//         return (
//             <Paper className={classes.root}>
//                 <Table className={classes.table}>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>번호</TableCell>
//                             <TableCell>이미지</TableCell>
//                             <TableCell>이름</TableCell>
//                             <TableCell>생년월일</TableCell>
//                             <TableCell>성별</TableCell>
//                             <TableCell>직업</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {customers.map(c => {
//                             return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
//                         })}
//                     </TableBody>
//                 </Table>
//             </Paper>
//         );
//     }
// }

// export default withStyles(styles)(App3);


import React, { Component } from "react";
import Customer from "./components/Customer";
import './App.css';
import {
    Table,
    TableBody,
    TableCell,
    // TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import createSpacing from "@material-ui/core/styles/createSpacing";

const styles = {
    root: {
        width: '100%',
        maginTop: createSpacing.unit * 3,
        overflowX: "aoto"
    },
    test: {
        minWidth: 1080
    }
};

const customers = [
    {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': 'jsy',
        'brithday': '990112',
        'gender': 'man',
        'job': 'student',
    },
    {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': 'jje',
        'brithday': '980317',
        'gender': 'female',
        'job': 'student',
    },
    {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': 'none',
        'brithday': 'none',
        'gender': 'none',
        'job': 'none'
    }
]


class App3 extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.test}>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>생년원일</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map(c => {
                            return ( <Customer key={c.id}
                                    id={c.id}
                                    image={c.image}
                                    name={c.name}
                                    brithday={c.brithday}
                                    gender={c.gender}
                                    job={c.job} />
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(styles)(App3);