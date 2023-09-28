const Skill = require('../models/Skill');

const addSkill= async (req,res)=>{
  try {
    const schema=new Skill({
      image:req.body.image,
      name:req.body.name
    });
    const newSkill = await schema.save();
    res.status(200).json({
      success: true,
      message: 'Data added successfully',
      data: newSkill,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to add data',
      error: error,
    });
  }
}
const getSkills = async (req, res) => {
  try {
    const skill = await Skill.find({});
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: skill,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
};

const deleteSkill = async (req, res) => {
    try {
      const skill = await Skill.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'skill deleted successfully',
        data: skill,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error occured while deleting the skill',
        error: error,
      });
    }
  };

module.exports = {getSkills,deleteSkill, addSkill};
