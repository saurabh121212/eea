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
    console.log("flow 2 ",payload);
    return rtr.create(
       payload
    ).then((result)=>{
        return result
      }).then((err)=>{
        console.log(err)
        return err;
      })
    }


    async function rtrList(payload ={}){
        return rtr.findAll({
          where:{
            del_status:1,
            // month_number:payload.month_number,
            // current_year:payload.current_year
          },
          order: [
            ['rtr_id', 'DESC'],
        ],
        }).then((result)=>{
          return result
        })
      }


      async function rtrListUser(user_id){
        return rtr.findAll({
          where:{
            user_id:user_id,
            del_status:1
          },
          order: [
            ['rtr_id', 'DESC'],
        ],
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