import React, { useState } from "react"
import {
  FloatingMenu,
  MainButton,
  ChildButton
} from "react-floating-button-menu"

import { MdAdd, MdClear, MdPerson, MdPictureAsPdf } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { IoLogoLinkedin } from "react-icons/io"

import "./FooatingBtn.style.scss"

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="Floating">
      <FloatingMenu
        slideSpeed={700}
        direction="left"
        spacing={8}
        isOpen={isOpen}>
        <MainButton
          iconResting={<MdAdd style={{ fontSize: 20 }} nativecolor="white" />}
          iconActive={<MdClear style={{ fontSize: 20 }} nativecolor="white" />}
          backgroundColor="black"
          onClick={() => setIsOpen(!isOpen)}
          size={56}
        />
        <ChildButton
          icon={<MdPictureAsPdf style={{ fontSize: 20 }} nativecolor="white" />}
          backgroundColor="white"
          size={40}
          onClick={() =>
            window.open(
              require("../../../assets/pdf/Joungwoo Baik-Resume.pdf"),
              "_download"
            )
          }
        />
        <ChildButton
          icon={<MdPerson style={{ fontSize: 20 }} nativecolor="white" />}
          backgroundColor="white"
          size={40}
          onClick={() => window.open("https://www.jbaik.com", "_blank")}
        />

        <ChildButton
          icon={<IoLogoLinkedin style={{ fontSize: 20 }} nativecolor="white" />}
          backgroundColor="white"
          size={40}
          onClick={() =>
            window.open("https://www.linkedin.com/in/baik/", "_blank")
          }
        />
        <ChildButton
          icon={<FaGithub style={{ fontSize: 20 }} nativecolor="white" />}
          backgroundColor="white"
          size={40}
          onClick={() =>
            window.open("https://www.github.com/woobaik", "_blank")
          }
        />
      </FloatingMenu>
    </div>
  )
}

export default FloatingButton
