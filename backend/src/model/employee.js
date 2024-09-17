const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employeeSchema = new Schema({
    f_Id: {
        type: Number,
        required: true, 
        unique: true,   
    },
    f_Image: {
        type: String,   
    },
    f_Name: {
        type: String,
        required: true, 
    },
    f_Email: {
        type: String,
        required: true,
        unique: true,   
        match: [/.+@.+\..+/, "Please enter a valid email address"] 
    },
    f_Mobile: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "Please enter a valid 10-digit mobile number"], 
    },
    f_Designation: {
        type: String,
        required: true
    },
    f_gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'], 
        required: true
    },
    f_Course: {
        type: String,
        required: true
    },
    f_CreateDate: {
        type: Date,
        default: Date.now 
    }
});


const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
