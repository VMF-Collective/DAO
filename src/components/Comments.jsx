


export default function Comments (){

    const imgPath = "src/assets/imgs/";
    return (

        <>
                <h5 className="card-title mb-0 pt-4 border-top">Comments :</h5>
                  <ul className="media-list list-unstyled mb-4">
                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img src={imgPath + '/client/01.jpg' } className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                          </a>
                          <div className="commentor-detail">
                            <h6 className="mb-0"><a href="" className="text-dark media-heading">Lorenzo Peterson</a></h6>
                            <small className="text-muted">15th August, 2019 at 01:25 pm</small>
                          </div>
                        </div>
                        <a href="#" className="text-muted"><i className="mdi mdi-reply" /> Reply</a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                      </div>
                    </li>
                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img src={imgPath + '/client/02.jpg' } className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                          </a>
                          <div className="commentor-detail">
                            <h6 className="mb-0"><a href="" className="media-heading text-dark">Tammy Camacho</a></h6>
                            <small className="text-muted">15th August, 2019 at 05:44 pm</small>
                          </div>
                        </div>
                        <a href="#" className="text-muted"><i className="mdi mdi-reply" /> Reply</a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                      </div>
                    </li>
                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img src={imgPath + '/client/03.jpg' } className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                          </a>
                          <div className="commentor-detail">
                            <h6 className="mb-0"><a href="" className="media-heading text-dark">Tammy Camacho</a></h6>
                            <small className="text-muted">16th August, 2019 at 03:44 pm</small>
                          </div>
                        </div>
                        <a href="#" className="text-muted"><i className="mdi mdi-reply" /> Reply</a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                      </div>
                      <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                        <li className="mt-4">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <a className="pe-3" href="#">
                                <img src={imgPath + '/client/01.jpg' } className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                              </a>
                              <div className="commentor-detail">
                                <h6 className="mb-0"><a href="" className="text-dark media-heading">Lorenzo Peterson</a></h6>
                                <small className="text-muted">17th August, 2019 at 01:25 pm</small>
                              </div>
                            </div>
                            <a href="#" className="text-muted"><i className="mdi mdi-reply" /> Reply</a>
                          </div>
                          <div className="mt-3">
                            <p className="text-muted fst-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <h5 className="card-title mb-0 pt-4 border-top">Leave A Comment :</h5>
                  <form className="mt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3 position-relative">
                          <label className="form-label small fw-bold">Your Comment</label>
                          <textarea id="message" placeholder="Your Comment" rows={5} name="message" className="form-control" required defaultValue={""} />
                        </div>
                      </div>{/*end col*/}
                      <div className="col-lg-6">
                        <div className="mb-3 position-relative">
                          <label className="form-label small fw-bold">Name <span className="text-danger">*</span></label>
                          <input id="name" name="name" type="text" placeholder="Name" className="form-control" required />
                        </div>
                      </div>{/*end col*/}
                      <div className="col-lg-6">
                        <div className="mb-3 position-relative">
                          <label className="form-label small fw-bold">Your Email <span className="text-danger">*</span></label>
                          <input id="email" type="email" placeholder="Email" name="email" className="form-control" required />
                        </div>
                      </div>{/*end col*/}
                      <div className="col-md-12">
                        <div className="send text-end">
                          <button type="submit" className="btn btn-primary">Send Message</button>
                        </div>
                      </div>{/*end col*/}
                    </div>{/*end row*/}
                  </form>
        </>
    )

}
