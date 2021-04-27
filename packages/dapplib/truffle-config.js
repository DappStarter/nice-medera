require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hover enrich sun food stone rate noise equip coral light army gift'; 
let testAccounts = [
"0x78dd1ab0c4e981cd8d457cb9222de5df5d6731fff17eb34bf6ed40e58274d691",
"0xed1f0afdd6ca4dea0a6f53a5b35ae1008972e3777831f5ff34a0100199aac24f",
"0x41d3c84fc0ff6a35612ea56ac1328fb3989117864e0e864d9ea0cebce2596fff",
"0x9626f7404870401fb9eef7ae40bc9158f9831cb4533ed2ba437a9fa55ba5d188",
"0xbb603dfd0c40348a48bc221a0778be41d0fe54c6bdf900fee0d30602b449d869",
"0x5dddbe3b1e6efdd7b9d853d415277e7698406a596554b203f675fca90aa6e618",
"0xb5afc2387596b84422faca761376563b6e70c28ab359da8bf6dd0cdcb8ab52c2",
"0x689ddebd1513ab0f15c045cfd5f8469111057ca65849d6ff6237e88be4953252",
"0x165c8bd62e261514a01c3a54645aad61f6b2a71b14ae43657802700c0858ef52",
"0x05b2bcb63ed27b88c2c4f0388afbfb8b680596ed1b9adabeb78aa1f20a562328"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

