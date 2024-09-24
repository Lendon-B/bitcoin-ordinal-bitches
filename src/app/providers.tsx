"use client";
import React, { ReactNode } from "react";
import { Chain, Network, OrdConnectProvider, OrdConnectKit } from "@ordzaar/ord-connect";

// // import { PageProvider } from "@/contexts/PageContext";
// // import { SolanaWalletProvider } from "@/contexts/SolanaWalletProvider";
// import { QueryClientProvider, QueryClient } from "react-query";

// const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <OrdConnectProvider network={Network.TESTNET} chain={Chain.BITCOIN}>
      {children}
    </OrdConnectProvider>
  );
}
