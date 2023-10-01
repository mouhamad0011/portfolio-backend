const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  name:{type:String, required:true},
  image:{type: String},
  description:{type: String, required:true},
  link:{type:String, required:true}
});
const Project = model('Project',projectSchema);
module.exports = Project;
