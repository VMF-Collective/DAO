
import { communityData } from "../constants/communityData.jsx";
import { ThirdwebNftMedia, useContract, useNFT, useContractMetadata } from '@thirdweb-dev/react';
import {NFT_CONTRACT_ADDRESS}  from "../constants/addresses.jsx";

export default function CommunityDetailsSideBar(){

  const NFT_CONTRACT_ADDRESS_IMPORT = NFT_CONTRACT_ADDRESS;
  const { contract } = useContract(NFT_CONTRACT_ADDRESS_IMPORT);
  const tokenId = 0;
  const { data: nft, isLoading } = useNFT(contract, tokenId);
  const { data: metadata, isLoading: loadingMetadata } = useContractMetadata(contract);
    return (
      <div>
        {!loadingMetadata && ( 
              <div>
              <h3>{metadata?.name}</h3>
              {metadata?.image}
             </div>
             ) 
             }

                <img src={communityData.img} alt="" />

                <div className="card-body">
                  <h5 className="card-title">
                    { communityData.name}
                  </h5>
                  <p className="card-text">
                  </p>
                </div>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Total Members:{communityData.members} </li>
                  <li className="list-group-item">Verified members: {communityData.verifiedMembers}</li>
                  <li className="list-group-item"> Proposals: {communityData.proposals}</li>
                  <li className="list-group-item">Total Proposals: {communityData.proposals}</li>
                  <li className="list-group-item">Projects: {communityData.projects}</li>
                </ul>
              <br />
      </div>

    )
}

        
