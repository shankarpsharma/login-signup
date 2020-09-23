const express=require('express');
const route=express.Router();

const user_controller = require('../controllers/user/user')

route.post('/signup',user_controller.signup);
route.post('/login',user_controller.login);

route.get('/alldata',user_controller.findAll);

route.delete('/deleteAll', user_controller.deleteAll);

module.exports=route; 