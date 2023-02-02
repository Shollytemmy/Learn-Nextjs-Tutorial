// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { gadgetData } from "@/data";

export default function handler(req, res) {

  const {id} = req.query

  const gadget = gadgetData.find((gadget) => gadget.id === Number(id))
  res.status(200).json(gadget)
}
//localhost/api/gadget/8