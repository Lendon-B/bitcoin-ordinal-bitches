import {
  isInstalled,
  getAddresses,
  signPsbt,
  signMessage,
} from "@ordzaar/ordit-sdk/xverse";

export const connectToXverseWallet = async (): Promise<Array<any>> => {
  if (!isInstalled()) {
    throw new Error("Wallet is not installed");
  }

  const addresses = await getAddresses("mainnet"); // mainnet or testnet
  
  return addresses;

  // Example output of addresses:
  //
  // [{
  //   publicKey:
  //     "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
  //   address: "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4",
  //   format: "segwit",
  // }]
  //
  // or an error is thrown by the wallet provider.
}
