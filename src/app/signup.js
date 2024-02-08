// // src/app/signup.js
//
// import React, { useState } from "react";
//
// const SignupPage = () => {
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");
//
//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };
//
//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         // サインアップ処理を実行するためのAPIリクエストをここに追加する
//     };
//
//     return (
//         <div>
//             <h1>Signup Page</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         value={name}
//                         onChange={handleNameChange}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                     />
//                 </div>
//                 <button type="submit">Signup</button>
//             </form>
//         </div>
//     );
// };
//
// export default SignupPage;
