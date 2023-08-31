import React, { useState } from 'react';
import './LoginForm.css'

const SignUpForm = ({ closeModal, switchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const[name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    closeModal();
  };

 

  return (
    <div>

     <div class="card">
      
         <div class="row g-1">
          
     
             <div class="col custom-widthh" style={{width:"258px"}}> 
             <div class="h-100 d-flex justify-content-center align-items-center">
                 <div class="py-4 px-3"> 
                 <form onSubmit={handleSubmit}>
                 <h4><u>REGISTER</u></h4>
                 
                 <div class="row g-2 mt-1">
                  
                   <div class="col-md-12"> 
                 <div class="input-field"> 

                 <input class="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} id="input1" required/>
                  <label for="input1">Name</label>
                   </div> </div> 
                   
                   
                     
                     </div>


                      <div class="row mt-2"> 
                     <div class="col-md-12"> <div class="input-field">
                         <input class="form-control" id="input3" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                          <label for="input3">Email</label> </div> 
                          </div> </div> <div class="row mt-2 mb-2"> 
                          <div class="col-md-12"> <div class="input-field">
                             <input class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="Password" id="input4" required/> 
                             <label for="input4">Password</label> </div> </div> 
                             </div> 
                             <div class="row mt-2 mb-2"> 

                          <div class="col-md-12"> <div class="input-field">
                             <input class="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} id="input5" required/> 
                             <label for="input5">Mobile Number</label> </div> </div> 
                             </div> 
                             <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>

                                                 
         <span style={{fontSize: "13px", color:"white"}} >
        dj</span>
         <span style={{fontSize: "13px"}} >
         I agree to be contacted by 99acres for similar properties or related services via WhatsApp & e-mail.</span>
        
     
                             <div class="row mt-2"> <div class="col-md-12"> <button class="btn btn-primary w-100 signup-button" type='submit'>SIGN UP</button> 
                             </div> </div> </form><div class="member mt-1">
                                 <span>Already a member?</span> <span className="switch-link" onClick={switchToLogin} style={{color
                                : 'blue'}}><u>Sign in here.</u>
        </span>
                                  </div> </div> </div> </div> 
                                  <div class="col-md-6 custom-width" style={{width:"260px"}} > <div class="right-side-content" style={{width: "260px"}}>
                                     <div class="content d-flex flex-column" style = {{ marginTop: "-180px"}} >
                                     <h1>99acres</h1>
                                      <h6>Create an account to <br/>unlock these benefits </h6> 

                                     <ul typeof='circle'>
                                      
                                      <li>Get latest updates about Properties and Projects.</li>
                                      <li>Access millions of advertiser details in one click.</li>
                                      <li>Get market information, reports and price trends.</li>
                                      <li>Advertise your property for free!</li>
                                      
                                      

                                     </ul>
                                     
                                    
                                     </div>
                                      </div> </div> 
                                             </div> </div> 

    </div>
  );
};

export default SignUpForm;