async function incrementCounter() {
	const promise = async () => {
		track("Increment Counter");

		setCounterLoading(true);

		// Get the keypair for the current user.
		const keypair = await enokiFlow.getKeypair({ network: "testnet" });

		// Create a new transaction block
		const txb = new Transaction();

		// Add some transactions to the block...
		txb.moveCall({
			arguments: [
				txb.object("0xd710735500fc1be7dc448b783ad1fb0b5fd209890a67e518cc47e7dc26856aa6"),
			],
			target:
				"0x5794fff859ee70e28ec8a419f2a73830fb66bcaaaf76a68e41fcaf5e057d7bcc::global_counter::increment",
		});

		try {
			// Sponsor and execute the transaction block, using the Enoki keypair
			const res = await enokiFlow.sponsorAndExecuteTransaction({
				transaction: txb,
				network: "testnet",
				client,
			});
			setCounterLoading(false);

			return res;
		} catch (error) {
			setCounterLoading(false);
			throw error;
		}
	};

	toast.promise(promise, {
		loading: "Incrementing counter...",
		success: (data) => {
			getCount();
			return (
				<span className='flex flex-row items-center gap-2'>
					Counter incremented!{" "}
					<a href={`https://suiscan.xyz/testnet/tx/${data.digest}`} target='_blank'>
						<ExternalLink width={12} />
					</a>
				</span>
			);
		},
		error: (error) => {
			return error.message;
		},
	});
}
