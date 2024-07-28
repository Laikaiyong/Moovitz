"use client";

import { createNetworkConfig, SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EnokiFlowProvider } from "@mysten/enoki/react";

import "@mysten/dapp-kit/dist/index.css";

export default function Providers({ children }) {
	// Config options for the networks you want to connect to
	const { networkConfig } = createNetworkConfig({
		localnet: { url: getFullnodeUrl("localnet") },
		devnet: { url: getFullnodeUrl("devnet") },
		testnet: { url: getFullnodeUrl("testnet") },
		mainnet: { url: getFullnodeUrl("mainnet") },
	});
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<SuiClientProvider networks={networkConfig} defaultNetwork='testnet'>
				<EnokiFlowProvider apiKey={process.env.NEXT_PUBLIC_ENOKI_PUB_KEY}>
					<WalletProvider>{children}</WalletProvider>
				</EnokiFlowProvider>
			</SuiClientProvider>
		</QueryClientProvider>
	);
}
