export async function POST() {
	const res = await fetch(`${process.env.MASCHAIN_API_URL}/api/wallet/create-user`, {
		method: "POST",
		headers: {
			client_id: process.env.MASCHAIN_CLIENT_KEY,
			client_secret: process.env.MASCHAIN_SECRET_KEY,
			"content-type": "application/json",
		},
		body: JSON.stringify({
			name: "test vandyck",
			email: "testvandyck@gmail.com",
		}),
	});

	const data = await res.json();

	return Response.json(data);
}
