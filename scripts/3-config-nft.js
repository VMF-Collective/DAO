import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x364f65C9309BCCC0998B7B8aEb9410FD26ead3f1", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "West End DAO Membership NFT",
        description: "This NFT will give you access to Village DAO for the West End Community ",
        image: readFileSync("scripts/assets/westend.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();