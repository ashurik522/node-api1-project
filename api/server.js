// BUILD YOUR SERVER HERE
const Users = require('./users/model')

const express = require('express')

const server = express()

server.use(express.json())


//Endpoints

//gets all users
server.get('/api/users', (req, res) => {
    Users.find().then(users => res.json(users))
})

//gets users by id
server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    Users.findById(id).then(user => {
        if(user == null){
            res.status(404).json({ message:'User not found'})
        } else {
            res.json(user)
        }
    })
})





module.exports = server; // EXPORT YOUR SERVER instead of {}
