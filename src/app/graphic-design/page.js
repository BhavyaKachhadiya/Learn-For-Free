import React from 'react'
import GraphicDesignChannel from '../components/Functions/GraphicDesign'
import data from '../components/Functions/GraphicDesign'

export default function GraphicDesign() {
  return (
    <>
    <h1>Best Youtube channel For Graphic Design</h1>
    <GraphicDesignChannel channels={data} />
    </>
  )

}
