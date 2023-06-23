const router = require('express').Router()
const userController = require("./controller")
const auth = require("../../middlewares/authorize")


// This web service is use to get the user list which are in the system. 
router.get('/user_list',auth(1),userController.userDetails);

// This Web service is use to update the values of the user.
router.put('/user_aprovel/:user_id',auth(1),userController.userAprovel);

module.exports = router;
