const employeeRepository = require("../respositary/employeeRepositary");

const createEmployee = async (employeeData,imagePath) => {
  try {
    // Delegate the saving process to the repository
    const newEmployee = await employeeRepository.saveEmployee(employeeData,imagePath);
    return newEmployee;
  } catch (error) {
    // Handle errors if needed (log, modify error messages, etc.)
    console.error("Error creating employee in service:", error);
    throw error;
  }
};

module.exports = {
  createEmployee,
};
