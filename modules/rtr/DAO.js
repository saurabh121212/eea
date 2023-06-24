const { rtr } = require('../../models');
const { Op, Sequelize } = require("sequelize");

module.exports = {
    rtrCreate,
    rtrList,
    rtrUpdate,
    rtrUpdateDetails,
    rtrListUser
}

async function rtrCreate(payload = {}) {
    //console.log("testing flow ", payload);
    return rtr.create(
       payload
    ).then((result)=>{
        return result
      })
    }


    async function rtrList(){
        return rtr.findAll({
          where:{
            del_status:1
          }
        }).then((result)=>{
          return result
        })
      }


      async function rtrListUser(user_id){
        return rtr.findAll({
          where:{
            user_id:user_id,
            del_status:1
          }
        }).then((result)=>{
          return result
        })
      }

      async function rtrUpdate(rtr_id,payload){
        return rtr.update(
          {
            admin_comments: payload.admin_comments,
            approval_status: payload.approval_status,
         },  
          {
          where:{
            rtr_id:rtr_id
          }
           }).then((result)=>{
             return result
           })
      }

      async function rtrUpdateDetails(rtr_id,payload){
        return rtr.update(payload,  
          {
          where:{
            rtr_id:rtr_id
          }
           }).then((result)=>{
             return result
           })
      }