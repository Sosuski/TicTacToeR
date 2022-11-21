import mongoose from 'mongoose';
const Schema = mongoose;

const userSchema = new Schema({
    username:{
        type: String, 
        unique: true 
    },
    password:{
        type: String,
        unique: false
    }
})

module.exports = userSchema;