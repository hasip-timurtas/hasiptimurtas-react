import React, { Component } from "react";
//import Modal from 'react-modal';
import { Button, Modal } from "react-bootstrap";

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      alt: "",
      src: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { alt, src } = this.state;
    return (
      <>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 resume-left">
          <div>
            <img
              src="img/resume.jpg"
              className="resume-pic"
              alt="hasip timurtaş resume pic"
              onClick={(e) => this.setState({ show: true, src: "img/resume.jpg" })}
            />
          </div>

          <div className="resume-profile">
            <span className="resume-slash">//</span> <span className="resume-header">Profile</span> <br />
            <div className="line"></div>
            <strong>Name</strong> <br />
            M. Hasip Timurtaş
            <br />
            <br />
            <strong>Experience</strong> <br />
            10+ Years
            <br />
            <br />
            <strong>Address</strong> <br />
            8, Flat 1, Triq Manoel De Vilhena
            <br />
            Griza, Malta
            <br />
            <br />
            <strong>Phone</strong> <br />
            +356 9933 9240
            <br />
            <br />
            <strong>Email</strong> <br />
            hasip.timurtas@gmail.com
            <br />
            <br />
            <strong>Website</strong> <br />
            <a href="https://www.hasip.dev">hasip.dev</a>
          </div>
          <div className="resume-social">
            <span className="resume-slash">//</span> <span className="resume-header">Social</span> <br />
            <div className="line"></div>
            /hasiptimurtas
            <a href="https://www.linkedin.com/in/hasiptimurtas" className="btn btn-social-icon btn-xs btn-linkedin" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
            <br />
            /hasip-timurtas
            <a href="https://github.com/hasip-timurtas" className="btn btn-social-icon btn-xs btn-github" target="_blank">
              <i className="fa fa-github"></i>
            </a>
            <br />
            +hasipTimurtas
            <a href="https://plus.google.com/+hasipTimurtas" className="btn btn-social-icon btn-xs btn-google" target="_blank">
              <i className="fa fa-google"></i>
            </a>
            <br />
            @hasip_timurtas
            <a href="https://twitter.com/hasip_timurtas" className="btn btn-social-icon btn-xs btn-twitter" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
            <br />
            /hasip.timurtas
            <a href="https://www.facebook.com/hasip.timurtas" className="btn btn-social-icon btn-xs btn-facebook" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <br />
          </div>
          <div className="resume-certificate">
            <small> click certificate for image</small>
            <span className="resume-slash">//</span> <span className="resume-header">Certificates</span>
            <div className="line"></div>
            <div className="certificate row" onClick={(e) => this.setState({ show: true, src: "img/certificates/smartpro.jpg" })}>
              <div className="col-md-4">
                {" "}
                <img src="img/certificates/smartpro.jpg" />
              </div>

              <div className="col-md-8">Software and Database Expertise - SmartPro 2011</div>
            </div>
            <div
              className="certificate row"
              onClick={(e) => this.setState({ show: true, src: "img/certificates/BA-outstanding-chievement-certificate.jpg" })}
            >
              <div className="col-md-4">
                <img src="img/certificates/BA-outstanding-chievement-certificate.jpg" />
              </div>

              <div className="col-md-8">Software and Database Expertise - Bilge Adam 2013</div>
            </div>
            <div className="certificate row" onClick={(e) => this.setState({ show: true, src: "img/certificates/BA-atandance.jpg" })}>
              <div className="col-md-4">
                <img src="img/certificates/BA-atandance.jpg" />
              </div>

              <div className="col-md-8">Software and Database Expertise 2 - Bilge Adam 2013</div>
            </div>
            <div className="certificate row" onClick={(e) => this.setState({ show: true, src: "img/certificates/MS-html-css.jpg" })}>
              <div className="col-md-4">
                <img src="img/certificates/MS-html-css.jpg" />
              </div>

              <div className="col-md-8">Microsoft Certificate of attendance - Programming in HTML 5 with Javascript and CSS3</div>
            </div>
            <div className="certificate row" onClick={(e) => this.setState({ show: true, src: "img/certificates/MS-promgraiming-charp.jpg" })}>
              <div className="col-md-4">
                <img src="img/certificates/MS-promgraiming-charp.jpg" />
              </div>

              <div className="col-md-8">Microsoft Certificate of attendance - Programming in C#</div>
            </div>
            <div className="certificate row" onClick={(e) => this.setState({ show: true, src: "img/certificates/MS-azure.jpg" })}>
              <div className="col-md-4">
                <img src="img/certificates/MS-azure.jpg" />
              </div>

              <div className="col-md-8">Microsoft Certificate of attendance - Developing windows Azure and Web Services</div>
            </div>
            <div className="certificate row" onClick={(e) => this.setState({ show: true, src: "img/certificates/MS-mvc.jpg" })}>
              <div className="col-md-4">
                <img src="img/certificates/MS-mvc.jpg" />
              </div>

              <div className="col-md-8">Microsoft Certificate of attendance - Developing ASP.NET 4.5 MVC Web Applications</div>
            </div>
          </div>
        </div>
        <div className="modal fade bs-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <img />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={src} alt={alt} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Example;
