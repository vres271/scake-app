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

app.get(routePrefix + '/users', (req, res) => {
  let items = [...users];
  if(req?.query && Object.entries(req?.query).length > 0) {
    items = items.filter(item => {
      const every = Object.entries(req?.query).every(([key, value] = entry) => {
        if (key !== 'offset' && key !== 'limit') {
          regexp = new RegExp(value, 'ig');
          return regexp.test(item[key])
        }
        return true;
      })
      return every;
    });
  }
  if(req?.query?.offset) {
    items = items.slice(req?.query?.offset);
  }
  if(req?.query?.limit) {
    items = items.slice(0, req?.query?.limit);
  }
  res.send(items)
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