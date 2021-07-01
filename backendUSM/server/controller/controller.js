const express = require('express');
const Router = express.Router();
const userSchema = require('./../model/userModel');

Router.get('/user/all', (req, res) => {
    userSchema.find().then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.json({err : "There was an error retrieving the user data"});
    });
})

Router.post('/user/add', (req, res) => {
    const addData = new userSchema({
        name : req.body.name,
        email : req.body.email,
        gender : req.body.gender === 'male',
        status : req.body.status === 'active'
    });

    addData.save().then(data => {
        res.json({msg : "Data added successfully"})
    }).catch(err => {
        console.log(err);
        res.json({err : "There was an error creating the user"});
    })
})

Router.get('/:id', (req, res) => {
    userSchema.findById(req.params.id, (err, data) => {
        if(err) return res.json({err : "There was an error retrieving user data"});
        res.json(data);
    })    
})

Router.put('/:id', (req, res) => {
    const updateData = {
        name : req.body.name,
        email : req.body.email,
        gender : req.body.gender === 'male',
        status : req.body.status === 'active'
    };
    userSchema.findByIdAndUpdate(req.params.id, updateData).then(data => {
        res.json({msg : "User update successfully"});
    }).catch(err => {
        console.log(err);
        res.json({err : "There was an error updating the user"});
    });
})

Router.delete('/:id', (req, res) => {
    userSchema.findByIdAndDelete(req.params.id).then(data => {
        res.json({msg : 'user deleted successfully'});
    }).catch(err => {
        console.log(err);
        res.json({err : "There was an error deleting the user"});
    })
})

module.exports = Router;