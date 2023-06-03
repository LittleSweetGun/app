"use client";

import "./globals.css";

import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Toaster } from "react-hot-toast";

import "@rainbow-me/rainbowkit/styles.css";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My Goodhive App",
  projectId: "GOODHIVE",
  chains,
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors,
  webSocketPublicClient,
});

import { NavBar } from "./components/nav-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WagmiConfig config={config}>
          <RainbowKitProvider chains={chains}>
            <NavBar />
            <Toaster />
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
