import { createClient } from "next-sanity"

export default createClient({
  projectId: "tgebeywx",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-31",
})
