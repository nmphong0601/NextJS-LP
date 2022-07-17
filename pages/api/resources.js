// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql } from "@apollo/client";
import client from "apollo-client";

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Process a POST request
    const { data } = await client.query({
      query: gql`
        query Countries {
          countries {
            code
            name
            emoji
          }
        }
      `,
    });

    res.status(200).json(data);
  } else {
    // Handle any other HTTP method
    res.status(200).json({});
  }
}