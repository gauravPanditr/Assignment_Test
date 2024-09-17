const express=require('express');
const {createEmployee}=require('../controller/employeeController');

const router=express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/createEmployee',upload.single('image'),createEmployee);

module.exports=router;