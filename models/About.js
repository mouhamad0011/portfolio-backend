const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const aboutSchema = new Schema({
  image:{type: String, required:true},
  description:{type: String, required:true}
});
const About = model('About',aboutSchema);
module.exports = About;
