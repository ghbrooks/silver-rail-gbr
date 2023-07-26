import Head from "next/head"
import sanityClient from "@/sanityClient"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import imageUrlBuilder from "@sanity/image-url"

import Nav from "../components/nav"
import Hero from "../components/hero"
import WhoAreSR from "../components/whoAreSR"
import Mission from "../components/mission"
import Stats from "../components/stats"
import Team from "../components/team"
import Platform from "../components/platform"
import Problem from "../components/problem"
import Situation from "../components/situation"
import Complicated from "../components/complicated"
import Solution from "../components/solution"
import Timeline from "../components/timeline"
import Research from "../components/research"
import Studies from "../components/studies"
import Prototypes from "../components/prototypes"
import Direction from "../components/direction"
import Train from "../components/train"
import Footer from "../components/footer"
import SolutionDetails from "../components/solutionDetails"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

type Props = {
  navData: navData
}

export type navData = {
  _id: string
  name: string
  link: string
  heading: boolean
  subheading_intro: boolean
  subheading_vision: boolean
  subheading_experience: boolean
  subheading_more: boolean
  order: number
}[]


export async function getServerSideProps() {
  const {
    navData,
  } = await sanityClient.fetch(
    `{
      "navData": *[_type == "nav"] | order(order asc) {
        _id,
        name,
        link,
        heading,
        subheading_intro,
        subheading_vision,
        subheading_experience,
        subheading_more,
        order,
      },
    }`
  )

  return {
    props: {
      navData,
    },
  }
}

export default function Home({
  navData
}: Props) {
  return (
    <div>
      <Head>
        <title>SilverRail - Great British Railway Pitch</title>
      </Head>
      <Nav navData={navData} />
      <Hero />
      <WhoAreSR />
      <Mission />
      <Stats />
      <Team />
      <Platform />
      <Problem />
      <Situation />
      <Complicated />
      <Solution />
      <SolutionDetails />
      <Timeline />
      <Research />
      <Studies />
      <Prototypes />
      <Direction />
      <Train />
      <Footer />
    </div>
  )
}
