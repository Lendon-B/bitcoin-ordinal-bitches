"use client";
import React, { ReactNode } from "react";
import { Chain, Network, OrdConnectProvider } from "@ordzaar/ord-connect";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <OrdConnectProvider network={Network.TESTNET} chain={Chain.BITCOIN}>
      {children}
    </OrdConnectProvider>
  );
}
