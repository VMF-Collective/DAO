

export default function AddCommunity() {

  return (
    <form className="login-form">
    <div className="row">
      <div className="col-12">
      <div className="mb-3">                                               
          <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Create a Community</label>
      
        </div>
        <div className="mb-3">                                               
          <label className="form-label small fw-bold">Community Name <span className="text-danger">*</span></label>
          <input type="text" className="form-control" name="s" required placeholder="Community Name:" />
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
          <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
            <label className="form-check-label small fw-bold" htmlFor="flexCheckDefault">I Accept <a href="#" className="text-primary">Terms And Condition</a></label>
          </div>
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary w-100">Create Community</button>
      </div>
    </div>
    </form>

    )
}