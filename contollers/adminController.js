const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

const addAdmin = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const schema = new Admin({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    const newAdmin = await schema.save();
    res.status(200).json({
      success: true,
      message: 'Admin added successfully',
      data: newAdmin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Unable to add admin',
      error: error.message,
    });
  }
};

const getAdmin = async (req, res) => {
  try {
    const { username, password } = req.query; 


    const admin = await Admin.findOne({
      $or: [{ username }, { email: username }, { phone: username }],
    });

    if (!admin) {
      res.status(404).json({
        success: false,
        message: 'Admin not found',
      });
      return;
    }
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      res.status(401).json({
        success: false,
        message: 'Incorrect password',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Admin retrieved successfully',
      data: admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Unable to get admin data',
      error: error.message,
    });
  }
};


module.exports = { getAdmin, addAdmin };
