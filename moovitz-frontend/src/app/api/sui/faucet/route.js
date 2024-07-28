
// import { getFaucetHost, requestSuiFromFaucetV1, requestSuiFromFaucetV0 } from '@mysten/sui/faucet';
//   export async function POST(req) {
// 	try {
// 		const { address } = await req.json();
//         console.log(address);
//       const response = await requestSuiFromFaucetV1({
//         host: getFaucetHost("testnet"),
//         recipient: address.toString(),
//       });
//       console.log(response);

//       const data = await response.json();
//       console.log(data);


//       //   window.location.href = "/balance";
//       return Response.json(data)
//     } catch (error) {
//     return Response.json({
//         "status": "Error"
//     })
//   }
// }

// pages/api/requestGas.js

export async function POST(req) {
        const { recipient } = await req.json();

        try {
            const response = await fetch('https://faucet.testnet.sui.io/gas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    FixedAmountRequest: {
                        recipient: recipient.toString(),
                    },
                }),
            });

            const data = await response.json();
            console.log(data);
            return Response.json(data);
        } catch (error) {
            return Response.json({ error: 'Failed to fetch gas' });
        }
}
