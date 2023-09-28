const Experience = require('../models/Experience');

const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find({});
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: experiences,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
};
const addExperience = async (req, res) => {
  try {
    const schema=new Experience({
      position:req.body.position,
      description:req.body.description,
      date:req.body.date,
      place:req.body.place
    });
    const newExperience = await schema.save();
    res.status(200).json({
      success: true,
      message: 'Data added successfully',
      data: newExperience,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to add data',
      error: error,
    });
  }
};

const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: 'experience deleted successfully',
      data: experience,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error occured while deleting the experience',
      error: error,
    });
  }
};

const updateexperienceByID = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.ID, req.body);
    res.status(200).json({
      success: true,
      message: 'experience updated successfully.',
      data: experience,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to update wxpeience',
      error: error,
    });
  }
};
module.exports = {getAllExperiences,addExperience,deleteExperience,updateexperienceByID};
