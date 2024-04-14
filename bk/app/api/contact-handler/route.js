// import { NextResponse } from "next/server"
// import nodeMailer from "nodemailer"

// export async function POST(request) {
//     const reqBody = await request.json()
//     const { email, name, message } = reqBody

//     try{
//         const transporter = nodeMailer.createTransport({
//             host: "smtp-mail.outlook.com",          
//             port: 587,
//             secure: false,
//             auth: {
//                 user: "",          
//                 pass: ""                    
//             }
//         })
    
//         const mailOptions = {
//             from: "My website",
//             to: "",
//             subject: "Next.jsコンタクトページ",
//             text: `名前: ${name} \n\nメールアドレス: ${email} \n\nメッセージ: ${message}`
//         }
    
//         const info = await transporter.sendMail(mailOptions)
//         return NextResponse.json({message: "成功しました"})
//     }catch(err){
//         return NextResponse.json({message: "失敗しました"})
//     }
// }