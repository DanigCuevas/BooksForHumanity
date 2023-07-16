import React from 'react'

export default function About() {
  return (
    <>
    <div>
      <div className="container py-5">
        <div className="container py-5">
          <div className="row text-center text-black">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-4">Our Team</h1>
              <h4><center><b>
                 "320 million books end up in landfill sites every year."
              </b></center></h4>
              <p className="lead mb-0">
              BOOKS FOR HUMANITY is a space where people from all around the world exchange their used books. By giving away books, users can earn points 
they can then redeem to get a free book or discounted prices at partnered bookstores.This promotes sustainability, decreased landill trash, 
and fosters a sense of community amongy book lovers!
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
                  alt="Image of Alexia"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Alexia</h5> 
                <span className="small text-uppercase text-muted">Lorem ipsum dolor sit amet.</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://media.discordapp.net/attachments/1128041738951479356/1129955295045636106/IMG_7536.jpg?width=665&height=688"
                  alt="Image of Daniela"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Daniela</h5>
                <span className="small text-uppercase text-muted">College Student in Comp Sci.</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                   src="https://media.discordapp.net/attachments/1128041738951479356/1129955294672334939/IMG_6532.jpg?width=679&height=701"
                  alt="Image of Maan"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Maan</h5>
                <span className="small text-uppercase text-muted">College Student in Software Eng.</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://media.discordapp.net/attachments/1128041738951479356/1129955294361952298/IMG_5025.jpg?width=719&height=681"
                  alt="Image of Christiana"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Christiana</h5>
                <span className="small text-uppercase text-muted">High school Senior and booklover</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}




