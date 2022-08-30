const express = require('express')
const router = express.Router()

const todos = []
let id = 1

router.get('/todos', function (req, res) {
    res.send(todos)
})

router.post('/todo', function (req, res) {
    const text = req.body.text
    const newTodo = {id: id++, text: text, priority: "no-priority", complete: false}
    todos.push(newTodo)
    res.send(todos)
})

router.put('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    let task = todos.find(t => t.id == todoID)
    if(task.complete){
        task.complete = false;
    }else{
        task.complete = true;
    }
    res.send(todos)
})

router.put(`/todo/priority/:todoID/:priority`, function(req, res){
    const todoID = req.params.todoID;
    const priority = req.params.priority;
    todos.find(t => t.id == todoID).priority = priority;
    res.send(todos)
})

router.delete('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    for(let i=0; i < todos.length; i++){
        if(todos[i].id == todoID){
            todos.splice(i, 1)
        }
    }
    
    res.send(todos);
})

module.exports = router