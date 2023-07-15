import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Home() {
    // return <h1>Home</h1>
    return(
        // Slide show compoenets 
        <>
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
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=1380&t=st=1689461100~exp=1689461700~hmac=16605e9e6b6b4a72d8c22a69cbb2c9a7e78d18faf1984c4e4390f6b9d9c1fd75" />
        <Card.Body>
            <Card.Title>Different Winter</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
        </Card.Body>
    </Card>
    </>
    );

   
}