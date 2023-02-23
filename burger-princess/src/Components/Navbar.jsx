import React from 'react'

const Navbar = () => {
/*   const logOutHandler = () =>{
  } */
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Burger Princess</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Members</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Order Tracking</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Log Out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
