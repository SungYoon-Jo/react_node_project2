import React, { Component } from "react";
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/128/128/1',
    'name': 'jsy',
    'brithday': '990112',
    'gender': 'man',
    'job': 'student',
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/128/128/2',
    'name': 'jje',
    'brithday': '980317',
    'gender': 'female',
    'job': 'student',
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/128/128/3',
    'name': 'none',
    'brithday': 'none',
    'gender': 'none',
    'job': 'none'
  }
]


class App3 extends Component {
  render() {
    return (
      <div> {
          customers.map(c => {
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
      </div>
    );
  }
}

export default App3;