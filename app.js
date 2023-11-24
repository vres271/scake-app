const express = require('express')
const app = express()
const port = 4202
const routePrefix = '/api/v1'

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Content-Type', 'application/json');
  next();
});


app.get('/', (req, res) => {
  res.send('API URL is '+routePrefix)
})
// users

const fs = require('fs');
const users = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));

// const users = [
//   {id: 1, name: 'Jhon', age: 29},
//   {id: 2, name: 'Mary', age: 19},
//   {id: 3, name: 'Greg', age: 21},
//   {id: 4, name: 'Ivan', age: 29},
//   {id: 7, name: 'Gary', age: 12},
//   {id: 8, name: 'Tony', age: 23},
//   {id: 12, name: 'Den', age: 29},
//   {id: 14, name: 'Denis', age: 16},
//   {id: 15, name: 'Fuck', age: 11},
//   {id: 16, name: 'Margh', age: 62},
//   {id: 21, name: 'Kristofer', age: 29},
//   {id: 22, name: 'Ron', age: 72},
// ]

app.get(routePrefix + '/users', (req, res) => {
  res.send(users)
})

app.get(routePrefix + '/users/:id', (req, res) => {
  const user = users.find(user => user.id === +req.params.id);
  if (user) {
    res.send(users.find(user => user.id === +req.params.id))
  } else {
    res.status(404).send('Not found');
  }
  
})

app.post(routePrefix + '/users', (req, res) => {
  res.send('Got a POST request')
})

app.put(routePrefix + '/users', (req, res) => {
  res.send('Got a PUT request at /users')
})

app.put(routePrefix + '/users/:id', (req, res) => {
  res.send('Got a PUT request at /users')
})

app.delete(routePrefix + '/users/::id', (req, res) => {
  res.send('Got a DELETE request at /users')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})