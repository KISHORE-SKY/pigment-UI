import "./forms.css"
import SideBar from ".././navbar/sidebar"
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import  GoesTop  from "../../assets/components/topButton/top.jsx";
import { LuCopy } from "react-icons/lu";

function FormComponents() {

    const [loginUsername,setLoginUsername]=useState('');
    const [loginPassword,setLoginPassword]=useState('');
    const [loginErrorUser,setLoginErrorUser]=useState('');
    const [loginErrorPassword,setLoginErrorPassword]=useState('');
    const [typeInput,setType]=useState('password');
    const loginnamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;

    function loginShowPassword(){
        if(typeInput==="password"){
           setType('text');
        }
        else{
          setType('password');
        }
    }

    function loginUsernameHandler(event){
        setLoginUsername(event.target.value);
    }
    function loginUserNameCheck() {
        if(loginUsername===""){
            setLoginErrorUser('please enter username');
        }
        else if(!loginnamePattern.test(loginUsername)){
            setLoginErrorUser('please enter valid username');
        }
        else{
            setLoginErrorUser('');
        }
    }

    function loginPasswordHandler(event){
        setLoginPassword(event.target.value);
    }
    function loginPasswordCheck() {
        if(loginPassword===""){
            setLoginErrorPassword('please enter password');
        }
        else{
            setLoginErrorPassword('');
        }
    }

    function LoginHandler(event){
        event.preventDefault();
        loginUserNameCheck();
        loginPasswordCheck();
    }

    const [loginCopied,setLoginCopied]=useState({
        reactCopied:true,
        vennilaCopied:true,
        signupreact:true,
        signupVennila:true,
        loginTailwindCopy:true,
        signupTailwindCopy:true
    });
    async function copyLoginHandler(type,text) {
        try{
            await navigator.clipboard.writeText(text);
           
            setLoginCopied(prev=>({...prev,[type]:false}));
            setTimeout(()=>{
                setLoginCopied(prev=>({...prev,[type]:true}));
            },800)
        }
        catch(error){
            console.log(`couldn't fetch`);
        }
    }

    const loginPreCodesReact=`
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Login(){
    const [loginUsername,setLoginUsername]=useState('');
    const [loginPassword,setLoginPassword]=useState('');
    const [loginErrorUser,setLoginErrorUser]=useState('');
    const [loginErrorPassword,setLoginErrorPassword]=useState('');
    const [typeInput,setType]=useState('password');
    const loginnamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;

    function loginShowPassword(){
        if(typeInput==="password"){
           setType('text');
        }
        else{
          setType('password');
        }
    }

    function loginUsernameHandler(event){
        setLoginUsername(event.target.value);
    }
    function loginUserNameCheck() {
        if(loginUsername===""){
            setLoginErrorUser('please enter username');
        }
        else if(!loginnamePattern.test(loginUsername)){
            setLoginErrorUser('please enter valid username');
        }
        else{
            setLoginErrorUser('');
        }
    }

    function loginPasswordHandler(event){
        setLoginPassword(event.target.value);
    }
    function loginPasswordCheck() {
        if(loginPassword===""){
            setLoginErrorPassword('please enter password');
        }
        else{
            setLoginErrorPassword('');
        }
    }

    function LoginHandler(event){
        event.preventDefault();
        loginUserNameCheck();
        loginPasswordCheck();
    }

    return(
        <>
            <form className="loginForm">
                <div className="inputBox">                                
                <label htmlFor="logusername">Username:</label>
                    <div className="formInputs">
                        <input type="text" placeholder="username"
                        value={loginUsername}
                        onChange={loginUsernameHandler} id="logusername"/>
                        <RiUserFill />
                    </div>
                    <p className="formInputsnotDone"
                    >{loginErrorUser}</p>
                </div>

                <div className="inputBox">
                    <label htmlFor="logPassword">Password:</label>
                    <div className="formInputs">
                        <input type={typeInput} placeholder="password"
                        value={loginPassword}
                        onChange={loginPasswordHandler} id="logPassword"/>
                        <IoEyeSharp onClick={loginShowPassword}/>
                    </div>
                    <p className="formInputsnotDone">{loginErrorPassword}</p>
                </div>
                            
                <div>
                    <button className="formButtons" onClick={LoginHandler}>Login</button>
                </div>
            </form>
        </>
    );
}
export default Login;  

.loginForm{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center; 
    background-color: #F7F7F7;
    color: #0B0729; 
    padding: 20px;
    border-radius: 10px;
    width: 375px;
}
.inputBox{
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.formInputs{
    width: 275px;
    outline: none;
    border: none;
    height: 35px;
    border-radius: 5px;
    padding-inline: 9px;
    color: #0B0729;
}
.formInputs::placeholder{
    color: #0B0729;
}
.formInputsnotDone{
    color: red;
    height: 20px;
}
.formButtons{
    width: 75px;
    border: none;
    outline: none;
    height: 30px;
    background-color: #0B0729;
    color: #ffffff;
    border-radius: 5px;
    margin: 5px 0px 0px 0px;
    transition: all 0.3s ease-in-out;
}
.formButtons:hover{
    opacity: 0.9;
    cursor: pointer;
}
`;


    const vennilaLoginCode=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="login.css">
    <link rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" 
    integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
     crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.loginFormSection{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    padding: 15px;
}
.formHeading{
    color: #0B0729;
}
.loginForm{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center; 
    background-color: #F7F7F7;
    color: #0B0729; 
    padding: 20px;
    border-radius: 10px;
    width: 375px;
    box-shadow: 3px 3px 10px 1px rgba(0,0,0,0.2);
}
.inputBox{
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.formInputs{
    width: 275px;
    outline: none;
    border: none;
    height: 35px;
    border-radius: 5px;
    padding: 9px;
    color: #0B0729;
    background-color: #fff;
    display: flex;
    align-items: center;
}
.formInputs input{
    border: none;
    outline: none;
    width: 270px;
}
.formInputs.input::placeholder{
    color: #0B0729;
}
.formButtons{
    width: 75px;
    border: none;
    outline: none;
    height: 30px;
    background-color: #0B0729;
    color: #fff;
    border-radius: 5px;
    margin: 5px 0px 0px 0px;
    transition: all 0.3s ease-in-out;
}
.formButtons:hover{
    opacity: 0.9;
    cursor: pointer;
}
.formInputsnotDone{
    color: red;
    height: 20px;
}
</style>
<body>
    <section class="loginFormSection">
        <h3 class="formHeading">Login</h3>
        <form class="loginForm">
            <div class="inputBox">
                <label for="loginusername">Username:</label>
                <div class="formInputs">
                    <input type="text" placeholder="enter username" 
                    id="loginusername">
                    <i class="fa-solid fa-user"></i>
                </div>
                
                <p class="formInputsnotDone" id="username-message"></p>
            </div>

            <div class="inputBox">
                <label for="loginPassword">Password:</label>
                <div  class="formInputs">
                    <input type="password" placeholder="enter password" 
                    id="loginPassword">
                    <i class="fa-solid fa-eye"></i>
                </div>
               
                <p class="formInputsnotDone" id="password-message"></p>
            </div>

            <div>
                <button class="formButtons" id="login-button" 
                onclick="loginValidation(event)">Login</button>
            </div>
        </form>
    </section>
</body>

<script>
const usernameInput=document.getElementById('loginusername');
const passwordInput=document.getElementById('loginPassword');
const errorMessageUsername=document.getElementById('username-message');
const errorMessagePassword=document.getElementById('password-message');
const submitButton=document.getElementById('login-button');
const usernamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;
const showPassword=document.querySelector('.fa-eye');

function usernameValidation(){
    if(usernameInput.value===""){
        errorMessageUsername.textContent='please enter username';
    }
    else if(!usernamePattern.test(usernameInput.value)){
        errorMessageUsername.textContent='enter valid username';
    }
    else{
        errorMessageUsername.textContent='';
    }
}
function passwordValidation() {
    if(passwordInput.value===""){
        errorMessagePassword.textContent='please enter Password';
    }
    else{
        errorMessagePassword.textContent='';
    }
}
showPassword.addEventListener('click',()=>{
    if(passwordInput.type==='password'){
        passwordInput.type='text'
    }
    else{
        passwordInput.type='password'
    }
})
function loginValidation(event){
    event.preventDefault();
    usernameValidation();
    passwordValidation();
}

</script>
</html>

    `;


    const [signUpusername,setSignupUsername]=useState('');
    const [signupPassword,setSignupPassword]=useState('');
    const [signupEmail,setSignupEmail]=useState('');
    const [confirmSignup,setConfirmSignUp]=useState('');

    const [signupErrorMessage,setSignupErrorMessage]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const signupEmailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const signupusernamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;

    function signupUsernameHandler(event){
        setSignupUsername(event.target.value);
    }
   
    function signupusernameCheck() {
        if(signUpusername===""){
            setSignupErrorMessage(prev=>({
                ...prev,username:'please Enter username'}));
        }
        else if(!signupusernamePattern.test(signUpusername)){
            setSignupErrorMessage(prev=>({
                ...prev,username:'Caps,nums,sml,_,-  only allowed'}));
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev,username:''}));
        }
    }

    function signupEmailHandler(event){
        setSignupEmail(event.target.value);
    }
    function signUpemailCheck(){
        if(signupEmail===""){
            setSignupErrorMessage(prev=>({
                ...prev,email:'please enter email'}));
        }
        else if(!signupEmailPattern.test(signupEmail)){
            setSignupErrorMessage(prev=>({
                ...prev,email:'enter valid email'}));
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev,email:''}));
        }
    }

    function signupPasswordHandler(event){
        setSignupPassword(event.target.value);
    }
    function signupPasswordValid(){
        if(signupPassword===""){
            setSignupErrorMessage(prev=>({
                ...prev,password:'please enter password'}));
        }
        else if(signupPassword.length<8){
            setSignupErrorMessage(prev=>({
                ...prev,password:'your password is weak'}));
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev,password:''}));
        }
    }

    function signupConfirmHandle(event){
        setConfirmSignUp(event.target.value);
    }
    function confirmPasswordValid() {
        if(confirmSignup===""){
            setSignupErrorMessage(prev=>({
                ...prev,confirmPassword:'please render to confirm password'}));
        }
        else if(confirmSignup !== signupPassword){
             setSignupErrorMessage(prev=>({
                ...prev,confirmPassword:`password is didn't match`}));
        }
        else{
             setSignupErrorMessage(prev=>({
                ...prev,confirmPassword:''}));
        }
    }

    const [firstPasswordType,setFirstPasswordType]=useState("password");
    function signupShowPassword(){
        if(firstPasswordType==="password"){
           setFirstPasswordType('text');
        }
        else{
            setFirstPasswordType('password');
        }
    }

    const [confirmPasswordShow,setConfirmPasswordShow]=useState("password")
    function signupConfirmShowPassword(){
        if(confirmPasswordShow==="password"){
            setConfirmPasswordShow('text');
        }
        else{
            setConfirmPasswordShow('password');
        }
    }

     
    function SignUpValidation(event) {
        event.preventDefault();
     
        signupusernameCheck();
        signUpemailCheck();
        signupPasswordValid();
        confirmPasswordValid();
    }


    const signupReactCode=`
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function SignupForm(){
    const [signUpusername,setSignupUsername]=useState('');
    const [signupPassword,setSignupPassword]=useState('');
    const [signupEmail,setSignupEmail]=useState('');
    const [confirmSignup,setConfirmSignUp]=useState('');
    const [signupErrorMessage,setSignupErrorMessage]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const signupEmailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const signupusernamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;

    function signupUsernameHandler(event){
        setSignupUsername(event.target.value);
    }
   
    function signupusernameCheck() {
        if(signUpusername===""){
            setSignupErrorMessage(prev=>({
                ...prev,username:'please Enter username'}));
        }
        else if(!signupusernamePattern.test(signUpusername)){
            setSignupErrorMessage(prev=>({
                ...prev,username:'Caps,nums,sml,_,-  only allowed'}));
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev,username:''}));
        }
    }

    function signupEmailHandler(event){
        setSignupEmail(event.target.value);
    }
    function signUpemailCheck(){
        if(signupEmail===""){
            setSignupErrorMessage(prev=>({
                ...prev,email:'please enter email'}));
        }
        else if(!signupEmailPattern.test(signupEmail)){
            setSignupErrorMessage(prev=>({
                ...prev,email:'enter valid email'}));
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev,email:''}));
        }
    }

    function signupPasswordHandler(event){
        setSignupPassword(event.target.value);
    }
    function signupPasswordValid(){
        if(signupPassword===""){
            setSignupErrorMessage(prev=>({
                ...prev,password:'please enter password'}));
        }
        else if(signupPassword.length<8){
            setSignupErrorMessage(prev=>({
                ...prev,password:'your password is weak'}));
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev,password:''}));
        }
    }

    function signupConfirmHandle(event){
        setConfirmSignUp(event.target.value);
    }
    function confirmPasswordValid() {
        if(confirmSignup===""){
            setSignupErrorMessage(prev=>({
                ...prev,confirmPassword:'please render to confirm password'}));
        }
        else if(confirmSignup !== signupPassword){
             setSignupErrorMessage(prev=>({
                ...prev,confirmPassword:'password is did not match'}));
        }
        else{
             setSignupErrorMessage(prev=>({
                ...prev,confirmPassword:''}));
        }
    }
    
    const [firstPasswordType,setFirstPasswordType]=useState("password");
    function signupShowPassword(){
        if(firstPasswordType==="password"){
           setFirstPasswordType('text');
        }
        else{
            setFirstPasswordType('password');
        }
    }

    const [confirmPasswordShow,setConfirmPasswordShow]=useState("password")
    function signupConfirmShowPassword(){
        if(confirmPasswordShow==="password"){
            setConfirmPasswordShow('text');
        }
        else{
            setConfirmPasswordShow('password');
        }
    }

    function SignUpValidation(event) {
        event.preventDefault();
     
        signupusernameCheck();
        signUpemailCheck();
        signupPasswordValid();
        confirmPasswordValid();
    }

    return(
        <>
            <form className="loginForm">
                <div className="inputBox">
                    <label htmlFor="name">Username:</label>
                    <div className="formInputs">
                        <input type="text" placeholder="Username"  
                        id="name" value={signUpusername} onChange={signupUsernameHandler}/>
                        <RiUserFill />
                    </div>
                    <p className="formInputsnotDone">{signupErrorMessage.username}</p>
                </div>

                <div className="inputBox">
                    <label htmlFor="email">Email:</label>
                    <div className="formInputs">
                        <input type="email" placeholder="Email"  
                        id="email" value={signupEmail} onChange={signupEmailHandler}/>
                        <MdEmail />
                    </div>
                    <p className="formInputsnotDone">{signupErrorMessage.email}</p>
                </div>
                            
                <div className="inputBox">
                    <label htmlFor="passwords">Password:</label>
                    <div className="formInputs" >
                        <input type={firstPasswordType} placeholder="Password" 
                        id="passwords" value={signupPassword} onChange={signupPasswordHandler}/>
                        <IoEyeSharp onClick={signupShowPassword}/>
                    </div>
                    <p className="formInputsnotDone">{signupErrorMessage.password}</p>
                </div>

                <div className="inputBox">
                    <label htmlFor="confirm">Confirm Password:</label>
                    <div className="formInputs" >
                        <input type={confirmPasswordShow} placeholder="Confirm password" 
                        id="confirm" value={confirmSignup} onChange={signupConfirmHandle}/>
                        <IoEyeSharp onClick={signupConfirmShowPassword}/>
                    </div>
                    <p className="formInputsnotDone">{signupErrorMessage.confirmPassword}</p>
                </div>

                <div className="conditions">
                    <input type="checkbox" name="termsCondition" required/>
                    <label htmlFor="termsCondition">
                        I agree to the Terms & Privacy Policy
                    </label>
                </div>

                <div>
                    <button className="formButtons" onClick={SignUpValidation}>Sign Up</button>
                </div>
                            
            </form>  
        </>
    );
}
export default SignupForm;


.loginForm{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center; 
    background-color: #F7F7F7;
    color: #0B0729; 
    padding: 20px;
    border-radius: 10px;
    width: 375px;
}
.inputBox{
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.formInputs{
    width: 275px;
    outline: none;
    border: none;
    height: 35px;
    border-radius: 5px;
    padding-inline: 9px;
    color: #0B0729;
}
.formInputs::placeholder{
    color: #0B0729;
}
.formButtons{
    width: 75px;
    border: none;
    outline: none;
    height: 30px;
    background-color: #0B0729;
    color: #fff;
    border-radius: 5px;
    margin: 5px 0px 0px 0px;
    transition: all 0.3s ease-in-out;
}
.formButtons:hover{
    opacity: 0.9;
    cursor: pointer;
}
.formInputsnotDone{
    color: red;
    height: 20px;
}
.conditions{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 50px;
}
.conditions input{
    accent-color: #0B0729;
    cursor: pointer;
}
`;

