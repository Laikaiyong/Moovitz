export async function GET() {
	try {
		
		const res = await fetch(
			`${process.env.MASCHAIN_API_URL}/api/wallet/wallet/0xd001570e75b31f6764cca245874a2fb13da24eab`,
			{
				method: "GET",
				headers: {
					client_id: process.env.MASCHAIN_CLIENT_KEY,
					client_secret: process.env.MASCHAIN_SECRET_KEY,
					"content-type": "application/json",
				},
			}
		);
	
		const data = await res.json();
	
		return Response.json(data);
	} catch (error) {
		return Response.json({
			"status": "Error"
		})
	}
}
