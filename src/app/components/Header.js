import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">Learn For Free</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" href="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/graphic-design">Graphic Design</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/website-develoment">Website Development</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " href="/3d" >3D</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
