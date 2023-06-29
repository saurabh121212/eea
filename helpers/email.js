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
         subject = `Eswatini Environment Authority – Plastic Return Filing System -
         Registration Request Received`
        // output = `<b> Dear User, </b></b> Thank you for registering with Eswatini Environment Authority’s plastic return filing system. <br> Your request is currently under review. We will send you a confirmation email once it is approved by EEA’s system admin. <br></b> Please use the following credentials to log into the system once your registration is approved: <br></b> Email ID - ${email} <br> Password - ${payload} <b> Regards,</b> <br>EEA System Admin <br>For any issues, please contact: <br>Eswatini Environment Authority <br> RHUS Office Park <br> Karl Grant Street <br> Mbabane <br> Eswatini`;    
         output = emailTemplate.ragistrationEmail(payload,email);
    }
    else if(status == 2)
    {
        const RTRStatus = payload.approval_status == 2 ? "Approved" : "Rejected"
        // subject = `EEA RTR Status ${leaveStatus}`
        // output = `Hello EEA User <br><br> Your RTR application has bean ${leaveStatus}. <br> EEA Admin comments :- ${payload.admin_comments}`
       
        if(payload.approval_status == 2)
        {
            subject = `Eswatini Environment Authority – Plastic Return Filing System – Plastic Return ${RTRStatus}`
            output = emailTemplate.RTRApprovedEmailTemplate(payload);
        }
        else if(payload.approval_status == 3)
        {
            subject = `Eswatini Environment Authority – Plastic Return Filing System – Plastic Return ${RTRStatus}`
            output = emailTemplate.RTRRejectedEmailTemplate(payload);
        }

    }
    else if(status == 3)
    {
        const userAprovelStatus = payload.approval_status == 2 ? "Approved" : "Rejected"
        if (payload.approval_status == 2)
        {
            subject = `Eswatini Environment Authority – Plastic Return Filing System - Registration Request ${userAprovelStatus}`
            output = emailTemplate.userApprovedEmailTemplate(payload);
        }
        else if (payload.approval_status == 3)
        {
            subject = `Eswatini Environment Authority – Plastic Return Filing System - Registration Request ${userAprovelStatus}`
            output = emailTemplate.userRejectedEmailTemplate(payload);
        }
        
        //output = `Hello EEA User <br><br> Your Ragistration application has been ${userAprovelStatus}.`
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
    
    // }output = emailTemplate.managerEmailTemplate(payload);

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