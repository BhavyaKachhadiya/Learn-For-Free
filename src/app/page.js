import Image from 'next/image'
import styles from './page.module.css'
import GraphicDesignChannel from './components/Functions/GraphicDesign'
import WebDevelopmentChannel from './components/Functions/WebDev.js'
import data from './components/Functions/WebDev.js'

export default function Home() {
  return (
    <>
      <h3>Graphic Design</h3> 
      <GraphicDesignChannel channels={data}/>
      <h3>Website Develoment</h3>
      <WebDevelopmentChannel channels={data} />
    </>
  )
}
