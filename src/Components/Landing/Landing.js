import React from "react"
import "./Landing.css"

const Landing = () => {
  return (
    <>
    <div  className="row">
    <div className="column" >
      <h2 className="TextCaption">Welcome to <span className="ColorText">LandKit.</span></h2>
      <br />
      <h2 className="bottom">Devlope Anything.</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
      <div className="margin-block">
      <button className="button">View All Pages</button>
      <button className="button">View All Pages</button>
      </div>
    </div>
    <div className="column2">
    <img src="img.jpg" alt="Trulli" width="100%" height="100%" />
    </div>
  </div>
    </>
  )
}
export default Landing