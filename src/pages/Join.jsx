// start new file
export default function Join() {
  return (
    <>
 <section className="bg-user-home user-pages d-flex align-items-center">
        <div className="bg-overlay bg-overlay-white" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="text-center">
                <a href="">
                  <img src="images/logo-dark.png" height={25} alt="" />
                </a>
              </div>
              <div className="login-page bg-white shadow-lg rounded p-4 mt-4 position-relative">
                <div className="text-center">
                  <h5 className="mb-4 pb-2">Join a Community</h5>  
                </div>
                <form className="login-form">
                  <div className="row">
                    <div className="col-12">
                    <div className="mb-3">                                               
                        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Pick Your Community</label>
                        <select className="my-1 mr-sm-2 form-control" id="inlineFormCustomSelectPref">
                          <option selected>Select your Community</option>
                          <option value="1">Westend</option>
                          <option value="2">Legacy Park     </option>
                          <option value="3">Not Listed</option>
                        </select>
                      </div>
                      <div className="mb-3">                                               
                        <label className="form-label small fw-bold">First name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" name="s" required placeholder="First Name :" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label small fw-bold">Your Email <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" name="email" required placeholder="Your Email :" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label small fw-bold">Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" required placeholder="Password :" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label small fw-bold">Confirm Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" required placeholder="Confirm Password :" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                          <label className="form-check-label small fw-bold" htmlFor="flexCheckDefault">I Accept <a href="#" className="text-primary">Terms And Condition</a></label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100">Register</button>
                    </div>
                    <div className="col-12 mt-4 text-center">
                      <h6>Or Signup With</h6>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-sm-6 mt-4">
                          <a href="#" className="btn w-100 btn-light"><i className="mdi mdi-facebook text-primary" /> Facebook</a>
                        </div>
                        <div className="col-sm-6 mt-4">
                          <a href="#" className="btn w-100 btn-light"><i className="mdi mdi-google text-danger" /> Google</a>
                        </div>
                      </div>
                    </div>{/*end col*/}
                    <div className="mx-auto">
                      <p className="mb-0 mt-3"><small className="text-dark me-2">Already have an account ?</small> <a href="login.html" className="text-dark fw-bold">Sign in</a></p>
                    </div>
                  </div>
                </form>
              </div>{/*end login*/}
            </div>{/*end col*/}
          </div>{/*end row*/}
        </div> 
      </section>

    </>



  );
  
}