const signupjscode=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
    <link rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" 
    integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
     crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<style>
    
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.loginFormSection{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    padding: 15px;
}
.formHeading{
    color: #0B0729;
}
.loginForm{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center; 
    background-color: #F7F7F7;
    color: #0B0729;; 
    padding: 20px;
    border-radius: 10px;
    width: 375px;
    box-shadow: 3px 3px 10px 1px rgba(0,0,0,0.2);
}
.inputBox{
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.formInputs{
    width: 275px;
    outline: none;
    border: none;
    height: 35px;
    border-radius: 5px;
    padding: 9px;
    color: #0B0729;;
    display: flex;
    align-items: center;
    background-color: #fff;
}
.formInputs input{
    border: none;
    outline: none;
    width: 270px;
}
.formInputs input::placeholder{
    color: #0B0729;;
}
.formButtons{
    width: 75px;
    border: none;
    outline: none;
    height: 30px;
    background-color: #0B0729;;
    color: #fff;
    border-radius: 5px;
    margin: 5px 0px 0px 0px;
    transition: all 0.3s ease-in-out;
}
.formButtons:hover{
    opacity: 0.9;
    cursor: pointer;
}
.formInputsnotDone{
    color: red;
    height: 20px;
}
</style>

<body>
    <section class="loginFormSection">
        <h3 class="formHeading">Signup</h3>
        <form class="loginForm">
            <div class="inputBox">
                <label for="signup-username">Username:</label>
                <div class="formInputs">
                     <input type="text" placeholder="enter 
                     username" id="signup-username">
                    <i class="fa-solid fa-user"></i>
                </div>
               
                <p class="formInputsnotDone" id="usernameError"></p>
            </div>

            <div class="inputBox">
                <label for="signup-email">Email:</label>
                <div class="formInputs">
                    <input type="email" placeholder="enter email"
                     id="signup-email">
                    <i class="fa-solid fa-at"></i>   
                </div>
                
                <p class="formInputsnotDone" id="emailError"></p>
            </div>

            <div class="inputBox">
                <label for="signup-password">Password:</label>
                <div class="formInputs">
                    <input type="password" placeholder="enter 
                    password" id="signup-password">
                    <i class="fa-solid fa-eye show-paswd"></i>
                </div>
                
                <p class="formInputsnotDone" id="passwordError"></p>
            </div>

            <div class="inputBox">
                <label for="signup-confirm">Confirm Password:</label>
                <div class="formInputs">
                    <input type="password" placeholder="confirm password" 
                    id="signup-confirm">
                    <i class="fa-solid fa-eye" id="confirm-icon"></i>
                </div>
                
                <p class="formInputsnotDone" id="confirm-error"></p>
            </div>

            <div>
                <button type="submit" id="signup-submit" 
                onclick="signupValidation(event)" 
                class="formButtons">Signup</button>
            </div>
        </form>
    </section>
</body>

<script>
    const signupUsername=document.getElementById('signup-username');
    const signupEmail=document.getElementById('signup-email');
    const signupPassword=document.getElementById('signup-password');
    const signupConfirm=document.getElementById('signup-confirm');
    const submitButton=document.getElementById('signup-submit');
    const usernameMessage=document.getElementById('usernameError');
    const emailMessage=document.getElementById('emailError');
    const passwordMessage=document.getElementById('passwordError');
    const confirmMessage=document.getElementById('confirm-error');
    const usernamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;
    const signupEmailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const confirmShow=document.getElementById('confirm-icon');
    const showPassword=document.querySelector('.show-paswd');

    function usernameValidate(){
        if(signupUsername.value===""){
            usernameMessage.textContent='please enter username';
        }
        else if(!usernamePattern.test(signupUsername.value)){
            usernameMessage.textContent='alps,nums,-_ only allowed';
        }
        else{
            usernameMessage.textContent='';
        }
    }
     function emailValidate(){
        if(signupEmail.value===""){
            emailMessage.textContent='please enter email';
        }
        else if(!signupEmailPattern.test(signupEmail.value)){
            emailMessage.textContent='enter valid email';
        }
        else{
            emailMessage.textContent='';
        }
    }
     function passwordValidate(){
        if(signupPassword.value===""){
            passwordMessage.textContent='please enter password';
        }
        else if(signupPassword.value.length<8){
            passwordMessage.textContent='your password is weak';
        }
        else{
            passwordMessage.textContent='';
        }
    }
     function confirmValidate(){
        if(signupConfirm.value===""){
            confirmMessage.textContent='please re-enter password';
        }
        else if(signupPassword.value != signupConfirm.value){
            confirmMessage.textContent='possword did not match';
        }
        else{
            confirmMessage.textContent='';
        }
    }
    showPassword.addEventListener('click',()=>{
        if (signupPassword.type==='password') {
            signupPassword.type='text';
        } else {
            signupPassword.type='password';
        }
    })
    confirmShow.addEventListener('click',()=>{
        if (signupConfirm.type==='password') {
            signupConfirm.type='text';
        } else {
            signupConfirm.type='password';
        }
    })
    function signupValidation(event) {
        event.preventDefault();
        usernameValidate();
        emailValidate();
        passwordValidate();
        confirmValidate();
    }

</script>
</html>
`;

const loginTailwindCodes=`
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Login(){
    const [loginUsername,setLoginUsername]=useState('');
    const [loginPassword,setLoginPassword]=useState('');
    const [loginErrorUser,setLoginErrorUser]=useState('');
    const [loginErrorPassword,setLoginErrorPassword]=useState('');
    const [typeInput,setType]=useState('password');
    const loginnamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;

    function loginShowPassword(){
        if(typeInput==="password"){
           setType('text');
        }
        else{
          setType('password');
        }
    }

    function loginUsernameHandler(event){
        setLoginUsername(event.target.value);
    }
    function loginUserNameCheck() {
        if(loginUsername===""){
            setLoginErrorUser('please enter username');
        }
        else if(!loginnamePattern.test(loginUsername)){
            setLoginErrorUser('please enter valid username');
        }
        else{
            setLoginErrorUser('');
        }
    }

    function loginPasswordHandler(event){
        setLoginPassword(event.target.value);
    }
    function loginPasswordCheck() {
        if(loginPassword===""){
            setLoginErrorPassword('please enter password');
        }
        else{
            setLoginErrorPassword('');
        }
    }

    function LoginHandler(event){
        event.preventDefault();
        loginUserNameCheck();
        loginPasswordCheck();
    }

    return(
        <>
            <form className="flex flex-col gap-[10px] items-center bg-[#F7F7F7] text-[#0B0729] p-[20px] rounded-[10px] w-[375px]">
                <div className="flex flex-col gap-[4px]">                                
                <label htmlFor="logusername">Username:</label>
                    <div className="w-[275px] h-[37px] flex items-center rounded-[5px] text-[#0B0729] 
                    ">
                        <input type="text" placeholder="username"
                        value={loginUsername}
                        onChange={loginUsernameHandler} id="logusername" classname="placeholder-[#0B0729]  px-[9px] w-[265px] h-[35px] border-none outline-none"/>
                        <RiUserFill />
                    </div>
                    <p className="text-red-600 h-[20px]"
                    >{loginErrorUser}</p>
                </div>

                <div className="flex flex-col gap-[10px] align-center bg-[#F7F7F7] text-[#0B0729] p-[20px] rounded-[10px] w-[375px]">
                    <label htmlFor="logPassword">Password:</label>
                    <div className="w-[275px] h-[35px] rounded-[5px] text-[#0B0729] flex items-center">
                        <input type={typeInput} placeholder="password"
                        value={loginPassword}
                        onChange={loginPasswordHandler} id="logPassword" classname="placeholder-[#0B0729] px-[9px] w-[265px] h-[35px] border-none outline-none"/>
                        <IoEyeSharp onClick={loginShowPassword}/>
                    </div>
                    <p className="text-red-600 h-[20px]">{loginErrorPassword}</p>
                </div>
                            
                <div>
                    <button className="w-[75px] h-[30px] border-none outline-none bg-[#0B0729] text-[#fff] rounded-[5px] 
                    transition duration-300 ease-in-out hover:opacity-[0.9] cursor-pointer" 
                    onClick={LoginHandler}>Login</button>
                </div>
            </form>
        </>
    );
}
export default Login;  

`;
const signupTailwindCodes=`
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function SignupForm(){
    const [signUpusername,setSignupUsername]=useState('');
    const [signupPassword,setSignupPassword]=useState('');
    const [signupEmail,setSignupEmail]=useState('');
    const [confirmSignup,setConfirmSignUp]=useState('');
    const [signupErrorMessage,setSignupErrorMessage]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const signupEmailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const signupusernamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;

    function signupUsernameHandler(event){
        setSignupUsername(event.target.value);
    }
   
    function signupusernameCheck() {
        if(signUpusername===""){
            setSignupErrorMessage(prev=>({
                ...prev,username:'please Enter username'}));
        }
        else if(!signupusernamePattern.test(signUpusername)){
            setSignupErrorMessage(prev=>({
                ...prev,username:'Caps,nums,sml,_,-  only allowed'}));
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev,username:''}));
        }
    }

    function signupEmailHandler(event){
        setSignupEmail(event.target.value);
    }
    function signUpemailCheck(){
        if(signupEmail===""){
            setSignupErrorMessage(prev=>({
                ...prev,email:'please enter email'}));
        }
        else if(!signupEmailPattern.test(signupEmail)){
            setSignupErrorMessage(prev=>({
                ...prev,email:'enter valid email'}));
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev,email:''}));
        }
    }

    function signupPasswordHandler(event){
        setSignupPassword(event.target.value);
    }
    function signupPasswordValid(){
        if(signupPassword===""){
            setSignupErrorMessage(prev=>({
                ...prev,password:'please enter password'}));
        }
        else if(signupPassword.length<8){
            setSignupErrorMessage(prev=>({
                ...prev,password:'your password is weak'}));
        }
        else{
            setSignupErrorMessage(prev=>({
                ...prev,password:''}));
        }
    }

    function signupConfirmHandle(event){
        setConfirmSignUp(event.target.value);
    }
    function confirmPasswordValid() {
        if(confirmSignup===""){
            setSignupErrorMessage(prev=>({
                ...prev,confirmPassword:'please render to confirm password'}));
        }
        else if(confirmSignup !== signupPassword){
             setSignupErrorMessage(prev=>({
                ...prev,confirmPassword:'password is did not match'}));
        }
        else{
             setSignupErrorMessage(prev=>({
                ...prev,confirmPassword:''}));
        }
    }

    const [firstPasswordType,setFirstPasswordType]=useState("password");
    function signupShowPassword(){
        if(firstPasswordType==="password"){
           setFirstPasswordType('text');
        }
        else{
            setFirstPasswordType('password');
        }
    }

    const [confirmPasswordShow,setConfirmPasswordShow]=useState("password")
    function signupConfirmShowPassword(){
        if(confirmPasswordShow==="password"){
            setConfirmPasswordShow('text');
        }
        else{
            setConfirmPasswordShow('password');
        }
    }

    function SignUpValidation(event) {
        event.preventDefault();
     
        signupusernameCheck();
        signUpemailCheck();
        signupPasswordValid();
        confirmPasswordValid();
    }

    return(
        <>
            <form className="flex flex-col gap-[10px] align-center bg-[#F7F7F7] text-[#0B0729] p-[20px] rounded-[10px] w-[375px]">
                <div className="flex flex-col gap-[4px]">
                    <label htmlFor="name">Username:</label>
                    <div className="w-[275px] h-[35px] rounded-[5px] text-[#0B0729] flex items-center">
                        <input type="text" placeholder="Username"  
                        id="name" value={signUpusername} onChange={signupUsernameHandler} classname="placeholder-[#0B0729] px-[9px] w-[265px] h-[35px] border-none outline-none"/>
                        <RiUserFill />
                    </div>
                    <p className="text-red-600 h-[20px]">{signupErrorMessage.username}</p>
                </div>

                <div className="flex flex-col gap-[4px]">
                    <label htmlFor="email">Email:</label>
                    <div className="w-[275px] h-[35px] rounded-[5px] text-[#0B0729] flex items-center">
                        <input type="email" placeholder="Email"  
                        id="email" value={signupEmail} onChange={signupEmailHandler} classname="placeholder-[#0B0729] px-[9px] w-[265px] h-[35px] border-none outline-none"/>
                        <MdEmail />
                    </div>
                    <p className="text-red-600 h-[20px]">{signupErrorMessage.email}</p>
                </div>
                            
                <div className="flex flex-col gap-[4px]">
                    <label htmlFor="passwords">Password:</label>
                    <div className="w-[275px] h-[35px] rounded-[5px] text-[#0B0729] flex items-center" >
                        <input type={firstPasswordType} placeholder="Password" 
                        id="passwords" value={signupPassword} onChange={signupPasswordHandler} classname="placeholder-[#0B0729] px-[9px] w-[265px] h-[35px] border-none outline-none"/>
                        <IoEyeSharp onClick={signupShowPassword}/>
                    </div>
                    <p className="text-red-600 h-[20px]">{signupErrorMessage.password}</p>
                </div>

                <div className="flex flex-col gap-[4px]">
                    <label htmlFor="confirm">Confirm Password:</label>
                    <div className="w-[275px] h-[35px] rounded-[5px] text-[#0B0729] flex items-center" >
                        <input type={confirmPasswordShow} placeholder="Confirm password" 
                        id="confirm" value={confirmSignup} onChange={signupConfirmHandle} classname="placeholder-[#0B0729] px-[9px] w-[265px] h-[35px] border-none outline-none"/>
                        <IoEyeSharp onClick={signupConfirmShowPassword}/>
                    </div>
                    <p className="text-red-600 h-[20px]">{signupErrorMessage.confirmPassword}</p>
                </div>

                <div className="flex justify-start align-center mr-[50px]">
                    <input type="checkbox" name="termsCondition" className="cursor-pointer accent-[#0B0729]" required/>
                    <label htmlFor="termsCondition" className="text-md">
                        I agree to the Terms & Privacy Policy
                    </label>
                </div>

                <div>
                    <button className="w-[75px] h-[30px] border-none outline-none bg-[#0B0729] 
                    text-[#fff] rounded-[5px] transition duration-300 ease-in-out hover:opacity-[0.9] cursor-pointer" 
		            onClick={SignUpValidation}>Sign Up</button>
                </div>
                            
            </form>  
        </>
    );
}

