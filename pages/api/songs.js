// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
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
