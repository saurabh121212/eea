const User = require("./DAO");
const { generateJWT, getDateTime, checkMissingFields } = require(__helpers + "/utils.js");
const bcrypt = require("bcrypt");


function userDetails(req, res, next) {
    User.userDetails()
      .then((result) => {
        res.status(200).json({
          status: 200,
          result: {
            mes: "Users Aproved by Admin",
            list: result
          }
        })
      }).catch(err => {
        res.data = { err }
        return res;
      })
  }


  function pendingUserDetails(req, res, next) {
    User.pendingUserDetails()
      .then((result) => {
        res.status(200).json({
          status: 200,
          result: {
            mes: "Users aprovel Pending",
            list: result
          }
        })
      }).catch(err => {
        res.data = { err }
        return res;
      })
  }



  function userAprovel(req, res, next) {
    console.log('userid ', req.params.user_id);
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
      
    User.userAprovel(req.params.user_id, payload)
      .then((result) => {
        res.status(200).json({
          status: 200,
          result: {
            mes: "Employee details update successfully",
            list: result
          }
        })
      }).catch(err => {
        res.data = { err }
        return res;
      })
  }
  

  module.exports = {
    userDetails,
    userAprovel,
    pendingUserDetails
  }