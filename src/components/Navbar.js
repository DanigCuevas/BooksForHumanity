import React from 'react';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              id="MDB-logo"
              src="logo.jpg"
              alt="BFH Logo"
              draggable="false"
              height="70"
            />
          </a> 

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline mx-auto">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for a book title"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-dark" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Discover
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}




