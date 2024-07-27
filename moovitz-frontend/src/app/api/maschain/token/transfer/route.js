// Transfer tokens from one wallet to another
export async function POST() {
	const res = await fetch(`${process.env.MASCHAIN_API_URL}/api/token/token-transfer`, {
		method: "POST",
		headers: {
			client_id: process.env.MASCHAIN_CLIENT_KEY,
			client_secret: process.env.MASCHAIN_SECRET_KEY,
			"content-type": "application/json",
		},
		body: JSON.stringify({
			wallet_address: "", // user wallet address
			to: "0xD001570E75b31f6764cCa245874a2fb13DA24eab", // to another user wallet address
			amount: "2",
			contract_address: "0xE7749981B2D6250371142C9A2076033B8aF4fbFb",
			callback_url: "",
		}),
	});

	const data = await res.json();

	return Response.json(data);
}
