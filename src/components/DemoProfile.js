import React from 'react';
import { Link } from 'react-router-dom';

export default function DemoProfile() {
  return (
    <div className="d-flex justify-content-start align-items-center">
      <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
          <use xlinkHref="#bootstrap"></use>
        </svg>
      </Link>


      <div className="dropdown text-end ms-auto">
        <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="assets/images/user.png" alt="mdo" width="50" height="50" className="rounded-circle" />
        </a>
        <ul className="dropdown-menu text-small">
          <li><a className="dropdown-item" href="#">My Books</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
}
