import React from "react"

import "./Footer.styles.scss"
import skills from "../../../chipSet"
import Chip from "@material-ui/core/Chip"

import { MdCopyright } from "react-icons/md"

const footer = () => {
  const chipIterator = skills.map(chip => {
    return (
      <Chip
        key={chip.name}
        style={{
          backgroundColor: chip.color,
          color: "white",
          margin: "0.5rem",
          padding: "0.4rem"
        }}
        varient="outlined"
        size="small"
        label={
          <div>
            {chip.icon} {chip.name}
          </div>
        }></Chip>
    )
  })

  return (
    <div className="Footer" id="footer">
      <div className="cards">
        <div className="card">
          <div className="cardTitle">B Paup</div>
          <div className="cardBody">
            <div>Full Stack Developer</div>
            <div>Based in San Francisco</div>
            <div>worldstarppa@gmail.com</div>
            <div>444 - 555 - 6666</div>
          </div>
        </div>
        <div className="card skills">
          <div className="cardTitle">TECH STACK</div>
          <div className="cardChips">{chipIterator}</div>
        </div>
        <div className="card">
          <div className="cardTitle">RELATED LINKS</div>
          <div className="cardBody">
            <div
              className="link"
              onClick={() =>
                window.open("https://www.linkedin.com/in/baik/", "_blank")
              }>
              LinkedIn
            </div>
            <div
              className="link"
              onClick={() =>
                window.open("https://www.github.com/woobaik", "_blank")
              }>
              GitHub
            </div>
            <div
              className="link"
              onClick={() => window.open("https://www.jbaik.com", "_none")}>
              Personal Website
            </div>
            <div
              className="link"
              onClick={() =>
                window.open(
                  require("../../../assets/pdf/Joungwoo Baik-Resume.pdf"),
                  "_none"
                )
              }>
              Resume
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        {/* fix this later */}
        <MdCopyright /> <div>{"  "} J. All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default footer
