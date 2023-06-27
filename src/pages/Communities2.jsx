import React, { useEffect, useState } from "react";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
// import { firebaseConfig } from "../constants/constants.jsx";
import AddCommunity from "../components/AddCommunity.jsx";

// Create a form to add a new community to firestore

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore();
// const comRef = collection(db, 'Communities');
// getDocs(comRef)
// .then((snapshot) => {
//   let communities = [];
//   snapshot.forEach((doc) => {
//     communities.push({...doc.data(), id: doc.id });
//   });
//   console.log(communities);
// })
// .catch((err) => console.log(err));

// addDoc(colRef, {
//   name: 'Community 1',
//   img: 'https://picsum.photos/200/300',
//   description: 'This is a community'
// })
// .then((docRef) => console.log(docRef))
// .catch((err) => console.log(err));

export default function Communities2() {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const getCommunities = async () => {
      const communitiesFromServer = await getDocs(comRef);

      setCommunities(
        communitiesFromServer.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    getCommunities();
  }, []);

  return (
    <>
      <section className="section" id="blog">
        <div className="container">
          <div className="row">
            <h1>All Communities</h1>
          </div>

          <div className="row">
            {communities.map((community) => (
              <React.Fragment key={community.id}>
                <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                  <div className="card blog-post border-0 rounded overflow-hidden shadow">
                    <img
                      src={community.img}
                      className="img-fluid"
                      alt="missing-image"
                    />
                    <div className="card-body p-4">
                      <h5 className="mb-3">
                        <a
                          href={`/communities/${community.slug}`}
                          className="text-dark title"
                        >
                          {community.name}
                        </a>
                      </h5>
                      <p className="text-muted">{community.description}</p>
                      <button
                        href={`/communities/${community.slug}`}
                        className="text-primary h6"
                      >
                        More Info
                        <i data-feather="arrow-right" className="fea icon-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}

            <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2">
              <AddCommunity />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul className="pagination justify-content-center mb-0">
                <li className="page-item">
                  <a className="page-link" href="" aria-label="Previous">
                    Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="" aria-label="Next">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
