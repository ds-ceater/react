// "use client"
// import { useState } from "react" 
// import '../styles/style.scss'

// const Contact = () => {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [message, setMessage] = useState("")

//     const handleSubmit = async(e) => {
//         e.preventDefault()  
//         try{
//             const response = await fetch("http://localhost:3000/api/contact-handler", {
//                 method: "POST",
//                 headers: { 
//                     "Accept": "application/json", 
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     name: name,
//                     email: email,
//                     message: message
//                 })
//             })
//             const jsonData = await response.json()
//             alert("メッセージを送信しました")
//         }catch(err){
//             alert("メッセージの送信が失敗しました")
//         }
//     }
//     return (
//         <div className="contact">
//             <h1>コンタクト</h1>
//             <form className="contact_form">
//                 <input className="contact_name" type="text" placeholder="お名前" required/>
//                 <input className="contact_address" type="text" placeholder="メールアドレス" required/>
//                 <textarea className="contact_message" type="text" placeholder="メッセージ" rows="10" required></textarea>
//                 <button  className="contact_button" type="submit">送信</button>
//             </form> 
//         </div>
//     )
// }

// export default Contact