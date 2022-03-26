// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors'
import initMiddleware from '../lib/init-middleware'
// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  await cors(req, res)
  const default_url = process.env.default_url;
  res.status(200).json(

    [
      {
        "name": "Relax song 1",
        "song": default_url + "/songs/song1.mp3",
        "particles": default_url + "/particles/firework.json"
      },
      {
        "name": "Relax song 2",
        "song": default_url + "/songs/song2.mp3",
        "particles": default_url + "/particles/default.json"
      }
    ]

  )
}
