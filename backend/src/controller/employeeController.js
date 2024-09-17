const employeeService = require('../service/employeeService');
const multer = require('multer');



const createEmployee = async (req, res) => {
  const employeeData = req.body;

  try {
    
    const imagePath = req.file ? req.file.path : null;

    
    const newEmployee = await employeeService.createEmployee(employeeData, imagePath);

    return res.status(201).json({
      data: newEmployee,
      success: true,
      error: null,
      message: "Successfully created new employee",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
      message: "Failed to create employee",
    });
  }
};


module.exports = {
  createEmployee,
};
