const rtr = require("./DAO");
const { generateJWT, getDateTime, checkMissingFields } = require(__helpers + "/utils.js");
const sendEmail = require('../../helpers/email')


function rtrCreate(req, res, next) {
    let payload = req.body;
    let missingFields = checkMissingFields(payload, ['month_text', 'month_number','current_year', 'tin',
    'company_name', 'email_id', 'first_name'])
    if (missingFields.length) {
      res.status(400).json({
        status: 400,
        result: {
          msg: "fields are missing",
          list: missingFields
        }
      })
      return next()
    }
  
    payload = { ...payload, del_status: 1 };

    console.log("flow 1")

    rtr.rtrCreate(payload)
      .then(result => {
        console.log("flow 3")
        res.status(200).json({ 
          status: 200,
          result:{
            mes: "RTR Created", 
            data:result
          }
        })
      })
      .catch(err => {
        res.data = { err }
        return res;
      });
  }


  function rtrList(req,res,next){
    console.log('Parames Check RTR ', req.params);
    let payload = req.body;

    rtr.rtrList(payload)
    .then(result=>{
      res.status(200).json({
        status: 200,
          result:{
            mes: "Holidays List Month and Year wise",
            list:result
          }
      })
    })
  }



  function rtrListUser(req, res, next) {
    payload = req.body;
    if (!req.params.user_id) {
      res.status(400).json({
        status: 400,
        result: {
          msg: "fields are missing",
          list: []
        }
      })
      return next();
    }
  
    rtr.rtrListUser(req.params.user_id)
      .then((result) => {
        res.status(200).json({
          status: 200,
          result:{
            mes: "Update Holidays Values Successfully",
            list: result
          }
        })
      }).catch(err => {
        res.data = { err }
        return res;
      })
  }



  function rtrUpdate(req, res, next) {
    payload = req.body;
    if (!req.params.rtr_id) {
      res.status(400).json({
        status: 400,
        result: {
          msg: "fields are missing",
          list: []
        }
      })
      return next();
    }
  
    rtr.rtrUpdate(req.params.rtr_id, payload)
      .then((result) => {
        res.status(200).json({
          status: 200,
          result:{
            mes: "Update Holidays Values Successfully",
            list: result
          }
        })
        
        sendEmail(payload.email_id, payload, 2);

      }).catch(err => {
        res.data = { err }
        return res;
      })
  }

  function rtrUpdateDetails(req, res, next) {
    payload = req.body;
    if (!req.params.rtr_id) {
      res.status(400).json({
        status: 400,
        result: {
          msg: "fields are missing",
          list: []
        }
      })
      return next();
    }
  
    rtr.rtrUpdateDetails(req.params.rtr_id, payload)
      .then((result) => {
        res.status(200).json({
          status: 200,
          result:{
            mes: "Update Holidays Values Successfully",
            list: result
          }
        })
      }).catch(err => {
        res.data = { err }
        return res;
      })
  }

  
  module.exports = {
    rtrCreate,
    rtrList,
    rtrUpdate,
    rtrUpdateDetails,
    rtrListUser
}