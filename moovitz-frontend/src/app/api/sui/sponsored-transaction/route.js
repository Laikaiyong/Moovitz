async function topUpToken(amount) {
	const promise = async () => {
		track("Top Up Token");

		setTopUpLoading(true);

		// Get the keypair for the current user.
		const keypair = await enokiFlow.getKeypair({ network: "testnet" });

		// Create a new transaction block
		const txb = new Transaction();

		// Add the top-up transaction to the block
		txb.moveCall({
			arguments: [txb.pure(amount), txb.object("0x1234567890abcdef1234567890abcdef")],
			target: "0x9876543210fedcba9876543210fedcba::token::top_up",
		});

		try {
			// Sponsor and execute the transaction block, using the Enoki keypair
			const res = await enokiFlow.sponsorAndExecuteTransaction({
				transaction: txb,
				network: "testnet",
				client,
			});
			setTopUpLoading(false);

			return res;
		} catch (error) {
			setTopUpLoading(false);
			throw error;
		}
	};
}
