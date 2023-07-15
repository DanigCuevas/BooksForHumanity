import React from 'react';

export default function Navbar() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
<<<<<<< HEAD

      <div className="container py-5">
        <div className="row text-center text-black">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4">Our Team</h1>
            <p className="lead mb-0">
              Our team consists of 4 members passionate about creating a book sharing community.
            </p>
            <p className="lead">
              Snippet by
              <a href="https://bootstrapious.com/snippets" className="text-black">
                <u>Bootstrapious</u>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-md-6 col-lg-3 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Team Member 1</h5>
              <span className="small text-uppercase text-muted">CEO - Founder</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Team Member 2</h5>
              <span className="small text-uppercase text-muted">CEO - Founder</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Team Member 3</h5>
              <span className="small text-uppercase text-muted">CEO - Founder</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Team Member 4</h5>
              <span className="small text-uppercase text-muted">CEO - Founder</span>
            </div>
          </div>
        </div>
      </div> */}

<nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Eleventh navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="assets/images/logo.jpg" alt="logo" class="navbarLogo" height="70">
 
          </img>
        </a>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarsExample09" >
          <form className="form-inline mx-auto w-50">
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

          {/* <form role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
          </form> */}

          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <a className="nav-link" href="">Discover</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}




