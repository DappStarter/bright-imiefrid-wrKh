require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift regret remember coach grid nation flip genuine'; 
let testAccounts = [
"0xb9da728d0e00fcc09dd7ecec985eaba9b61e4ca3f2a70afb4fe6cd8ba5b77e26",
"0x7c319f4b8a03b507c1784888e1761ebaa552d36b31b585584b660b68c3fbe826",
"0x7765c989323f2f55cf8e2e27f73395e04f5ed82e3ce42ff8fc1708b889546d1c",
"0xf66b0c3f0e3d7568d5380ec008d751432db6d1ce648a0102b1c20b145d65b47e",
"0x381d661dfa4b70ea90f6416f699fdc34902c751795ff065b1f9d0ba7f45774c7",
"0x687b49526a231a29f513f48ab4c31a68edeac10b5a537f77cc3e4d187f680eba",
"0x5258ed03aa1854efe920968c3beeb27b639e80dcfe02ed1547a77845a4349edd",
"0xd64352eeb66e526bd15ef63b018da501ba7b845f6332dcc3e35d974a85978654",
"0x6a6fa8564b52c17d6c97704dbda212d391757d0a27a8c0ca35bf9f392f7cb679",
"0xa01823e7c28185bd1ead16f30d488d2c7ec5688d04dea1953a06ef370aa2c734"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


