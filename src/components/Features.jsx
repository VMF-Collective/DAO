import { ConnectWallet } from '@thirdweb-dev/react';



export default function Features(){
  const imgPath = "/assets/imgs/";
    return (
      <>
      <section className="section" id="service">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="title mb-4">How is Works</h4>
              <p className="para-desc mx-auto text-muted mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="feature position-relative text-center">
              <div className="p-4 rounded position-relative overflow-hidden">
                <div className="icon text-primary">
                  <i className="uim uim-download-alt" />
                  <img src={imgPath + '/shape-1.png'} className="avatar avatar-small icon-shape" alt="" />
                </div>
                <div className="content mt-4">
                  <h5><a href="" className="title text-dark"> {imgPath}Create Account</a></h5>
                  <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance</p>
                  <a href="" className="text-primary">Read More <i data-feather="chevron-right" className="fea icon-sm" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="feature position-relative text-center">
              <div className="p-4 rounded position-relative overflow-hidden">
                <div className="icon text-primary">
                  <i className="uim uim-unlock-alt" />
                  <img src={imgPath + '/shape-1.png'} className="avatar avatar-small icon-shape" alt="" />
                </div>
                <div className="content mt-4">
                  <h5><a href="" className="title text-dark">Join Community</a></h5>
                  <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance</p>
                  <a href="" className="text-primary">Read More <i data-feather="chevron-right" className="fea icon-sm" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div className="feature position-relative text-center">
              <div className="p-4 rounded position-relative overflow-hidden">
                <div className="icon text-primary">
                  <i className="uim uim-chart" />
                  <img src={imgPath + '/shape-1.png'} className="avatar avatar-small icon-shape" alt="" />
                </div>
                <div className="content mt-4">
                <h5><a href="" className="title text-dark">Vote on Proposals</a></h5>
                  <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance</p>
                  <a href="" className="text-primary">Read More <i data-feather="chevron-right" className="fea icon-sm" /></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className="section bg-light">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="feature position-relative">
            <img src={imgPath + '/saas/features-1.png'} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div className="section-title ms-lg-5">
            <h5 className="title mb-4">Perfect Solution for <br /> Your Dashboard</h5>
            <p className="text-muted para-desc">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
            <div className="mt-4 pt-2">
              <a href="" className="btn btn-primary">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="position-relative">
    <div className="shape overflow-hidden text-white">
      <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
      </svg>
    </div>
  </div>

  {/* Downloads  */}
  <section className="section" id="download">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <img src={imgPath + '/app/mobile-2.png'} className="img-fluid d-block mx-auto" alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title">
                <div className="alert alert-light alert-pills" role="alert">
                  <span className="badge bg-dark rounded-pill me-1">Apps</span>
                  <span className="content">Download now <i data-feather="chevron-right" className="fea icon-sm" /></span>
                </div>
                <h4 className="title mb-4 mt-2">Available for your <br /> Smartphones</h4>
                <p className="text-muted para-desc mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className="mt-4 mb-4">
                  <a href="" className="btn btn-pills btn-lg btn-primary mt-2 me-2"><i className="mdi mdi-apple" /> App Store</a>
                  <a href="" className="btn btn-pills btn-lg btn-primary mt-2"><i className="mdi mdi-google-play" /> Play Store</a>
                </div>
                <div className="d-inline-block">
                  <div className="pt-4 d-flex align-items-center border-top">
                    <i data-feather="smartphone" className="fea icon-md me-2 text-primary" />
                    <div className="content">
                      <p className="mb-0">Install app now on your cellphones</p>
                      <a href="" className="text-primary small">Learn More <i className="mdi mdi-arrow-right" /></a> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
    )

}
