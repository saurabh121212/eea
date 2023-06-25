const nodemailer = require('nodemailer');
const emailTemplate = require('./emailTemp')


async function sendEmail(email,payload,status) {

    // let emailList = [
    //     'jvh@computronics.sz',
    //     'kunal@computronics.sz',
    //     'riley@computronics.sz',
    //     'syed@computronics.sz',
    //     'nathi@computronics.sz',
    //     'marina@computronics.sz',
    //     'reception@computronics.sz'
    //    // 'test@gmail.com'
    //   ];

    let subject;
    let output
    
    if(status==1)
    {
         subject = `EEA System Registration Email`
         output = `Hello EEA User <br><br> Wlcome in the EEA system your login details are. <br> Email Id - ${email} <br> Password - ${payload}`;
    }
    else if(status == 2)
    {
        const leaveStatus = payload.approval_status == 2 ? "Approved" : "Rejected"
        subject = `EEA RTR Status ${leaveStatus}`
        output = `Hello EEA User <br><br> Your RTR application has bean ${leaveStatus}. <br> EEA Admin comments :- ${payload.admin_comments}`
    }

    // else if(status==3)
    // {
    //      subject = `${payload.apply_by_name} has applied for OD for Date ${payload.od_date} and time ${payload.od_start_time} to ${payload.od_end_time}`
    //      output = emailTemplate.managerEmailTemplateOD(payload);
    // }

    // else if(status == 4)
    // {
    //     const leaveStatus = payload.od_status == 3 ? "Approved" : "Rejected"
    //     subject = `Your OD has been ${leaveStatus} for the date of ${payload.payloadData.od_date} and time ${payload.payloadData.od_start_time} to ${payload.payloadData.od_end_time}`
    //     output = `Hello User, <br><br>Your OD Application has ${leaveStatus} for the date of ${payload.payloadData.od_date} and time ${payload.payloadData.od_start_time} to ${payload.payloadData.od_end_time} by your manager <br>Comments From Manager :-  ${payload.send_to_comments}`
    // }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth: {
            user: "eeadev2023@gmail.com",
            pass: "mnlbydzwjsvytxwv", // this is app password  // this is tcm id password Saurabh@123
        },
        from: "eeadev2023@gmail.com"
    })
    message = {
        from: 'eeadev2023@gmail.com',
        to: email,
        subject: subject,
        html: output
    } 
    transporter.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
            return 0;
        } else {
            console.log('Email sent: ' + info.response);
            console.log(message.from ," ttt ", message.to);
            return 1;
        }
    });
}

module.exports = sendEmail;