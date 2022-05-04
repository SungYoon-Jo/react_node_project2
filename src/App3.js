import React, { Component } from "react";
import './App.css';
import Customer from './components/Customer';
import { Table } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";

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
    return (
      <div>
        <Table>
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
            <TableRow>
            {customers.map(c => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  brithday={c.brithday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            })
            }
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App3;