const About = require('../models/About');

const addAbout= async (req,res)=>{
  try {
    const schema=new About({
      image:req.body.image,
      description:req.body.description
    });
    const newAbout = await schema.save();
    res.status(200).json({
      success: true,
      message: 'Data added successfully',
      data: newAbout,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to add data',
      error: error,
    });
  }
}
const getAbout = async (req, res) => {
  try {
    const about = await About.find({});
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: about,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
};

const updateAboutByID = async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(req.params.ID, req.body);
    res.status(200).json({
      success: true,
      message: 'updated successfully.',
      data: about,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to update education',
      error: error,
    });
  }
};
module.exports = {getAbout,updateAboutByID, addAbout};
