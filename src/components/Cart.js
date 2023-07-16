import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';


export default function Cart() {

    return (
      <>
        
      {/* card group side by side  */}
      <CardGroup>
      
      <Card>
        <Card.Img variant="top" src="https://cdn.penguin.co.uk/dam-assets/books/9780241476840/9780241476840-jacket-large.jpg" width="200"/>
        <Card.Body>
          <Card.Title>The Inheritance Games - Jennifer Lynn Barnes</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/41zgTTZ8HVL._SL500_.jpg" width="200"/>
        <Card.Body>
          <Card.Title>Book Lovers - Emily Henry</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://covers.storytel.com/jpg-640/9780063350328.0da7e9d0-8263-4c35-b156-252eef51956b?quality=70" width="200"/>
        <Card.Body>
          <Card.Title>Shatter Me Series - Tahereh Mafi </Card.Title>
        </Card.Body>
      </Card>

    </CardGroup>{''}

    <div className="pt-5">
      <h2 className="text-center">Personal Information</h2>
    </div>
    

    <form>
      <div class="form-row">
        
        {/* <br> <h2 className="text-center">Personal Information</h2></br> */}
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity"></input>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip"></input>
        </div>
      </div>
      <button type="submit" className="btn-submit">Submit</button>
  </form>
</>
  );

}