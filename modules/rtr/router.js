const router = require('express').Router()
const rtrController = require("./controller")
const auth = require("../../middlewares/authorize")

// create RTR 
router.post('/create',auth(2),rtrController.rtrCreate);

// list of all RTR
router.post('/list',auth(2),rtrController.rtrList);

// List of RTR by User_id for specific user
router.get('/list/:user_id',auth(2),rtrController.rtrListUser);

// this is for update RTR status by admin 
router.put('/update_rtr_status/:rtr_id',rtrController.rtrUpdate);

// this is for update RTR details by user 
router.put('/update_rtr_details/:rtr_id',rtrController.rtrUpdateDetails);

module.exports = router;