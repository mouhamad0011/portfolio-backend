const Project = require('../models/Project');

const addProject= async (req,res)=>{
  try {
    const schema=new Project({
      name:req.body.name,
      image:req.body.image,
      description:req.body.description,
      link:req.body.link
    });
    const newProject = await schema.save();
    res.status(200).json({
      success: true,
      message: 'Data added successfully',
      data: newProject,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to add data',
      error: error,
    });
  }
}
const getProjects = async (req, res) => {
  try {
    const project = await Project.find({});
    res.status(200).json({
      success: true,
      message: 'Data retrieved successfully',
      data: project,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to get data',
      error: error,
    });
  }
};

const deleteProject = async (req, res) => {
    try {
      const project = await Project.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'project deleted successfully',
        data: project,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error occured while deleting the skill',
        error: error,
      });
    }
  };

module.exports = {getProjects,deleteProject, addProject};
