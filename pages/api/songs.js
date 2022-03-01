// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const default_url = process.env.default_url;
  res.status(200).json({
    name: 'John Doe',
    particles: default_url + '/particles/firework.json'
  })
}