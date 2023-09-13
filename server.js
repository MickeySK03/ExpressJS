require('dotenv').config()
const express = require('express')
const app = express()

const todos = [
    {id: 11, title: 'Learn HTML'},
    {id: 22, title: 'Learn CSS'},
    {id: 33, title: 'Learn Javascript'},
]

app.get('/', (req,res) => {
    res.send({msg : 'Welcome to Express Server'})
})

app.get('/todos', (req,res) => {
    res.send(todos)
})
// แปลง code นี้ให้หาจากid
// app.get('/todos/:index', (req,res) =>{
//     console.log(req.params);
//     res.send(todos[+req.params.index])
// })
app.get('/todos/:id', (req,res) => {
    const {id} = req.params
    let output = todos.filter(el => el.id === +id)
    if(output.length <= 0)
    return res.status(404).json({msg: `Have no data with id= ${id}`})
    res.json(output)
    
})

app.use((req,res) => {
    res.status(404).send({msg: 'resource not found'})
})

let port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log('Server on port :', port);
})