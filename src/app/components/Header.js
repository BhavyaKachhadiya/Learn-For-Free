import React from 'react'

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Learn For Free</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/graphic-design">Graphic Design</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/website-develoment">Website Development</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/3d" >3D</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