export default SignupForm;

`;
    

   
    const [loginReactDivision,setLoginReactDivision]=useState('yesOpen');
    const [signupReactDivision,setSignupReactDivision]=useState('yesOpen');
    const [loginJs,setLoginJs]=useState('noOpen');
    const [signupJsState,setSignupJsState]=useState('noOpen');
    const [loginTailwind,setLoginTailwind]=useState('noOpen');
    const [signupTailwind,setSignupTailwind]=useState('noOpen');

    function reactLogincodeHandler() {
        setLoginReactDivision('yesOpen');
        setLoginJs('noOpen');
        setLoginTailwind('noOpen')
    }
    function signupreactCondition() {
       setSignupReactDivision('yesOpen')
       setSignupJsState('noOpen')
       setSignupTailwind('noOpen');
    }
    function loginJsHandler() {
        setLoginJs('yesOpen')
        setLoginReactDivision('noOpen')
        setLoginTailwind('noOpen')
    }
    function signupJsHandler() {
        setSignupJsState('yesOpen')
        setSignupReactDivision('noOpen')
        setSignupTailwind('noOpen')
    }
    function loginTailwindHandler(){
        setLoginTailwind('yesOpen')
        setLoginJs('noOpen')
        setLoginReactDivision('noOpen')
    }
    function signupTailwindHandler() {
        setSignupTailwind('yesOpen')
        setSignupReactDivision('noOpen')
        setSignupJsState('noOpen')
    }

    return(
        <>
            <section className="formMainSection">

                <div className="formSidebar">
                    <SideBar />
                </div>

                <div className="wholeFormSection">

                    <div className="loginFormSection">
                        <h3 className="formHeading">Login Form Component</h3>

                        <form className="loginForm">
                            <div className="inputBox">
                                <label htmlFor="logusername">Username:</label>
                                <div className="formInputs">
                                    <input type="text" placeholder="username"
                                     value={loginUsername}
                                    onChange={loginUsernameHandler} id="logusername"/>
                                    <RiUserFill />
                                </div>

                                <p className="formInputsnotDone"
                                >{loginErrorUser}</p>
                            </div>

                            <div className="inputBox">
                                <label htmlFor="logPassword">Password:</label>
                                <div className="formInputs">
                                    <input type={typeInput} placeholder="password"
                                     value={loginPassword}
                                    onChange={loginPasswordHandler} id="logPassword"/>
                                    <IoEyeSharp onClick={loginShowPassword}/>
                                </div>
                                <p className="formInputsnotDone">{loginErrorPassword}</p>
                            </div>
                            
                            <div>
                                <button className="formButtons" onClick={LoginHandler}>Login</button>
                            </div>
                        </form>

                        <div className="loginPreviewCode">
                            <h3 className="formHeading">Login Form Codes</h3>
                
                            <div className="loginDivisions">
                                <div className="divisionDecide">
                                    <button className={loginReactDivision==='yesOpen' ? "buttonClicked" : "buttonnotClicked"} 
                                    onClick={reactLogincodeHandler}>React js</button>
                                    <button className={loginJs==='yesOpen' ? "buttonClicked" : "buttonnotClicked"}
                                    onClick={loginJsHandler}>javaScript</button>
                                    <button className={loginTailwind==='yesOpen' ? "buttonClicked" : "buttonnotClicked"}
                                    onClick={loginTailwindHandler}>Tailwind Css</button>
                                </div>

                                {loginReactDivision==='yesOpen' && <div className="reactJsLogin">
                                    <div className="copyMessageSection">
                                        {loginCopied.reactCopied ? <LuCopy className= "formnotCopied" 
                                        onClick={()=>{copyLoginHandler('reactCopied',loginPreCodesReact)}}/> :
                                       <p className="codeCopied">Copied</p>}
                                    </div>

                                    <pre className="loginreactpre">
                                        <p>{loginPreCodesReact}</p>
                                    </pre>
                                </div>}
 
                                {loginJs==='yesOpen' && <div className="vannilaJsLoginCode">
                                    <div className="copyMessageSection">
                                        {loginCopied.vennilaCopied ? <LuCopy className="formnotCopied"
                                        onClick={()=>{copyLoginHandler('vennilaCopied',vennilaLoginCode)}}/> :
                                        <p className="codeCopied">Copied</p>}
                                    </div>

                                    <pre className="loginreactpre">
                                        <p>{vennilaLoginCode}</p>
                                    </pre>
                                </div>}

                                {loginTailwind==='yesOpen' && <div className="vannilaJsLoginCode">
                                    <div className="copyMessageSection">
                                        {loginCopied.loginTailwindCopy ? <LuCopy className="formnotCopied"
                                        onClick={()=>{copyLoginHandler('loginTailwindCopy',loginTailwindCodes)}}/> :
                                        <p className="codeCopied">Copied</p>}
                                    </div>

                                    <pre className="loginreactpre">
                                        <p>{loginTailwindCodes}</p>
                                    </pre>
                                </div>}

                            </div>
                        </div>
                    </div>

                    <div className="signupSection">
                        <h3 className="formHeading">SignUp Form Component</h3>

                        <form className="loginForm">
                            <div className="inputBox">
                                <label htmlFor="name">Username:</label>
                                <div className="formInputs">
                                    <input type="text" placeholder="Username"  
                                    id="name" value={signUpusername} onChange={signupUsernameHandler}/>
                                    <RiUserFill />
                                </div>
                                <p className="formInputsnotDone">{signupErrorMessage.username}</p>
                            </div>

                            <div className="inputBox">
                                <label htmlFor="email">Email:</label>
                                <div className="formInputs">
                                    <input type="email" placeholder="Email"  
                                    id="email" value={signupEmail} onChange={signupEmailHandler}/>
                                    <MdEmail />
                                </div>

                                <p className="formInputsnotDone">{signupErrorMessage.email}</p>
                            </div>
                            
                            <div className="inputBox">
                                <label htmlFor="passwords">Password:</label>
                                <div className="formInputs" >
                                    <input type={firstPasswordType} placeholder="Password" 
                                    id="passwords" value={signupPassword} onChange={signupPasswordHandler}/>
                                    <IoEyeSharp onClick={signupShowPassword}/>
                                </div>

                                <p className="formInputsnotDone">{signupErrorMessage.password}</p>
                            </div>

                            <div className="inputBox">
                                <label htmlFor="confirm">Confirm Password:</label>
                                <div className="formInputs" >
                                    <input type={confirmPasswordShow} placeholder="Confirm password" 
                                    id="confirm" value={confirmSignup} onChange={signupConfirmHandle}/>
                                     <IoEyeSharp onClick={signupConfirmShowPassword}/>
                                </div>
                                <p className="formInputsnotDone">{signupErrorMessage.confirmPassword}</p>
                            </div>

                            <div className="conditions">
                                <input type="checkbox" name="termsCondition" required/>
                                <label htmlFor="termsCondition">
                                    I agree to the Terms & Privacy Policy
                                </label>
                            </div>

                            <div>
                                <button className="formButtons" onClick={SignUpValidation}>Sign Up</button>
                            </div>
                            
                        </form>

                        <div className="loginPreviewCode">

                            <div className="signUpPreview">
                                <h3 className="formHeading">SignUp Form Codes</h3>
                                
                                <div className="loginDivisions">

                                    <div className="divisionDecide">
                                        <button className={signupReactDivision==='yesOpen' ? "buttonClicked" : "buttonnotClicked"} 
                                        onClick={signupreactCondition}>React js</button>
                                        <button className={signupJsState==='yesOpen' ? "buttonClicked" : "buttonnotClicked"} 
                                        onClick={signupJsHandler}>javaScript</button>
                                        <button className={signupTailwind==='yesOpen' ? "buttonClicked" : "buttonnotClicked"}
                                        onClick={signupTailwindHandler}>Tailwind Css</button>
                                    </div>

                                {signupReactDivision==='yesOpen' && <div className="signUpreactPreview">
                                    <div className="copiedMessage">
                                        {loginCopied.signupreact ? <LuCopy onClick={()=>{copyLoginHandler('signupreact',signupReactCode)}}
                                        className="formnotCopied"/> :
                                        <p className="codeCopied">Copied</p>}
                                    </div>

                                    <pre className="loginreactpre">
                                        <p>{signupReactCode}</p>
                                    </pre>
                                </div>}

                                {signupJsState==='yesOpen' && <div className="signupvennilaPreview">
                                    <div className="copiedMessage">
                                        {loginCopied.signupVennila ? <LuCopy onClick={()=>{copyLoginHandler('signupVennila',signupjscode)}}
                                        className="formnotCopied"/> :
                                        <p className="codeCopied">Copied</p>}
                                    </div>
                                    <pre className="loginreactpre">
                                        <p>{signupjscode}</p>
                                    </pre>
                               </div>}

                               {signupTailwind==='yesOpen' && <div className="signupvennilaPreview">
                                    <div className="copiedMessage">
                                        {loginCopied.signupTailwindCopy ? <LuCopy onClick={()=>{copyLoginHandler('signupTailwindCopy',signupTailwindCodes)}}
                                        className="formnotCopied"/> :
                                        <p className="codeCopied">Copied</p>}
                                    </div>
                                    <pre className="loginreactpre">
                                        <p>{signupTailwindCodes}</p>
                                    </pre>
                               </div>}

                                </div> 
                            </div>
                        </div>
                    </div>
                    <GoesTop />
                </div>
            </section>
        </>
    );
}

export default FormComponents;