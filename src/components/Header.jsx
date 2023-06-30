import { ConnectWallet } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";

export default function Header() {
  const imgPath = "/assets/imgs/";
  return (
    <section className="bg-half-170 d-table w-100 overflow-hidden" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-6">
            <div className="title-heading">
              <div className="alert alert-light alert-pills" role="alert">
                <Link
                  to="dashboard"
                  className="badge bg-primary rounded-pill me-1"
                >
                  Dashboard
                </Link>
                <span className="content text-muted"> VMF Collective</span>
              </div>
              <h1 className="heading mb-3">Community DAO</h1>
              <p className="para-desc text-muted">
                ith this DAO, philanthropic organizations can give the money
                directly to a fund that residents have direct access to so that
                they can vote on their goals, priorities, metrics, and service
                providers, all while being able to automate data tracking and
                provide live feedback.
              </p>
              <div className="mt-4">
                <a href="" className="btn btn-pills btn-primary">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="dashboard-shape-two app-image-fluid">
              <img src={imgPath + "dao-laptop.png"} alt="" />
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
      {/*end container*/}
    </section>
  );
}
