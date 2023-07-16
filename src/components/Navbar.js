import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchTerm) {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        setSearchResults(data.items || []);
        setSearchTerm('');
        navigate('/search');
      } catch (error) {
        console.log('Error occurred while fetching data:', error);
      }
    }
  };

  const handleClear = () => {
    setSearchResults([]);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Eleventh navbar example">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="assets/images/logo.jpg" alt="logo" className="navbarLogo" height="70" />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarsExample09">
            <form className="form-inline mx-auto w-50" onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for a book title"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                <Link to="/" className="nav-link">Discover</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">Account</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" width="20" alt="Cart" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {searchResults.length > 0 && (
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3">
              <button className="btn btn-primary" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>
          <div className="row">
            {searchResults.map((book) => (
              <div className="col-md-4" key={book.id}>
                <div className="card">
                  <img className="card-img-top" src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                  <div className="card-body">
                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                    <p className="card-text">{book.volumeInfo.authors?.join(', ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}






