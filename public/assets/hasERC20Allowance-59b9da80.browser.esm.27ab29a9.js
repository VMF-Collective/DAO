import{C as c,ac as d}from"./index.6c2c4609.js";async function w(a,e,n){const r=a.getProvider(),t=new c(r,e,d,{}),s=await a.getSignerAddress(),o=a.readContract.address;return(await t.readContract.allowance(s,o)).gte(n)}export{w as h};
//# sourceMappingURL=hasERC20Allowance-59b9da80.browser.esm.27ab29a9.js.map
