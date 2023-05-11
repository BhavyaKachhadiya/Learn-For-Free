// import Image from 'next/image'
// import styles from './page.module.css'
// import GraphicDesignChannel from './components/Functions/GraphicDesign'
// import WebDevelopmentChannel from './components/Functions/WebDev.js'
// import data from './components/Functions/WebDev.js'
// import AllYTChannel from './components/Functions/All'
// import webdev from './API/All.json'

// export default function Home() {
//   return (
//     <>
//     <div class="container">
//       <h3>Graphic Design</h3> 
//       <GraphicDesignChannel channels={data}/>
//       <h3>Website Develoment</h3>
//       <WebDevelopmentChannel channels={data} />
//       {/* <AllYTChannel  /> */}
//       </div>
//     </>
//   )
// }

import ChannelList from 'src/app/components/Functions/All';
import webDevelopmentChannels from 'src/app/API/WebDev.json';

export default function Home() {
  return (
    <>
    <div class="container">
      <h1 style={{marginBottom: 50 +"px"}}>Graphic Design</h1>
    <ChannelList channels={webDevelopmentChannels} category="Web Development" />
    </div>
    </>
  );
}
