import logo from './logo.svg';
import './App.css';
import './components/Modal'
import Modal from './components/Modal';
import { useEffect, useState } from 'react';

import postData from './utils/postData';
import getData from './utils/getData';
import sha256 from './utils/hashing';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) { 
  
  // Generate random number 
  var j = Math.floor(Math.random() * (i + 1));
  
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  }
  
  return array;
}
const elementsSignUp = shuffleArray([...Array(28).keys()]);
const elementsLogin= shuffleArray([...Array(28).keys()]);

function App() {
  const [signupSubmitButton, setSignupSubmitButton] = useState(false)
  const [loginSubmitButton, setLoginSubmitButton] = useState(false)

  const [conditionSignUp, setConditionSignUp] = useState(false)
  const [conditionLogin, setConditionLogin] = useState(false)
  const [signUpPassword, setSignUpPassword] = useState(false)
  const [loginPassword, setLoginPassword] = useState(false)

  const [selectedArraySignUp, setSelectedArraySignUp] = useState([]);
  const [selectedArrayLogin, setSelectedArrayLogin] = useState([]);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const[loginEmail, setLoginEmail] = useState("")


  const onClickHandleSignup = (e) => {
    if(conditionSignUp){
      setConditionSignUp(false)
    }else{
      setConditionSignUp(true)
    }
  }
  
  const onClickHandleLogin= (e) => {
    if(conditionSignUp){
      setConditionLogin(false)
    }else{
      setConditionLogin(true)
    }
  }
  
  useEffect(()=>{
    if(name === "" || email === "" || selectedArraySignUp.length === 0){
      setSignupSubmitButton(false)
    }else{
      setSignupSubmitButton(true)
    }

  },[name,email,selectedArraySignUp])

  useEffect(()=>{
    if(loginEmail === "" || selectedArrayLogin.length === 0){
      setLoginSubmitButton(false)
    }else{
      setLoginSubmitButton(true)
    }
  },[loginEmail,selectedArrayLogin])
  return (
    <>
    

    {conditionSignUp ? <Modal disappearFucntion = {setConditionSignUp} checkPassword = {setSignUpPassword} elements = {elementsSignUp} selectedArray = {selectedArraySignUp} setSelectedArray = {setSelectedArraySignUp}/> : ""}
    {conditionLogin ? <Modal disappearFucntion = {setConditionLogin} checkPassword = {setLoginPassword} elements = {elementsLogin} selectedArray = {selectedArrayLogin} setSelectedArray = {setSelectedArrayLogin}/> : ""}
     <div className="section">
      <div className="container">

        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In </span><span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                          <input
                            type="email"
                            name="logemail"
                            className="form-style"
                            placeholder="Your Email"
                            value={loginEmail}
                            onChange={(e)=>{setLoginEmail(e.target.value)}}
                            id="logemail"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                        <div
                            className= {loginPassword ? "form-style connected": "form-style"}
                            id="logpass"
                            onClick={onClickHandleLogin}> {loginPassword ?  "Password added successfully !":"Click Here to set up Password"}</div>
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" className={`btn mt-4 ${!loginSubmitButton ? "disabled": ""}`} 
                          onClick={() => {
                            sha256(selectedArrayLogin.join(''))
                                .then((data) => {
                                getData(loginEmail, data);
                              })
                              .catch();
                            }}>submit</a>
                        <p className="mb-0 mt-4 text-center">
                          <a href="#0" className="link">Forgot your password?</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <div className="form-group">
                          <input
                            type="text"
                            name="logname"
                            className="form-style"
                            placeholder="Your Full Name"
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                            id="logname"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-user"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="email"
                            name="logemail"
                            className="form-style"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            id="logemail"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <div
                            className= {signUpPassword ? "form-style connected": "form-style"}
                            id="logpass"
                            //onFocus={()=>{console.log("Modal Selected")}}
                            //onBlur ={()=>{console.log("Modal DeSelected")}}
                            onClick={onClickHandleSignup}
                            >
                            {signUpPassword ?  "Password added successfully !":"Click Here to set up Password"}</div>
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        
                          <a href="/" className={`btn mt-4 ${!signupSubmitButton ? "disabled": ""}`}onClick={() =>{
                             sha256(selectedArraySignUp.join(''))
                             .then((data) => {
                               postData(email, data);
                             })
                             .catch();
                          }} >submit</a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
