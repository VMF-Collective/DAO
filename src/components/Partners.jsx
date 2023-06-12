import { ConnectWallet } from '@thirdweb-dev/react';



export default function Partners(){
    const imgPath = '/assets/imgs/';
    
    return (
<section className="py-4 border-top border-bottom position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-2 col-6 text-center py-4">
              <img src={imgPath + 'client/amazon.svg'} className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center py-4">
              <img src={imgPath + 'client/google.svg'}  className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center py-4">
              <img src={imgPath + 'client/lenovo.svg'}  className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center py-4">
              <img src={imgPath + 'client/paypal.svg'}  className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center py-4">
              <img src={imgPath + 'client/shopify.svg'}  className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center py-4">
              <img src={imgPath + 'client/spotify.svg'} className="avatar avatar-ex-sm" alt="" />
            </div>
          </div>
        </div>
      </section>
    )

}
