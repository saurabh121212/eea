const { user } = require('../../models');
const { Op, Sequelize } = require("sequelize");



module.exports = {
    ragister,
    updateToken,
    infoV2,
    login,
    info
}

async function ragister(payload = {}) {
    return user.findOrCreate({
      where:{
        email_id:payload.email_id
      },
      defaults: payload
      
    })
      .then((result) => {
        return result;
       })
    }

    async function updateToken(token, id) {
        return user.update({
            token: token
          },
          {
          where: { user_id: id},
      
        })
          .then(result => {
            return result
          })
      }

      async function infoV2(values) {
        return user.findOne({
          attributes: {exclude:['password','otp']},
          where: { user_id: values},
        })
          .then(result => {
            return result
          })
      }

      async function login(payload = {})
      {
        return user.findOne({
         where:{
            email_id: payload.email_id,
            del_status:1
          }
        })
        .then((result)=>{
          return result;
        }) 
      } 


      async function info(values = {}) {
        return user.findOne({
          where: { user_id: values.id },
        })
          .then(result => {
            return result
          })
      }