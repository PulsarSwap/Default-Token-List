const { version } = require("../package.json");
const mainnet = require("./tokens/mainnet.json");
const ropsten = require("./tokens/ropsten.json");
const rinkeby = require("./tokens/rinkeby.json");
const goerli = require("./tokens/goerli.json");
const kovan = require("./tokens/kovan.json");
const polygon = require("./tokens/polygon.json");
const mumbai = require("./tokens/mumbai.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "Pulsar protocol List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "ipfs://QmYV5Hnzsw3XX6bJJFBZ88nF7xREy1Uwk124UbwTLW49yA",
    keywords: ["pulsar", "default"],
    tokens: [
      ...mainnet,
      ...ropsten,
      ...goerli,
      ...kovan,
      ...rinkeby,
      ...polygon,
      ...mumbai,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
