const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req,res) => {
  res.send([
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
]);
});

app.listen(port, ()=> console.log(`listening on port ${port}`));
