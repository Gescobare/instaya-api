const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

// User register

const taskSchema = new Schema({

    name: {
        type: String, 
        required: true,
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true
    }

});

taskSchema.methods.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

taskSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
};


module.exports = mongoose.model("Task", taskSchema);