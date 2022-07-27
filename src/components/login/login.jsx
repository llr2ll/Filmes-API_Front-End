import React from 'react';
import './login.css';
import Context from '../context';

function Login() {

  let {modal,setModal} = React.useContext(Context);
  
  function toggle() {
    setModal(current => !current)
  }
  
  return (
    <main className={modal ? 'showModal' : 'hideModal'}>
      <div className='login'>
          <button onClick={toggle} className="close-login">X</button>        
          <div className="main-login">
              
                <div className="card-login">  
                      <h1>Login</h1>
                      <div className="textfield">
                          <label>User</label>
                          <input type="text" className="user" placeholder="user" required/>        
                      </div>
                      <div className="textfield">
                          <label>Password</label>
                          <input type="password" className="password" placeholder="Password" required/>
                      </div>   
                          <button type='submit' className="btn-login">Login</button>     
                </div>  
          </div>
      </div>
    </main>
  );
}

export default Login;