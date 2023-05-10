import React from 'react'
import WebDevelopmentChannel from '../components/Functions/WebDev.js'
import data from '../components/Functions/WebDev.js'

export default function WebsiteDeveloment() {
  return (
    <>
    <h1>Best Youtube channel For Website-develoment</h1>
    {/* <WebDevelopmentChannelList/> */}
    <WebDevelopmentChannel channels={data} />
    </>
  )
}
