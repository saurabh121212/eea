const router = require('express').Router()
const userController = require("./controller")
const auth = require("../../middlewares/authorize")


// This web service is use to get the user list which are approved by Admin
router.get('/user_list',auth(1),userController.userDetails);


// This web service is use to get the user list which aprovel is pending 
router.get('/pending_user_list',auth(1),userController.pendingUserDetails);


// This Web service is use to update the values of the user.
router.put('/user_aprovel/:user_id',auth(1),userController.userAprovel);

module.exports = router;
