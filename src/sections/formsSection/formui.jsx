import "./forms.css"
import SideBar from ".././navbar/sidebar"
import { useState } from "react";
import { LuCopy } from "react-icons/lu";
import { IoEyeSharp } from "react-icons/io5";
import { RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function FormComponents() {

    const [loginUsername,setLoginUsername]=useState('');
    const [loginPassword,setLoginPassword]=useState('');
    const [loginErrorUser,setLoginErrorUser]=useState('');
    const [loginErrorPassword,setLoginErrorPassword]=useState('');
    const [typeInput,setType]=useState('password');
    const loginnamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;

    function loginShowPassword(){
        if(typeInput==="password"){
           setType('text')
        }
        else{
          setType('password')
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
        reactCopied:false,
        vennilaCopied:false,
        signupreact:false,
        signupVennila:false
    });
    async function copyLoginHandler(type,text) {
        try{
            await navigator.clipboard.writeText(text);
           
            setLoginCopied(prev=>({...prev,[type]:false}));
            setTimeout(()=>{
                setLoginCopied(prev=>({...prev,[type]:true}));
            },700)
        }
        catch(error){
            console.log(`couldn't fetch`);
        }
    }

    const [loginReactDivision,setLoginReactDivision]=useState('reactLogin');
    const [signupReactDivision,setSignupReactDivision]=useState('reactSignup');
    const [signupJsDivision,setSignupJsDivision]=useState('signupJs');

    function reactLogincodeHandler() {
        if(loginReactDivision==='reactLogin'){
            setLoginReactDivision('jsLogin'); 
        }
        else{
            setLoginReactDivision('reactLogin');
        }
    }
    function signupreactCondition() {
        if(signupReactDivision==='reactSignup'){
            setSignupReactDivision('signupJs');
        }
        else{
            setSignupReactDivision('reactSignup');
        }
    }
    

    const loginPreCodesReact=`
function Login(){
    const [loginUsername,setLoginUsername]=useState('');
    const [loginPassword,setLoginPassword]=useState('');
    const [loginErrorUser,setLoginErrorUser]=useState('');
    const [loginErrorPassword,setLoginErrorPassword]=useState('');
    const [typeInput,setType]=useState('password');
    const loginnamePattern=/^[a-zA-Z0-9](?:[a-zA-Z0-9._-]{1,18}[a-zA-Z0-9])$/;

    function loginShowPassword(){
        if(typeInput==="password"){
           setType('text')
        }
        else{
          setType('password')
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
    background-color: rgb(35, 34, 92);
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
;
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

     
    function SignUpValidation(event) {
        event.preventDefault();
     
        signupusernameCheck();
        signUpemailCheck();
        signupPasswordValid();
        confirmPasswordValid();
    }


    const signupReactCode=`

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
                        <input type="password" placeholder="Password" 
                        id="passwords" value={signupPassword} onChange={signupPasswordHandler}/>
                        <IoEyeSharp />
                    </div>
                    <p className="formInputsnotDone">{signupErrorMessage.password}</p>
                </div>

                <div className="inputBox">
                    <label htmlFor="confirm">Confirm Password:</label>
                    <div className="formInputs" >
                        <input type="password" placeholder="Confirm password" 
                        id="confirm" value={confirmSignup} onChange={signupConfirmHandle}/>
                        <IoEyeSharp />
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
    background-color: rgb(35, 34, 92);
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
    accent-color: var(--LightBgColor);
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
    

    const [buttonClicked,setButtonClicked]=useState({
        loginreact:true,
        loginJs:false,
        signupreact:true,
        signupJs:false
    })
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
                                {/* className={isloginDone.password ? "formInputsDone" : "formInputsnotDone" } */}
                            </div>
                            
                            <div>
                                <button className="formButtons" onClick={LoginHandler}>Login</button>
                            </div>
                        </form>

                        <div className="loginPreviewCode">
                            <h3 className="formHeading">Login Form Codes</h3>
                
                            <div className="loginDivisions">
                                <div className="divisionDecide">
                                    <button className={loginReactDivision==='reactLogin' ? "buttonClicked" : "reactButton"} onClick={reactLogincodeHandler}>React js</button>
                                    <button className={loginReactDivision==='jsLogin' ? "buttonClicked" : "jsButton"} onClick={reactLogincodeHandler}>javaScript</button>
                                </div>

                                {loginReactDivision==='reactLogin' && <div className="reactJsLogin">
                                    <div className="copiedMessage">
                                        <LuCopy className={!loginCopied.reactCopied ? "formnotCopied" :  "formCopyicon"}
                                        onClick={()=>{copyLoginHandler('reactCopied',loginPreCodesReact)}}/>
                                        {loginCopied.reactCopied && <p>Copied</p>}
                                    </div>

                                    <pre className="loginreactpre">
                                        <p>{loginPreCodesReact}</p>
                                    </pre>
                                </div>}
 
                                {loginReactDivision==='jsLogin' && <div className="vannilaJsLoginCode">
                                    <div className="copiedMessage">
                                        <LuCopy className={!loginCopied.vennilaCopied ? "formnotCopied" :  "formCopyicon"}
                                        onClick={()=>{copyLoginHandler('vennilaCopied',vennilaLoginCode)}}/>
                                        {loginCopied.vennilaCopied && <p>Copied</p>}
                                    </div>

                                    <pre className="loginreactpre">
                                        <p>{vennilaLoginCode}</p>
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
                                    <input type="password" placeholder="Password" 
                                    id="passwords" value={signupPassword} onChange={signupPasswordHandler}/>
                                    <IoEyeSharp />
                                </div>

                                <p className="formInputsnotDone">{signupErrorMessage.password}</p>
                            </div>

                            <div className="inputBox">
                                <label htmlFor="confirm">Confirm Password:</label>
                                <div className="formInputs" >
                                    <input type="password" placeholder="Confirm password" 
                                    id="confirm" value={confirmSignup} onChange={signupConfirmHandle}/>
                                     <IoEyeSharp />
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
                                        <button className={signupReactDivision==='reactSignup' ? "buttonClicked" : "reactButton"} onClick={signupreactCondition}>React js</button>
                                        <button className={signupReactDivision==='signupJs' ? "buttonClicked" : "jsButton"} onClick={signupreactCondition}>javaScript</button>
                                    </div>

                                {signupReactDivision==='reactSignup' && <div className="signUpreactPreview">
                                    <div className="copiedMessage">
                                        <LuCopy onClick={()=>{copyLoginHandler('signupreact',signupReactCode)}}
                                        className={!loginCopied.signupreact ? "formnotCopied" : "formCopyicon"}/>
                                            {loginCopied.signupreact && <p>Copied</p>}
                                    </div>

                                    <pre className="loginreactpre">
                                        <p>{signupReactCode}</p>
                                    </pre>
                                    </div>}

                                    {signupReactDivision==='signupJs' && <div className="signupvennilaPreview">
                                        <div className="copiedMessage">
                                            <LuCopy onClick={()=>{copyLoginHandler('signupVennila',signupjscode)}}
                                            className={!loginCopied.signupVennila ? "formnotCopied" : "formCopyicon"}/>
                                            {loginCopied.signupVennila && <p>Copied</p>}
                                        </div>
                                        <pre className="loginreactpre">
                                            <p>{signupjscode}</p>
                                        </pre>
                                    </div>}

                                </div> 
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default FormComponents;