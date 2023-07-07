import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThirdwebProvider, magicLink } from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";
import { ChainId } from "@thirdweb-dev/sdk";

const activeChainId = ChainId.Mumbai;
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThirdwebProvider
      supportedChains={[Polygon]}
      desiredChainId={activeChainId}
      supportedWallets={[
        magicLink({
          apiKey: "pk_live_49806A265E858750",
        }),
      ]}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);
