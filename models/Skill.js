const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const skillSchema = new Schema({
  image:{type: String, required:true},
  name:{type: String, required:true}
});
const Skill = model('Skills',skillSchema);
module.exports = Skill;
