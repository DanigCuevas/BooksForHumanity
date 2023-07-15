import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
    // return <h1>Home</h1>
    return(
        <Carousel fade>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://img.freepik.com/free-photo/books-arrangement-with-cup-cofee_23-2148851107.jpg?w=1380&t=st=1689458901~exp=1689459501~hmac=c8e0b69e1f0dcca591a406af87bfc953c8208fa44f0259b7b32c14dd9208c0ac"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Find gently used book near you!</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
     );
}