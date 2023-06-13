import Comments from "../components/Comments";
import { ThirdwebNftMedia, useContract, useNFT, useContractMetadata } from '@thirdweb-dev/react';
import { proposalData } from "../constants/proposalData";
import  CommunityDetailsSideBar  from "../components/CommunityDetailsSideBar";
// import { Voting } from "../components/Voting2";

import "../styles/proposalDetails.css"


export default function ProjectTemplate() {

  return (
    <>
      <div className="container mt-5 pt-5">
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
            <div className="proposalDetails--">
            <div className="proposalDetailsHeader">
            <h1>{ proposalData.title} </h1>
              </div>
            <div>Voting time </div>
            <div> Status: { proposalData.status} </div>
            <div>Budget: { proposalData.budget} </div>
            
            { proposalData.description}
            </div>
              {/* <img src="/src/assets/imgs/project.png" alt="" /> */}
             
              <section className="section">
        <div className="container">
          <div className="row justify-content-center">
              <div className="card blog-post border-0 rounded shadow overflow-hidden">
              <img src= {proposalData.image} alt="" className="img-fluid"/>
                {/* <img src="/src/themes/appgen/images/blog/single.jpg"  alt="" /> */}
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
                   <Comments />

{/*end form*/}
                </div>
              </div>
           {/*end col*/}
          </div>{/*end row*/}
        </div>{/*end container*/}
      </section>


            </div>
        </div>
      </div>

    </>
  );
}