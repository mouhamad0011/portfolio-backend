const Admin = require('../models/Admin');

const addAdmin= async (req,res)=>{
  try {
    const schema=new Admin({
      username:req.body.username,
      email:req.body.email,
      phone:req.body.phone,
      password:req.body.password
    });
    const newAdmin = await schema.save();
    res.status(200).json({
      success: true,
      message: 'admin added successfully',
      data: newAdmin,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to add data',
      error: error
    });
  }
}
const getAdmin = async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const admin = await Admin.findOne({
        $or: [{ username: username }, { email: username }, { phone: username }],
        password: password 
      });
  
      if (!admin) {
        res.status(404).json({
          success: false,
          message: 'Admin not found'
        });
        return;
      }
  
      res.status(200).json({
        success: true,
        message: 'Admin retrieved successfully',
        data: admin
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unable to get admin data',
        error: error.message
      });
    }
  };
  

module.exports = {getAdmin,addAdmin};
