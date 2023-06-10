import Comments from "../components/Comments";
import { ThirdwebNftMedia, useContract, useNFT, useContractMetadata } from '@thirdweb-dev/react';
import { proposalData } from "../constants/proposalData";
import  CommunityDetailsSideBar  from "../components/CommunityDetailsSideBar";
// import { Voting } from "../components/Voting2";

import "../styles/proposalDetails.css"


export default function ProjectTemplate() {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* Left Col - NFT/DAO Info  */}
          <div className="col-lg-4">
            <div className="card" >
              <CommunityDetailsSideBar />
              </div>
              {/*  2nd Card  */}
              <div className="card" >
                ( add voting component here )
              {/* <Voting /> */}
              </div>
              </div>
          {/* Right Col */}
          <div className="col-lg-8">
            <div className="proposalDetails">
            <div className="proposalDetailsHeader">
            <h1>{ proposalData.title} </h1>
              </div>
            <div>Voting time </div>
            <div> Status: { proposalData.status} </div>
            <div>Budget: { proposalData.budget} </div>
            <img src= {proposalData.image} alt="" />
            { proposalData.description}
            </div>
              {/* <img src="/src/assets/imgs/project.png" alt="" /> */}
              {/* <Comments /> */}
            </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card blog-post border-0 rounded shadow overflow-hidden">
                <img src="/src/themes/appgen/images/blog/single.jpg" className="img-fluid" alt="" />
                <div className="card-body p-4">
                  <div className="post-meta d-flex justify-content-between mb-4">
                    <ul className="list-unstyled mb-0">
                      <li className="list-inline-item me-2 mb-0"><a href="javascript:void(0)" className="text-muted like"><i data-feather="heart" className="fea icon-sm" /> 33</a></li>
                      <li className="list-inline-item"><a href="javascript:void(0)" className="text-muted comments"><i data-feather="message-circle" className="fea icon-sm" /> 08</a></li>
                    </ul>
                    <a href="javascript:void(0)" className="text-muted"><i data-feather="tag" className="fea icon-sm" /> Designing</a>
                  </div>
                  <p className="text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
                  <p className="text-muted mb-4">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                  <h5 className="card-title mb-0 pt-4 border-top">Comments :</h5>
                  <ul className="media-list list-unstyled mb-4">
                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img src="/src/themes/appgen/images/client/01.jpg" className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                          </a>
                          <div className="commentor-detail">
                            <h6 className="mb-0"><a href="javascript:void(0)" className="text-dark media-heading">Lorenzo Peterson</a></h6>
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
                            <img src="/src/themes/appgen/images/client/02.jpg" className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                          </a>
                          <div className="commentor-detail">
                            <h6 className="mb-0"><a href="javascript:void(0)" className="media-heading text-dark">Tammy Camacho</a></h6>
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
                            <img src="/src/themes/appgen/images/client/03.jpg" className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                          </a>
                          <div className="commentor-detail">
                            <h6 className="mb-0"><a href="javascript:void(0)" className="media-heading text-dark">Tammy Camacho</a></h6>
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
                                <img src="/src/themes/appgen/images/client/01.jpg" className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                              </a>
                              <div className="commentor-detail">
                                <h6 className="mb-0"><a href="javascript:void(0)" className="text-dark media-heading">Lorenzo Peterson</a></h6>
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
                  </form>{/*end form*/}
                </div>
              </div>
            </div>{/*end col*/}
          </div>{/*end row*/}
        </div>{/*end container*/}
      </section>
    </>
  );
}