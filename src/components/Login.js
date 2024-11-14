import React from 'react';
import "../App.css";
import logo from '../assets/FYG_Logos.png';

const title = {
    color: "#202258", 
    
    fontWeight: 1000,
    fontFamily: "Alfa Slab One, serif",
    fontSize: "40px", 
    fontStyle: "normal"
};

const requirement = {
    color:"#929292", 
    fontSize:"16px"
};

function Login() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img  src={logo} style={{ width:"100px " }}/>
                        <span style={title}>FIND YOUR GEEK</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input type="email" id="formid" className="form-control form-control-lg" style={{border:"3px solid #93bfb7"}} />
                        <label className="form-label" htmlFor="formid" style={requirement}>Email address</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="formpassword" className="form-control form-control-lg" style={{border:"3px solid #93bfb7"}}/>
                        <label className="form-label" htmlFor="formpassword" style={requirement}>Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="loginbutton" type="button" >
                          Login
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">Forgot password?</a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account? <a href="#!" style={{ color: "#393f81" }}>Register here</a>
                      </p>
                      <a href="#!" className="small text-muted">Terms of use.</a>
                      <a href="#!" className="small text-muted">Privacy policy</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
