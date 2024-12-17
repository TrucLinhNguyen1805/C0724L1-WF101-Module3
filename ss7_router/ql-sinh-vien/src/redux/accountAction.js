// account = {
//     username: "",
//     password: "",
//     role: ""
// }
export function checkLogin(account){
    return{
        type: "LOGIN",
        payload: account
    }
}