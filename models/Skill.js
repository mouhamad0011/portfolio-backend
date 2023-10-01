const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const skillSchema = new Schema({
  name:{type: String, required:true},
  image:{type: String}
});
const Skill = model('Skills',skillSchema);
module.exports = Skill;
