const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const educationSchema = new Schema({
  degree:{type: String, required:true},
  date:{type: String, required:true},
  place:{type:String, required:true},
});
const Education = model('Educations',educationSchema);
module.exports = Education;
