import React, { Fragment } from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";

const EcommercePage = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our bestsellers
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Shirt</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Denim shirt{" "}
                    <MDBBadge pill color="danger">
                      NEW
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>120$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sport wear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Sweatshirt
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>139$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sport wear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Grey blouse{" "}
                    <MDBBadge pill color="primary">
                      BEST
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>99$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Outwear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Black jacket
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>219$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
     
      <div className="container">
   
  <div class="row">
  <figure class="col-md-4">
          <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg" data-size="1600x1067">
            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(145).jpg" class="img-fluid" />
          </a>
        </figure>
  
        <figure class="col-md-4">
          <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg" data-size="1600x1067">
            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(150).jpg" class="img-fluid" />
          </a>
        </figure>
  
        <figure class="col-md-4">
          <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg" data-size="1600x1067">
            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(152).jpg" class="img-fluid" />
          </a>
        </figure>
  
        <figure class="col-md-4">
          <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg" data-size="1600x1067">
            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg" class="img-fluid" />
          </a>
        </figure>
  
        <figure class="col-md-4">
          <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg" data-size="1600x1067">
            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg" class="img-fluid" />
          </a>
        </figure>
  
        <figure class="col-md-4">
          <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg" data-size="1600x1067">
            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(40).jpg" class="img-fluid" />
          </a>
        </figure>
  
        <figure class="col-md-4">
          <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg" data-size="1600x1067">
            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg" class="img-fluid" />
          </a>
        </figure>
  
        <figure class="col-md-4">
          <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg" data-size="1600x1067">
            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" class="img-fluid" />
          </a>
        </figure>
  
        <figure class="col-md-4">
          <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg" data-size="1600x1067">
            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(149).jpg" class="img-fluid" />
          </a>
        </figure>
    {/* <div class="col-md-12">
  
    
      
  
      </div> */}
      </div>
      </div>
    
  
     
  
       
  </section>
   
  );
}

export default EcommercePage;