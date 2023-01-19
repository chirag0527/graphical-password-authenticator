import logo from './logo.svg';
import './App.css';
import './components/Modal'
import Modal from './components/Modal';
import { useState } from 'react';


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
const elements = shuffleArray([...Array(28).keys()]);

function App() {
  const [condition, setCondition] = useState(false)
  const [password, setPassword] = useState(false)
  const [selectedArray, setSelectedArray] = useState([]);


  const onClickHandle = (e) => {
    if(condition){
      setCondition(false)
    }else{
      setCondition(true)
    }
  }
  
  return (
    <>
    {condition ? <Modal checkPassword = {setPassword} elements = {elements} selectedArray = {selectedArray} setSelectedArray = {setSelectedArray}/> : ""}
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
                            id="logemail"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            id="logpass"
                            autoComplete="off"
                            onClick={onClickHandle}
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" className="btn mt-4">submit</a>
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
                            id="logemail"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <div
                            className= {password ? "form-style connected": "form-style"}
                            id="logpass"
                            onClick={onClickHandle}> {password ?  "Password added successfully !":"Click Here to set up Password"}</div>
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" className="btn mt-4" >submit</a>
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
