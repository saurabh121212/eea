const User = require("./DAO");
const { generateJWT, getDateTime, checkMissingFields } = require(__helpers + "/utils.js");
const bcrypt = require("bcrypt");
const sendEmail = require('../../helpers/email')


function ragister(req, res, next) {
    let payload = req.body;
    let missingFields = checkMissingFields(payload, ['name_of_business', 'address', 'tin',
      'first_name', 'last_name', 'designation', 'telephone_number', 'cell_phone_number', 'password', 'email_id','user_type'])
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
  
    let emailPassword = payload.password;

    payload.password = bcrypt.hashSync(payload.password, 10);
    payload = { ...payload, created_at: getDateTime(), del_status: 1};
  
    User.ragister(payload)
      .then(result => {
        if (result[1] === false) {
          res.status(402).json({
            status: 402,
            result: {
              mes: "This Email is already Exists in the system."
            }
          })
        }
        else {
            //console.log("user id ",result.user_id," ",result[0].dataValues.user_id);
             // generate JWT token
          let token = generateJWT({ user_id: result[0].dataValues.user_id, user_type: result[0].dataValues.user_type }, process.env.JWT_SECRET);
          // update user with JWT token

          User.updateToken(token, result[0].dataValues.user_id).
            then(() => {
                User.infoV2(result[0].dataValues.user_id).
                  then(result1 => {
                    res.status(200).json({
                      status: 200,
                      result: {
                        mes: "Ragistration Done",
                        list: result1
                      }
                    })
                  });
                  sendEmail(result[0].dataValues.email_id, emailPassword, 1);
                  sendEmail("systems@eea.org.sz", "", 4);
              });
        }
      })
      .catch(err => {
        console.log(err);
        res.data = { err }
      });
  }

  function login(req, res, next) {
    let payload = req.body;
    let missingFields = checkMissingFields(payload, ['email_id', 'password'])
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
  
    User.login(payload)
      .then(result => {
        if (result) {
          // Check Password 
          if (bcrypt.compareSync(payload.password, result.password)) {
  
            // generate JWT token
            let token = generateJWT({ user_id: result.user_id, user_type: result.user_type }, process.env.JWT_SECRET);
  
            //let returnValue = {token, ..};
            // update user with JWT token
            User.updateToken(token, result.user_id).
              then(() => {
                  User.infoV2(result.user_id).
                    then(result1 => {
                      res.status(200).json({
                        status: 200,
                        result: {
                          mes: "Login Done",
                          list: result1
                        }
                      })
                    });
                });
          }
  
          else {
            res.status(401).json({
              status: 401,
              result: {
                mes: "You have enter incorect password"
              }
            })
          }
        }
        else {
          res.status(401).json({
            status: 401,
            result: {
              mes: "Email Id Incorect"
            }
          })
        }
  
      })
      .catch(err => {
        console.log(err);
        res.data = { err }
      })
  }


  function userDetailsById(req, res, next) {
    User.infoV2(req.params.user_id)
      .then((result) => {
        res.status(200).json({
          status: 200,
          result: {
            mes: "User Details",
            list: result
          }
        })
      }).catch(err => {
        res.data = { err }
        return res;
      })
  }


  module.exports = {
    ragister,
    login,
    userDetailsById
  }