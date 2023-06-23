const router = require('express').Router()
const userController = require("./controller")
const auth = require("../../middlewares/authorize")

// This web service is use to add new user in the system. 
router.post('/ragister',userController.ragister);

// This web service is use to login Admin and User/Employee
router.post('/login',userController.login);

// get user details by user id. 
router.get('/single_user_details/:user_id',auth(2),userController.userDetailsById);

module.exports = router;
