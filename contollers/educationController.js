const Education = require('../models/Education');

const getAllEducations = async (req, res) => {
  try {
    const educations = await Education.find({});
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: educations,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
};
const addEducations = async (req, res) => {
  try {
    const schema=new Education({
      degree:req.body.degree,
      date:req.body.date,
      place:req.body.place
    });
    const newEducation = await schema.save();
    res.status(200).json({
      success: true,
      message: 'Data added successfully',
      data: newEducation,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to add data',
      error: error,
    });
  }
};




const deleteEducation = async (req, res) => {
  try {
    const education = await Education.deleteOne({ _id: req.params.ID });
    res.status(200).json({
      success: true,
      message: 'education deleted successfully',
      data: education,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error occured while deleting the education',
      error: error,
    });
  }
};

const updateEducationByID = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.ID, req.body);
    res.status(200).json({
      success: true,
      message: 'education updated successfully.',
      data: education,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to update education',
      error: error,
    });
  }
};
module.exports = {getAllEducations,addEducations,deleteEducation,updateEducationByID};
