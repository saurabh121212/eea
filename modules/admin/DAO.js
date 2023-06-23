const { user } = require('../../models');
const { Op, Sequelize } = require("sequelize");

module.exports = {
    userDetails,
    userAprovel
}


async function userDetails(){
    return user.findAll({
     attributes: {exclude:['password','otp','year','token']},
     where:{
       del_status:1,
       user_type:2
     }
    }).then((result)=>{
      return result;
    })
  }


  async function userAprovel(user_id,payload){

    // if admin reject user request then delete that user from tha database.
    if (payload.approval_status == 3)
    {
      return  user.destroy({
        where: {
          user_id: user_id //this will be your id that you want to delete
        }
     }).then((result)=>{
      return result
    })
    }
    else
    {
      return user.update(
        {
          approval_status: payload.approval_status,
       },  
        {
        where:{
          user_id:user_id
        }
         }).then((result)=>{
           return result
         })
    }
  }