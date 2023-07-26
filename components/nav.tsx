import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Logo from "../assets/images/gbrlogo.svg"
import Logo_white from "../assets/images/logo-all-white.svg"
import Burger from "../assets/images/burger.svg"
import Arrow from "../assets/images/arrow_back_white.svg"

type Props = {
  navData: {
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
}

export default function MainNavComponent({ navData }: Props) {
  // top level menu
  function rtnMainMenu(input: any) {
    return input?.filter((val) => val.heading === true)
  }
  const MainMenu = navData && rtnMainMenu(navData)


  // sub menu introductions
  function rtnIntroductionsSubs(array: any) {
    return array.filter((val) => val.subheading_intro === true)
  }
  const introductionSubs = navData && rtnIntroductionsSubs(navData)

  // sub menu vision
  function rtnVisionSubs(array: any) {
    return array.filter((val) => val.subheading_vision === true)
  }
  const visionSubs = navData && rtnVisionSubs(navData)
  // sub menu experience
  function rtnExperienceSubs(array: any) {
    return array.filter((val) => val.subheading_experience === true)
  }
  const experienceSubs = navData && rtnExperienceSubs(navData)
  // sub menu More
  function rtnMoreSubs(array: any) {
    return array.filter((val) => val.subheading_more === true)
  }
  const moreSubs = navData && rtnMoreSubs(navData)


  // Desktop menu logic
  const [showMe, setShowMe] = useState(false)
  function toggle() {
    setShowMe(!showMe)
  }


  // mobile menu logic
  const [showMe_mob_intro, setShowMe_mob_intro] = useState(false)
  function toggle_mob_intro() {
    setShowMe_mob_intro(!showMe_mob_intro)
  }
  const [showMe_mob_vision, setShowMe_mob_vision] = useState(false)
  function toggle_mob_vision() {
    setShowMe_mob_vision(!showMe_mob_vision)
  }
  const [showMe_mob_experience, setShowMe_mob_experience] = useState(false)
  function toggle_mob_experience() {
    setShowMe_mob_experience(!showMe_mob_experience)
  }
  const [showMe_mob_more, setShowMe_mob_more] = useState(false)
  function toggle_mob_more() {
    setShowMe_mob_more(!showMe_mob_more)
  }


  

  return (
    <div>
      <div className="nav-container max-w-7xl flex justify-between h-20 m-auto items-center">
        <Link href="/">
          <Image className="logo" src={Logo} alt="Logo" />
        </Link>
        <nav className="mainNav">
          <ul className="mainNav_top flex w-100%">
            {MainMenu &&
              MainMenu.map((mainNavItem) => (
                <li key={mainNavItem._id} className="mx-4">
                  <a
                    className="sub_menu_item"
                    href={`#${mainNavItem.link}`}
                  >
                    {mainNavItem.name}
                  </a>
                  <div className="sub_menu">
                    <ul>
                      {introductionSubs &&
                        mainNavItem.name === "Introduction" &&
                        introductionSubs.map((subItem) => (
                          <li key={subItem._id} className="">
                            <a href={`#${subItem.link}`}>
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                   
                      {visionSubs &&
                        mainNavItem.name === "Vision For Rail in Britain" &&
                        visionSubs.map((subItem) => (
                          <li key={subItem._id} className="">
                            <a href={`#${subItem.link}`}>
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                   
                      {experienceSubs &&
                        mainNavItem.name === "The GBR Experience" &&
                        experienceSubs.map((subItem) => (
                          <li key={subItem._id} className="">
                            <a href={`#${subItem.link}`}>
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                   
                      {moreSubs &&
                        mainNavItem.name === "More" &&
                        moreSubs.map((subItem) => (
                          <li key={subItem._id} className="">
                            <a href={`#${subItem.link}`}>
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>
        </nav>
        <button onClick={toggle}>
          <Image className="burger" src={Burger} alt="Burger" />
        </button>
      </div>

      <div
        className="nav-mobile"
        style={{
          display: showMe ? "block" : "none",
        }}
      >
        <div className="mob-banner">
          <Image className="logo_white" src={Logo_white} alt="Logo" />
          <button onClick={toggle}>
            <Image className="arrow" src={Arrow} alt="Arrow - Back" />
          </button>
        </div>
        <nav className="main-Nav-mobile">
          <ul>
            {MainMenu &&
              MainMenu.map((mainNavItem) => (
                <li key={mainNavItem._id} className="">
                  <a href={`#${mainNavItem.link}`}>
                    {mainNavItem.name}
                  </a>

                  {introductionSubs && mainNavItem.name === "Introduction" && (
                    <button onClick={toggle_mob_intro} className="arrow_mob">
                      <Image src={Arrow} alt="Arrow - Back" />
                    </button>
                  )}
                  {visionSubs && mainNavItem.name === "Vision For Rail in Britain" && (
                    <button onClick={toggle_mob_vision} className="arrow_mob">
                      <Image src={Arrow} alt="Arrow - Back" />
                    </button>
                  )}
                  {experienceSubs && mainNavItem.name === "The GBR Experience" && (
                    <button onClick={toggle_mob_experience} className="arrow_mob">
                      <Image src={Arrow} alt="Arrow - Back" />
                    </button>
                  )}
                  {moreSubs && mainNavItem.name === "More" && (
                    <button onClick={toggle_mob_more} className="arrow_mob">
                      <Image src={Arrow} alt="Arrow - Back" />
                    </button>
                  )}

                  <ul>
                    {introductionSubs &&
                      mainNavItem.name === "Introduction" &&
                      introductionSubs.map((subItem) => (
                        <li
                          key={subItem._id}
                          className=""
                          style={{
                            display: showMe_mob_intro ? "block" : "none",
                          }}
                        >
                          <a href={`#${subItem.link}`}>
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    {visionSubs &&
                      mainNavItem.name === "Vision For Rail in Britain" &&
                      visionSubs.map((subItem) => (
                        <li
                          key={subItem._id}
                          className=""
                          style={{
                            display: showMe_mob_vision ? "block" : "none",
                          }}
                        >
                          <a href={`#${subItem.link}`}>
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                      {experienceSubs &&
                      mainNavItem.name === "The GBR Experience" &&
                      experienceSubs.map((subItem) => (
                        <li
                          key={subItem._id}
                          className=""
                          style={{
                            display: showMe_mob_experience ? "block" : "none",
                          }}
                        >
                          <a href={`#${subItem.link}`}>
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    {moreSubs &&
                      mainNavItem.name === "More" &&
                      moreSubs.map((subItem) => (
                        <li
                          key={subItem._id}
                          className=""
                          style={{
                            display: showMe_mob_more ? "block" : "none",
                          }}
                        >
                          <a href={`#${subItem.link}`}>
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
