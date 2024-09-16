const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    f_sno: {
        type: Number,
        required: true,
        unique: true,   
    },
    f_userName: {
        type: String,
        required: true,
        unique: true,    
    },
    f_Pwd: {
        type: String,
        required: true, 
        minlength: 6     
    }
});


userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('f_Pwd')) {
            return next();
        }
       
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.f_Pwd, salt);
        this.f_Pwd = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});


userSchema.methods.comparePassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword, this.f_Pwd);
};


const User = mongoose.model('Login', userSchema);

module.exports = User;
