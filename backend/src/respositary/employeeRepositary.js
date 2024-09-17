const Employee=require('../model/employee');
const cloudinary=require('../config/cloudinaryConfig');

const saveEmployee = async (employeeData, imagePath) => {
      try {
        
        const result = await cloudinary.uploader.upload(imagePath, {
          folder: 'employee_images'  
        });
    
       
        employeeData.image = result.secure_url;
    
        
        const newEmployee = new Employee(employeeData);
        return await newEmployee.save();
      } catch (error) {
        console.error("Error uploading image and saving employee:", error);
        throw error;
      }
    };
    
    module.exports = {
      saveEmployee,
    };