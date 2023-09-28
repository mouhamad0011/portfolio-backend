const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const experienceSchema = new Schema({
  position:{type: String, required:true},
  description:{type: String, required:true},
  date:{type: String, required:true},
  place:{type:String, required:true},
});
const Experience = model('Experiences',experienceSchema);
module.exports = Experience;
