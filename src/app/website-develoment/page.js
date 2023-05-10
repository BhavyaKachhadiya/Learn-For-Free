import React from 'react'
import WebDevelopmentChannel from '../components/Functions/WebDev.js'
import data from '../components/Functions/WebDev.js'

export default function WebsiteDeveloment() {
  return (
    <>
    <div class="container">
    <h1>Website Develoment</h1>
    {/* <WebDevelopmentChannelList/> */}
    <WebDevelopmentChannel channels={data} />
    </div>
    </>
  )
}
