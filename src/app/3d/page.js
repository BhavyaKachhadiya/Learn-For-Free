import React from 'react'
import Three_dChannel from '../components/Functions/3d'
import data from '../components/Functions/3d'

export default function d() {
  return (
    <>
    <div class="container">
    <h1>Best Youtube channel For 3d</h1>
    <Three_dChannel channels={data} />
    </div>
    </>
  )

}
