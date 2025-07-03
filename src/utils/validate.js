export const checkValidData = (email, password, name=null)=>{
const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
// const isNameValid = /^[A-Z][a-z]+(\s[A-Z][a-z]?){0,}/.test(name);
const isNameValid = name === null || name.trim() === ""
    ? true
    : /^[A-Z][a-z]+(\s[A-Z][a-z]?){0,}/.test(name);

if(!isEmailValid) return "Email ID is not valid";
if(!isPasswordValid) return "Password is not valid";
if(!isNameValid) return "Name is not valid";

return null;

};