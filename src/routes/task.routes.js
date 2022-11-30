const express = require("express");

const router = express.Router();

const taskSchema = require("../models/task.js")

const packageSchema = require("../models/package.js");

const passport = require("passport");
const { authenticate } = require("passport");

const bcrypt = require("bcryptjs");

// routes Users

// route GET

router.get("/task", function(req, res){

    taskSchema
    .find()
    .then(function(data){res.json(data)})
    .catch(function(error){res.json({message: error})});

});

// route GET id

router.get("/task/:id", function(req, res){
    const{id}= req.params;
    taskSchema
    .findById(id)
    .then(function(data){res.json(data)})
    .catch(function(error){res.json({message: error})});
});

// route POST

router.post("/task", function(req, res){

    //const user = taskSchema(req.body);
    const {name, email, password} = (req.body);
    const pass = bcrypt.hashSync(password, 1)
    const bodySchema = {name, password:pass, email}
    console.log(pass)
    const user = taskSchema(bodySchema);
    user
    .save()
    .then(function(data){res.json(data)})
    .catch(function(error){res.json({message: error})});
});

// route PUT

router.put("/task/:id", function(req, res){

    const{id}= req.params;
    const{name, password, email}= req.body;
    taskSchema
    .updateOne({_id:id},{$set:{name,password,email}})
    .then(function(data){res.json(data)})
    .catch(function(error){res.json({message: error})});
});

// route DELETE

router.delete("/task/:id", function(req, res){

    const{id}= req.params;
    taskSchema
    .remove({_id:id})
    .then(function(data){res.json(data)})
    .catch(function(error){res.json({message: error})});
});

// routes packages /////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/package", function(req, res){

    packageSchema
    .find()
    .then(function(data){res.json(data)})
    .catch(function(error){res.json({message: error})});

});

// route GET id

router.get("/package/:id", function(req, res){
    const{id}= req.params;
    packageSchema
    .findById(id)
    .then(function(data){res.json(data)})
    .catch(function(error){res.json({message: error})});
});

// route POST

router.post("/package", function(req, res){

    const package = packageSchema(req.body);
    package
    .save()
    .then(function(data){res.json(data)})
    .catch(function(error){res.json({message: error})});
});

// route PUT

router.put("/package/:id", function(req, res){

    const{id}= req.params;
    const{name, password, email}= req.body;
    packageSchema
    .updateOne({_id:id},{$set:{name,password,email}})
    .then(function(data){res.json(data)})
    .catch(function(error){res.json({message: error})});
});

// route DELETE

router.delete("/package/:id", function(req, res){

    const{id}= req.params;
    packageSchema
    .remove({_id:id})
    .then(function(data){res.json(data)})
    .catch(function(error){res.json({message: error})});
});

// route SESSION    

router.post("/session", (req, res, next) =>{

    passport.authenticate("local", (err, user, info)=>{
        if (err) throw err;
        if (!user) res.json({"Alert":"No user Exists"});
        else{
        req.logIn(user, (err)=>{
            res.json({"Alert":"Succefully Authenticated"});
            console.log(req.user);
        });
        }      //failureRedirect: "/session",
    })(req, res, next);   //successRedirect: "/authenticate",
        //failureFlash: true
    
});

module.exports = router;