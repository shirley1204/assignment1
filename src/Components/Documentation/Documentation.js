import React from "react"
import SelectionWidget from "./SelectionWidget"

const Documentation = () => {
  let allColors=["Red","Blue","Green"];
  let Make=["Small","Medium","Large","Extra Large"];
  return (
    <>
      <SelectionWidget color={allColors} Make={Make} />
    </>
  )
}
export default Documentation