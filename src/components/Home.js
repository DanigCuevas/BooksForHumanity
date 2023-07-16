import React from 'react'
// to create the slideshow
import Carousel from 'react-bootstrap/Carousel'
// for book posts
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// for creating a grid for posts 
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// for book info pop up
import Modal from 'react-bootstrap/Modal';
import { useState,useRef } from 'react';
// for the overlay on buttons
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip';
// for the heart icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    // return <h1>Home</h1>
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const target = useRef(null);
    return(
    
        <>
        {/* Slide Show Components */}
        <Carousel fade>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://img.freepik.com/free-photo/books-arrangement-with-cup-cofee_23-2148851107.jpg?w=1380&t=st=1689458901~exp=1689459501~hmac=c8e0b69e1f0dcca591a406af87bfc953c8208fa44f0259b7b32c14dd9208c0ac"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Find gently used book near you!</h3>
                <p>Look through the discover tab to find books you're in search for that people are giving away. </p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://img.freepik.com/free-photo/creative-composition-with-books-flower_23-2148851059.jpg?w=1060&t=st=1689458659~exp=1689459259~hmac=699cdc48dd4a130a3538562c08e5b32531f7854ed9b208cb65b83543a56dcdc9"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Share the books you love with someone new</h3>
                <p>Post a book you don't need anymore and let someone new get a chance to read them. </p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://img.freepik.com/free-photo/top-view-different-books-arrangement_23-2148851102.jpg?w=1380&t=st=1689458924~exp=1689459524~hmac=5c55e6b236f9488998c1816072a5edddf0466ee898cb97ea4456b4106b4a352f"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Making a difference one book at a time</h3>
                <p>
                Sustianably donating books so everyone gets a chance to read. 
                </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    {/* Book postings */}
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
            {/* Book 1 */}
          <Card onClick={handleShow} style={{ cursor: "pointer" }} >
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/elegant-love-book-cover-template_23-2148798559.jpg?w=1060&t=st=1689462213~exp=1689462813~hmac=be85978f96ede2ffaaec309ad3cda46751791b8a77a38c03846343c72a3bc487" />
            <Card.Body>
              <Card.Title>A Love Story</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button ref={target} onClick={() => setShow(!show)} variant="primary"> Add to Cart </Button>{' '}
              <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Added to Cart
                    </Tooltip>
                  )}
              </Overlay>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faHeart} /> 
              </Button>
            </Card.Body>
          </Card>
        {/* Pop Up Info for Book 1*/}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="ms-auto">A Love Story</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src="https://img.freepik.com/free-vector/elegant-love-book-cover-template_23-2148798559.jpg?w=1060&t=st=1689462213~exp=1689462813~hmac=be85978f96ede2ffaaec309ad3cda46751791b8a77a38c03846343c72a3bc487" class="img-fluid"/>
                A wonderful story about love and growing up. I highly reccomend this book to romance lovers. <br/>
                Username: dcueva <br/>
                Location: Seattle, WA<br/>
            </Modal.Body>
            <Modal.Footer>
                <Button ref={target} onClick={() => setShow(!show)} variant="primary"> Add to Cart </Button>{' '}
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Added to Cart
                    </Tooltip>
                  )}
                </Overlay>
                <Button variant="outline-secondary">
                    <FontAwesomeIcon icon={faHeart} /> 
                </Button>
            </Modal.Footer>
        </Modal>

          {/* Book2 */}
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=1380&t=st=1689461100~exp=1689461700~hmac=16605e9e6b6b4a72d8c22a69cbb2c9a7e78d18faf1984c4e4390f6b9d9c1fd75" />
            <Card.Body>
              <Card.Title>Different Winter</Card.Title>
              <Card.Text>
                It's a cold winter, what awaits James?
              </Card.Text>
              <Button ref={target} onClick={() => setShow(!show)} variant="primary">Add to Cart</Button>{' '}
              <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Added to Cart
                    </Tooltip>
                  )}
              </Overlay>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faHeart} /> 
              </Button>
            </Card.Body>
          </Card>
          {/* Pop Up Info for Book 2*/}
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="ms-auto">Different Winter</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <img src="https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=1380&t=st=1689461100~exp=1689461700~hmac=16605e9e6b6b4a72d8c22a69cbb2c9a7e78d18faf1984c4e4390f6b9d9c1fd75" class="img-fluid"/>
                  A heart wrenching story of a young man going through winter. I highly reccomend this book to anyone! <br/>
                  Username: eggsandspam <br/>
                  Location: New York, New York<br/>
              </Modal.Body>
              <Modal.Footer>
                  <Button ref={target} onClick={() => setShow(!show)} variant="primary"> Add to Cart </Button>{' '}
                  <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                        Added to Cart
                      </Tooltip>
                    )}
                  </Overlay>
                  <Button variant="outline-secondary">
                      <FontAwesomeIcon icon={faHeart} /> 
                  </Button>
              </Modal.Footer>
          </Modal>
          {/* Book3 */}
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/creative-innovative-education-book-cover_23-2149410117.jpg?w=1060&t=st=1689467203~exp=1689467803~hmac=d77be249a96c26ce1d51c636658a821febfe9f0ee0a251704aaa600580640393" />
            <Card.Body>
              <Card.Title>New Educators</Card.Title>
              <Card.Text>
                A great book for rising educators. 
              </Card.Text>
              <Button ref={target} onClick={() => setShow(!show)} variant="primary">Add to Cart</Button>{' '}
              <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                        Added to Cart
                      </Tooltip>
                    )}
              </Overlay>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faHeart} /> 
              </Button>
            </Card.Body>
          </Card>
          {/* Pop Up for book 3 */}
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="ms-auto">New Educators</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <img src="https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=1380&t=st=1689461100~exp=1689461700~hmac=16605e9e6b6b4a72d8c22a69cbb2c9a7e78d18faf1984c4e4390f6b9d9c1fd75" class="img-fluid"/>
                  New Educators need this. It saved me so much time when I first started teaching. <br/>
                  Username: mSmith <br/>
                  Location: Vancouver, Canada<br/>
              </Modal.Body>
              <Modal.Footer>
                  <Button ref={target} onClick={() => setShow(!show)} variant="primary"> Add to Cart </Button>{' '}
                  <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                        Added to Cart
                      </Tooltip>
                    )}
                  </Overlay>
                  <Button variant="outline-secondary">
                      <FontAwesomeIcon icon={faHeart} /> 
                  </Button>
              </Modal.Footer>
          </Modal>
            {/* Book 4 */}
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/good-paper-wattpad-book-cover_23-2149452379.jpg?w=1060&t=st=1689475888~exp=1689476488~hmac=bd9f7cf72f42a63308c0405db4a0f1b260584ac204d7b1a26a3cb416e809e2fc" />
            <Card.Body>
              <Card.Title>Looks Good on Paper</Card.Title>
              <Card.Text>
                A story about two young teenagers navigating their lives. 
              </Card.Text>
              <Button ref={target} onClick={() => setShow(!show)} variant="primary">Add to Cart</Button>{' '}
              <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                        Added to Cart
                      </Tooltip>
                    )}
              </Overlay>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faHeart} /> 
              </Button>
            </Card.Body>
         </Card>
         {/* Pop Up for book 4 */}
         <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="ms-auto">Looks good on Paper</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <img src="https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=1380&t=st=1689461100~exp=1689461700~hmac=16605e9e6b6b4a72d8c22a69cbb2c9a7e78d18faf1984c4e4390f6b9d9c1fd75" class="img-fluid"/>
                  I always reccomend this book to my friends. It tells a story of two teenagers navigating the world around them <br/>
                  Username: JamesC <br/>
                  Location: Los Angeles, California<br/>
              </Modal.Body>
              <Modal.Footer>
                  <Button ref={target} onClick={() => setShow(!show)} variant="primary"> Add to Cart </Button>{' '}
                  <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                        Added to Cart
                      </Tooltip>
                    )}
                  </Overlay>
                  <Button variant="outline-secondary">
                      <FontAwesomeIcon icon={faHeart} /> 
                  </Button>
              </Modal.Footer>
          </Modal>
           {/* Book5 */}
           <Card>
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/atomic-love-wattpad-book-cover_23-2149231553.jpg?w=1060&t=st=1689475963~exp=1689476563~hmac=a37063430503f0dfef2b7834224ad39832db7d9927e2bfcdcd530bb55e89b0f6" />
            <Card.Body>
              <Card.Title>Atomic Love</Card.Title>
              <Card.Text>
                Every page made me want to read even more. It's such a sweet romance book. I'd love for it to go to a new home.
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>{' '}
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faHeart} /> 
              </Button>
            </Card.Body>
         </Card>
          {/* Pop Up for book 5 */}
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="ms-auto">Atomic Love</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <img src="https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=1380&t=st=1689461100~exp=1689461700~hmac=16605e9e6b6b4a72d8c22a69cbb2c9a7e78d18faf1984c4e4390f6b9d9c1fd75" class="img-fluid"/>
                  What romance awaits Lily and Sam in this heart wrenching story. I wanted to share this book with someone since it made me so happy seeing the romance unfold.  <br/>
                  Username: LilyBear <br/>
                  Location: Kyoto,Japan <br/>
              </Modal.Body>
              <Modal.Footer>
                  <Button ref={target} onClick={() => setShow(!show)} variant="primary"> Add to Cart </Button>{' '}
                  <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                        Added to Cart
                      </Tooltip>
                    )}
                  </Overlay>
                  <Button variant="outline-secondary">
                      <FontAwesomeIcon icon={faHeart} /> 
                  </Button>
              </Modal.Footer>
          </Modal>
        </Col> 
      ))}
    </Row>
    </>  
    );

   
}